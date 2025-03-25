// AI Voice Software Data
const aiVoiceTools = [
    {
        id: 1,
        name: "iFlytek Voice Synthesis",
        description: "An AI voice synthesis platform by iFlytek, offering industry-leading Chinese voice synthesis technology with a rich voice library and emotional variations, suitable for various video and educational content voiceovers.",
        imageUrl: "images/xunfei.jpg",
        websiteUrl: "https://www.xfyun.cn/",
        tags: ["paid", "chinese", "multilingual"],
        features: ["200+ voices", "Multilingual support", "Custom voice training"]
    },
    {
        id: 2,
        name: "Aigei",
        description: "A well-known digital creative resource sharing platform in China, providing rich AI dubbing resources and sound effects, ideal for creative video production and game development voiceover needs.",
        imageUrl: "images/aigei.jpg",
        websiteUrl: "https://www.aigei.com/",
        tags: ["free", "paid", "chinese"],
        features: ["Massive sound library", "Professional voiceover resources", "Free resource updates"]
    },
    {
        id: 3,
        name: "Google Cloud Text-to-Speech",
        description: "Professional voice synthesis service provided by Google Cloud Platform, featuring natural and fluent multilingual dubbing capabilities, suitable for professional application development and global content creation.",
        imageUrl: "images/google.jpg",
        websiteUrl: "https://cloud.google.com/text-to-speech",
        tags: ["paid", "multilingual"],
        features: ["220+ voices", "30+ languages", "WaveNet technology", "SSML support"]
    },
    {
        id: 4,
        name: "TTSMaker",
        description: "A simple and easy-to-use online text-to-speech tool that supports multiple languages and voice options, suitable for beginners and simple scenarios.",
        imageUrl: "images/ttsmaker.jpg",
        websiteUrl: "https://ttsmaker.com/",
        tags: ["free", "multilingual"],
        features: ["Simple operation", "Fast conversion", "Multilingual support", "No software download required"]
    },
    {
        id: 5,
        name: "Langlang Voice",
        description: "A platform focused on Chinese emotional AI dubbing, especially suitable for short videos, audiobooks, and advertising voiceovers, providing rich scene templates.",
        imageUrl: "images/langlang.jpg",
        websiteUrl: "https://lang123.top/?rmd=63971",
        tags: ["paid", "chinese"],
        features: ["Emotion adjustment", "Multi-scene dubbing", "Batch processing", "Custom tone"]
    },
    {
        id: 6,
        name: "Miko AI",
        description: "An intelligent tool integrating AI voice synthesis and AI text creation, providing highly natural voice synthesis and diversified content creation functions.",
        imageUrl: "images/miko.jpg",
        websiteUrl: "https://syfzkl.yulukj.cc/h5/clone-24/index.html?self_os=1&platform_id=24&app_id=1520&agency_id=162&channel_id=20275&qhclickid=9c83d3237ead2402#/",
        tags: ["paid", "chinese", "multilingual"],
        features: ["AI text creation", "Real-time preview", "Multi-scene templates", "Emotional dubbing"]
    },
    {
        id: 7,
        name: "SoundAI",
        description: "A professional voice technology service platform providing one-stop solutions for speech recognition, synthesis, and more, suitable for enterprise-level application development and innovative projects.",
        imageUrl: "images/soundai.jpg",
        websiteUrl: "https://www.soundai.com/",
        tags: ["paid", "chinese", "multilingual"],
        features: ["Enterprise solutions", "Customized development", "Multi-scenario support", "High-precision voice recognition"]
    },
    {
        id: 8,
        name: "PandaVault",
        description: "A comprehensive office resource platform providing AI dubbing services for multiple scenarios and tones, supporting popular TikTok, film interpretation, education and training, and other types, suitable for creators and corporate users.",
        imageUrl: "images/xiongmao.jpg",
        websiteUrl: "https://www.tukuppt.com/index/aigc?scene=89&plan=12253-325999-131589199&qhclickid=8b513218042f91b4",
        tags: ["free", "paid", "chinese"],
        features: ["Rich voice library", "Multi-scene support", "Chinese-English mixed dubbing", "Multiple emotional expressions"]
    }
];

