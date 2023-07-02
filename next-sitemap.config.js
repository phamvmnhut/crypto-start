/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://your-domain.com',
    changefreq: 'daily',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    exclude: ["/admin"]
}