
    const sitemap = require('sitemap');
    const hostname = 'https:/nrhartfrc.github.io/personalwebsite/';

    const urls = [
      { url: '/', changefreq: 'daily', priority: 1 },
      { url: '/about', changefreq: 'monthly', priority: 0.8 },
      { url: '/contact', changefreq: 'monthly', priority: 0.8 },
      // Add additional pages here
    ];

    const sitemapInstance = sitemap.createSitemap({
      hostname,
      urls,
    });


    const fs = require('fs');

    // Write sitemap to public directory
    fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());
  
  