// Get DOM elements
const toolsContainer = document.getElementById('tools-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchClear = document.getElementById('search-clear');

// Current filter conditions and search keywords
let currentFilter = 'all';
let currentSearchTerm = '';

// Define a function to test links
function testUrl(url, name) {
    console.log(`Testing link [${name}]: ${url}`);
    // Display encoded URL in console for debugging
    console.log(`Encoded: ${encodeURI(url)}`);
}

// Helper function for handling social media sharing with enhanced error handling
function handleSocialShare(platform, url, text = null) {
    let shareLink = '';
    const encodedUrl = encodeURIComponent(url);
    const encodedText = text ? encodeURIComponent(text) : '';
    
    try {
        switch(platform) {
            case 'facebook':
                shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
                break;
                
            case 'twitter':
                shareLink = `https://twitter.com/intent/tweet?url=${encodedUrl}${encodedText ? '&text=' + encodedText : ''}`;
                break;
                
            case 'linkedin':
                shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
                break;
                
            default:
                console.error('Unknown social platform:', platform);
                return false;
        }
        
        console.log(`${platform} share link:`, shareLink);
        
        // Try to open window
        const shareWindow = window.open(shareLink, '_blank', 'width=700,height=500,noopener,noreferrer');
        
        if (!shareWindow || shareWindow.closed || typeof shareWindow.closed === 'undefined') {
            console.warn('Popup window was blocked or could not be opened');
            // Fallback: direct navigation
            window.location.href = shareLink;
        }
        
        return true;
    } catch (error) {
        console.error('Error during sharing:', error);
        alert('There was a problem with the sharing feature. Please try copying the link and sharing manually.');
        return false;
    }
}

// Update setupSocialShare function to use the new helper function
function setupSocialShare() {
    const shareBtns = document.querySelectorAll('.share-btn');
    
    shareBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const platform = this.getAttribute('data-platform');
            const shareTitle = "AI Voice Software - Find the Best AI Voice Tools";
            const shareUrl = window.location.href;
            
            if (platform === 'copy') {
                navigator.clipboard.writeText(shareUrl).then(function() {
                    alert('Link copied to clipboard!');
                }).catch(function() {
                    // Fallback to traditional method
                    const textArea = document.createElement("textarea");
                    textArea.value = shareUrl;
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    alert('Link copied to clipboard!');
                });
                return;
            }
            
            handleSocialShare(platform, shareUrl, shareTitle);
        });
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Test all URLs
    aiVoiceTools.forEach(tool => {
        testUrl(tool.websiteUrl, tool.name);
    });
    
    // Generate all tool cards
    renderTools(aiVoiceTools);
    
    // Add filter event listeners
    setupFilters();
    
    // Add search functionality
    setupSearch();
    
    // Initialize clear button status
    updateClearButtonVisibility();
    
    // Set up social sharing functionality
    setupSocialShare();
});

// Set up search functionality
function setupSearch() {
    console.log('Setting up search functionality...');
    
    // Ensure DOM elements exist
    if (!searchButton || !searchInput) {
        console.error('Search elements do not exist!', {
            searchButton: searchButton ? 'exists' : 'does not exist',
            searchInput: searchInput ? 'exists' : 'does not exist'
        });
        return;
    }
    
    // Search button click event - using a more explicit method to add
    searchButton.onclick = function(e) {
        e.preventDefault();
        console.log('Search button clicked');
        performSearch();
    };
    
    // Enter key search
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            console.log('Enter key pressed');
            performSearch();
        }
    });
    
    // Real-time search (as user types)
    let debounceTimeout;
    searchInput.addEventListener('input', function() {
        console.log('Typing...');
        // Update clear button status
        updateClearButtonVisibility();
        
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(function() {
            console.log('Input debounce triggered');
            performSearch();
        }, 500);
    });
    
    // Initialize clear button status
    if (searchClear) {
        searchClear.style.display = 'none';
    }
    
    console.log('Search functionality setup complete');
}

