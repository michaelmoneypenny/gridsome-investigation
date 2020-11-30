// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
var environment = process.env.MODE;

if (environment === "test") process.env.GRIDSOME_API_URL = "testUrl";

module.exports = {
  siteName: "Moneypenny",
  plugins: [
    {
      use: "@gridsome/plugin-critical",
      options: {
        paths: ["/"],
        width: 1920,
        height: 1080,
      },
    },
  ],
  pathPrefix: "/uk",
  outputDir: "/publish/uk",
};
