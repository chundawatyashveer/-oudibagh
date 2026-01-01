# Deployment Guide

This frontend application is built with React + Vite and is ready for deployment.

## Build Status

✅ Build successful - The application builds without errors.

## Pre-Deployment Checklist

1. ✅ All dependencies installed (`npm install`)
2. ✅ Build successful (`npm run build`)
3. ✅ Static assets copied to public folder
4. ✅ Vite configuration optimized

## Build Command

```bash
npm run build
```

The built files will be in the `dist/` folder.

## Deployment Options

### Option 1: Static Hosting (Recommended)

The `dist/` folder contains all the static files needed for deployment. You can deploy to:

- **Netlify**: Drag and drop the `dist` folder or connect your Git repository
- **Vercel**: Connect your Git repository or deploy the `dist` folder
- **GitHub Pages**: Deploy the `dist` folder contents
- **AWS S3 + CloudFront**: Upload `dist` folder contents to S3 bucket
- **Any static hosting service**: Upload the `dist` folder contents

### Option 2: Server Deployment

If deploying to a server with Node.js:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview the build (optional)
npm run preview

# The dist folder is ready to serve
```

## Important Notes

1. **Base Path**: The application uses `/` as the base path. If deploying to a subdirectory, update `vite.config.js`:
   ```js
   base: '/your-subdirectory/',
   ```

2. **Environment Variables**: No environment variables are required for the frontend.

3. **Backend API**: Make sure to configure the backend API URL if your backend is deployed separately.

4. **Static Assets**: 
   - jQuery, Fancybox, and WOW.js are loaded from `/js/` (public folder)
   - All images and CSS are bundled in the build

## File Structure After Build

```
dist/
├── index.html          # Main HTML file
├── assets/
│   ├── *.js           # JavaScript bundles
│   ├── *.css          # CSS bundles
│   └── *.jpg/png/etc  # Image assets
└── js/
    ├── jquery.js
    ├── jquery.fancybox.js
    └── wow.js
```

## Build Warnings

- Chunk size warnings are normal for this application due to large image assets
- Script warnings about jQuery/Fancybox are expected as they're loaded externally

## Troubleshooting

If you encounter issues:

1. Clear the `dist` folder: `rm -rf dist` (or delete it manually)
2. Rebuild: `npm run build`
3. Check browser console for any runtime errors
4. Verify all files in `public/js/` are present

## Production Optimization

The build is already optimized with:
- Minified JavaScript and CSS
- Asset optimization
- Code splitting (where applicable)
- Source maps disabled for production