// Perform search
function performSearch() {
    console.log('Performing search...');
    currentSearchTerm = searchInput.value.trim().toLowerCase();
    console.log('Search keyword:', currentSearchTerm);
    applyFiltersAndSearch();
    updateClearButtonVisibility();
    console.log('Search completed');
}

// Apply both filters and search
function applyFiltersAndSearch() {
    console.log('Applying filters and search...');
    let filteredTools = aiVoiceTools;
    console.log('Initial tool count:', filteredTools.length);
    
    // Apply tag filter
    if (currentFilter !== 'all') {
        filteredTools = filteredTools.filter(tool => tool.tags.includes(currentFilter));
        console.log('Tool count after filtering:', filteredTools.length);
    }
    
    // Apply search term filter
    if (currentSearchTerm !== '') {
        filteredTools = filteredTools.filter(tool => {
            // Search in name
            if (tool.name.toLowerCase().includes(currentSearchTerm)) {
                console.log('Name match:', tool.name);
                return true;
            }
            
            // Search in description
            if (tool.description.toLowerCase().includes(currentSearchTerm)) {
                console.log('Description match:', tool.name);
                return true;
            }
            
            // Search in features
            if (tool.features.some(feature => feature.toLowerCase().includes(currentSearchTerm))) {
                console.log('Feature match:', tool.name);
                return true;
            }
            
            // Search in tags (converting tag names to user-friendly format)
            const tagLabels = {
                free: 'free 免费',
                paid: 'paid premium cost 付费',
                chinese: 'chinese china mandarin 中文 汉语',
                multilingual: 'multilingual multiple languages international 多语言 国际'
            };
            
            const hasMatchingTag = tool.tags.some(tag => {
                const expandedTagTerms = tagLabels[tag] || tag;
                if (expandedTagTerms.includes(currentSearchTerm)) {
                    console.log('Tag match:', tool.name, 'Tag:', tag);
                    return true;
                }
                return false;
            });
            
            return hasMatchingTag;
        });
        console.log('Tool count after search:', filteredTools.length);
    }
    
    // Render the filtered tools
    console.log('Rendering tools...');
    renderTools(filteredTools);
    
    // Highlight search term in the rendered cards
    if (currentSearchTerm) {
        console.log('Highlighting search term...');
        highlightSearchTerm();
    }
    
    console.log('Filtering and search completed');
}

// Highlight search term in the cards
function highlightSearchTerm() {
    const term = currentSearchTerm;
    const elements = document.querySelectorAll('.tool-title, .tool-desc, .tool-features li');
    
    elements.forEach(element => {
        const text = element.innerHTML;
        if (!text.includes('<mark>')) { // Avoid double-highlighting
            const regex = new RegExp(term, 'gi');
            const newText = text.replace(regex, match => `<mark>${match}</mark>`);
            element.innerHTML = newText;
        }
    });
}

