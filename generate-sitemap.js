const { createWriteStream } = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const path = require('path');

// Define your site's base URL
const BASE_URL = 'https://yoursite.vercel.app';

// Define your routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/projects', changefreq: 'weekly', priority: 0.8 },
  // Add all your site's routes here
];

// Create a write stream to generate the sitemap.xml file
const sitemap = new SitemapStream({ hostname: BASE_URL });
const writeStream = createWriteStream(path.resolve(__dirname, 'dist/sitemap.xml'));

// Pipe the sitemap to the file
streamToPromise(sitemap.pipe(writeStream)).then(() => console.log('Sitemap created successfully!'));

// Add your routes to the sitemap
routes.forEach(route => sitemap.write(route));

sitemap.end();
