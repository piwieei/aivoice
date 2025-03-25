# AI Voice Software Navigator

This is a navigation page that showcases and compares various AI voice software available on the market, helping users quickly understand and choose AI voice tools that suit their needs.

## Features

- Displays basic information and special features of various AI voice software
- Provides filtering functionality, allowing filtering by free/paid, Chinese-optimized, multilingual, etc.
- Responsive design, adapting to various device screens
- Clean and intuitive interface, making it easy for users to compare and choose

## Usage Guide

1. Simply open the `index.html` file in your browser to view the navigation page
2. Use the filter buttons at the top of the page to filter different types of AI voice software
3. Click on the "Visit Website" button on each software card to jump to the corresponding official website

## Image Setup Guide

To display images of the AI voice software on the navigation page, please follow these steps:

1. Add the following images to the `images` folder:
   - xunfei.jpg (iFlytek Voice)
   - peiyinxiu.jpg (Peiyin Show)
   - murf.jpg (Murf AI)
   - peiyinshenqi.jpg (Voice Wizard)
   - yusheng.jpg (Yusheng Voice)
   - descript.jpg (Descript)
   - synthesys.jpg (Synthesys)
   - yunpeiyin.jpg (Cloud Voice)
   - placeholder.jpg (placeholder image, displayed when other images fail to load)

2. Recommended image dimensions:
   - Width: at least 300 pixels
   - Height: approximately 160-200 pixels
   - Format: JPG or PNG

3. If you don't have specific software images, you can:
   - Take screenshots of logos or interfaces from official websites
   - Use AI image generation tools to create relevant images
   - Set up a generic placeholder image

## Customization and Extension

If you want to add more AI voice software or modify existing information, edit the `aiVoiceTools` array in the `script.js` file, following the existing format to add new software information.

```javascript
{
    id: newID,
    name: "Software Name",
    description: "Software description",
    imageUrl: "images/image-name.jpg",
    websiteUrl: "https://website-url",
    tags: ["tag1", "tag2"],  // Available tags: free, paid, chinese, multilingual
    features: ["Feature 1", "Feature 2", "Feature 3"]
}
```

## Technical Details

This project is built with pure frontend technologies:
- HTML5
- CSS3 (responsive design)
- JavaScript (ES6+)

No server-side support is required, it can run directly in any modern browser. 