// Render tool cards function
function renderTools(tools) {
    // Clear container
    toolsContainer.innerHTML = '';
    
    // If no tools match the criteria
    if (tools.length === 0) {
        let noResultsMessage = '<div class="no-results">No matching AI voice tools found';
        
        if (currentSearchTerm) {
            noResultsMessage += ` for keyword: "${currentSearchTerm}"`;
        }
        
        if (currentFilter !== 'all') {
            const filterLabels = {
                free: 'Free Options',
                paid: 'Paid Products',
                chinese: 'Chinese Optimized',
                multilingual: 'Multilingual Support'
            };
            noResultsMessage += ` with filter: ${filterLabels[currentFilter] || currentFilter}`;
        }
        
        noResultsMessage += '</div>';
        toolsContainer.innerHTML = noResultsMessage;
        return;
    }
    
    // Create card for each tool
    tools.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.setAttribute('data-url', tool.websiteUrl);
        
        // Make the entire card clickable - enhanced click functionality
        card.addEventListener('click', function(e) {
            // If clicking on a link or its child elements, don't perform additional operations (let the link handle itself)
            if (e.target.closest('.tool-link') || e.target.closest('.tool-share-btn')) {
                return;
            }
            
            // Otherwise, open the website when the entire card is clicked
            console.log('Card click opens website:', tool.name);
            
            try {
                // Open link and log status
                const url = this.getAttribute('data-url');
                console.log(`Attempting to open: ${url}`);
                window.open(url, '_blank', 'noopener,noreferrer');
            } catch (error) {
                console.error(`Error opening link:`, error);
                // Try using location.href as a fallback
                window.location.href = url;
            }
        });
        
        // Get the first two characters of the tool name as an icon
        const iconText = tool.name.slice(0, 2);
        const randomGradientIndex = tool.id % 5; // Create some visual variety
        const gradients = [
            'linear-gradient(135deg, #6366f1, #8b5cf6)',
            'linear-gradient(135deg, #3b82f6, #6366f1)',
            'linear-gradient(135deg, #8b5cf6, #d946ef)',
            'linear-gradient(135deg, #ec4899, #8b5cf6)',
            'linear-gradient(135deg, #0ea5e9, #6366f1)'
        ];
        
        // Store URL as a data attribute
        const linkButton = `<button class="tool-link" onclick="openUrl(this)" data-url="${tool.websiteUrl.replace(/"/g, '&quot;')}">Visit Website</button>`;
        
        // Add share button
        const shareButton = `
            <button class="tool-share-btn" onclick="shareToolCard(event, '${tool.name}', '${tool.websiteUrl.replace(/"/g, '&quot;')}')">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
                <span>Share</span>
            </button>
        `;
        
        card.innerHTML = `
            <div class="tool-img-container">
                <div class="tool-img-placeholder" style="background: ${gradients[randomGradientIndex]}">
                    <span class="tool-icon" style="color: white; opacity: 0.9;">${iconText}</span>
                </div>
            </div>
            <div class="tool-info">
                <h3 class="tool-title">${tool.name}</h3>
                <p class="tool-desc">${tool.description}</p>
                
                <div class="tool-tags">
                    ${renderTags(tool.tags)}
                </div>
                
                <div class="tool-features">
                    <ul>
                        ${tool.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="tool-actions">
                    ${linkButton}
                    ${shareButton}
                </div>
            </div>
        `;
        
        toolsContainer.appendChild(card);
        
        // Try loading the image after card rendering to avoid flickering
        const imgContainer = card.querySelector('.tool-img-container');
        const imgPlaceholder = card.querySelector('.tool-img-placeholder');
        
        if (tool.imageUrl) {
            const img = new Image();
            img.onload = function() {
                imgPlaceholder.style.opacity = '0';
                img.className = 'tool-img';
                img.alt = tool.name;
                imgContainer.appendChild(img);
                
                // Fade-in effect
                setTimeout(() => {
                    imgPlaceholder.style.display = 'none';
                }, 300);
            };
            img.onerror = function() {
                // Keep placeholder when image loading fails
                console.log(`Image loading failed: ${tool.imageUrl}`);
                // Ensure placeholder is visible
                imgPlaceholder.style.opacity = '1';
            };
            img.src = tool.imageUrl;
        }
        
        // Test if the link is valid (for debugging only)
        const testLink = function(url) {
            console.log(`Testing link: ${url}`);
        };
        testLink(tool.websiteUrl);
    });
}

// Render tags function
function renderTags(tags) {
    return tags.map(tag => {
        const tagLabels = {
            free: 'Free',
            paid: 'Paid',
            chinese: 'Chinese Optimized',
            multilingual: 'Multilingual'
        };
        
        return `<span class="tool-tag ${tag}">${tagLabels[tag] || tag}</span>`;
    }).join('');
}

