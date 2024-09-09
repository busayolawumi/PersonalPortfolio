import { createWriteStream } from 'fs';
import { SitemapStream } from 'sitemap';
import { resolve } from 'path';

// Base URL of your site
const BASE_URL = 'https://meet-busayo.vercel.app/';

// Define the routes you want to include in the sitemap
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/projects', changefreq: 'weekly', priority: 0.8 },
  // Add other routes as necessary
];

// Function to generate the sitemap
async function generateSitemap() {
  try {
    // Create a sitemap stream
    const sitemap = new SitemapStream({ hostname: BASE_URL });

    // Path where the sitemap will be written
    const sitemapPath = resolve('dist', 'sitemap.xml');

    // Create a write stream to output the sitemap file
    const writeStream = createWriteStream(sitemapPath);

    // Pipe the sitemap stream to the write stream
    sitemap.pipe(writeStream);

    // Add each route to the sitemap
    routes.forEach((route) => sitemap.write(route));

    // Finalize the sitemap
    sitemap.end();

    // Wait for the stream to finish
    await new Promise((resolve, reject) => {
      writeStream.on('finish', resolve);
      writeStream.on('error', reject);
    });

    console.log('Sitemap created successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

// Call the function to generate the sitemap
generateSitemap();
