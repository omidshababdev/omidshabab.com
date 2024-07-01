/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://omidshabab.com",
  generateRobotsTxt: true,
  changefreq: "daily",
  exclude: [
    "/books/*",
    "/components/*",
    "/courses/*",
    "/podcasts/*",
    "/portfolio/*",
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: [
          "/books/*",
          "/components/*",
          "/courses/*",
          "/podcasts/*",
          "/portfolio/*",
        ],
      },
    ],
  },
};

module.exports = config;