// Setup filter functionality
function setupFilters() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to current button
            button.classList.add('active');
            
            // Get filter value
            currentFilter = button.getAttribute('data-filter');
            
            // Apply filters and search
            applyFiltersAndSearch();
        });
    });
}

// Add global function to open URL
function openUrl(element) {
    event.stopPropagation();
    const url = element.getAttribute('data-url');
    console.log("Button click opens URL:", url);
    window.open(url, '_blank', 'noopener,noreferrer');
}

// Share specific tool card
function shareToolCard(event, toolName, toolUrl) {
    event.stopPropagation(); // Prevent bubbling to avoid triggering card click
    
    // Create share menu
    const shareMenu = document.createElement('div');
    shareMenu.className = 'share-menu';

    const sharePoints = [
        {name: 'Facebook', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z"></path></svg>', platform: 'facebook'},
        {name: 'Twitter', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10C2.38 10 2.38 10 2.38 10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"></path></svg>', platform: 'twitter'},
        {name: 'LinkedIn', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"></path></svg>', platform: 'linkedin'},
        {name: 'Copy Link', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>', platform: 'copy'}
    ];

    const description = `Check out this amazing AI voice tool: ${toolName}`;
    
    sharePoints.forEach(point => {
        const item = document.createElement('div');
        item.className = 'share-menu-item';
        item.innerHTML = `
            <div class="share-menu-icon">${point.icon}</div>
            <div class="share-menu-text">${point.name}</div>
        `;
        
        item.addEventListener('click', function() {
            const platform = point.platform;
            
            if (platform === 'copy') {
                navigator.clipboard.writeText(toolUrl).then(function() {
                    alert('Link copied to clipboard!');
                }).catch(function() {
                    const textArea = document.createElement("textarea");
                    textArea.value = toolUrl;
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    alert('Link copied to clipboard!');
                });
            } else {
                handleSocialShare(platform, toolUrl, description);
            }
            
            document.body.removeChild(shareMenu);
        });
        
        shareMenu.appendChild(item);
    });

    // Add click outside to close menu
    shareMenu.addEventListener('click', function(e) {
        if (e.target === shareMenu) {
            document.body.removeChild(shareMenu);
        }
    });

    // Get click position and set menu position
    const rect = event.target.closest('.tool-share-btn').getBoundingClientRect();
    shareMenu.style.top = (rect.bottom + window.scrollY + 10) + 'px';
    shareMenu.style.left = (rect.left + window.scrollX) + 'px';

    document.body.appendChild(shareMenu);
}

// Global search function, can be called directly from HTML
function doSearch() {
    console.log('Global search function called');
    
    // Show search status
    const searchStatus = document.getElementById('search-status');
    if (searchStatus) {
        searchStatus.textContent = 'Searching...';
        searchStatus.className = 'search-status active';
    }
    
    // Perform search
    performSearch();
    
    // Update search status
    setTimeout(() => {
        if (searchStatus) {
            searchStatus.textContent = `Search completed: ${currentSearchTerm}`;
            
            // Hide status after 3 seconds
            setTimeout(() => {
                searchStatus.className = 'search-status';
            }, 3000);
        }
    }, 300);
}

// Clear search function
function clearSearch() {
    console.log('Clear search');
    searchInput.value = '';
    currentSearchTerm = '';
    updateClearButtonVisibility();
    applyFiltersAndSearch();
    
    // Update search status
    const searchStatus = document.getElementById('search-status');
    if (searchStatus) {
        searchStatus.textContent = 'Search cleared';
        searchStatus.className = 'search-status active';
        
        // Hide status after 2 seconds
        setTimeout(() => {
            searchStatus.className = 'search-status';
        }, 2000);
    }
}

// Update clear button visibility
function updateClearButtonVisibility() {
    if (searchInput.value.trim()) {
        searchClear.style.display = 'flex';
    } else {
        searchClear.style.display = 'none';
    }
} 