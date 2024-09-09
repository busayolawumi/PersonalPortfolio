import { createWriteStream } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import { resolve } from 'path';

const BASE_URL = 'https://yoursite.vercel.app';

const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/projects', changefreq: 'weekly', priority: 0.8 },
  // Add all your routes here
];

const sitemap = new SitemapStream({ hostname: BASE_URL });
const writeStream = createWriteStream(resolve('dist/sitemap.xml'));

streamToPromise(sitemap.pipe(writeStream)).then(() => {
  console.log('Sitemap created successfully!');
});

routes.forEach(route => sitemap.write(route));

sitemap.end();
