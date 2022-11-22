// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: "bennetr wiki",
  tagline: "How-To's, cheat sheets and useful links",
  favicon: "img/favicon.ico",

  // URL
  url: "https://wiki.bennetr.me",
  baseUrl: "/",
  trailingSlash: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // GitHub pages
  projectName: "wiki",
  organizationName: "bennetrr",

  // Locales
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      /** @type {import("@docusaurus/preset-classic").Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/bennetrr/wiki/edit/main/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
  /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
    ({
      navbar: {
        title: "bennetr wiki",
        logo: {
          alt: "bennetr logo",
          src: "img/bennetr_logo.svg"
        },
        items: [
          {
            type: "doc",
            docId: "overview",
            docsPluginId: "howto",
            position: "left",
            label: "Tips & How-To's"
          },
          {
            type: "doc",
            docId: "overview",
            docsPluginId: "links",
            position: "left",
            label: "Useful Links"
          },
          {
            type: "doc",
            docId: "overview",
            docsPluginId: "cheatsheets",
            position: "left",
            label: "Cheat Sheets"
          },
          {
            href: "https://github.com/bennetrr/wiki",
            label: "View Source",
            position: "right"
          }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Tips & How-To's",
            items: [
              {
                label: "Overview",
                to: "/howto/overview/"
              },
              {
                label: "Bash",
                to: "/howto/bash/argument-parsing"
              }
            ]
          },
          {
            title: "Cheat Sheets",
            items: [
              {
                label: "Overview",
                to: "/cheatsheets/overview"
              }
            ]
          },
          {
            title: "Useful Links",
            items: [
              {
                label: "Overview",
                to: "/links/overview"
              }
            ]
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/bennetrr"
              }
            ]
          }
        ],
        copyright: `Built by bennetr using Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
      colorMode: {
        defaultMode: "dark"
      }
    }),

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "howto",
        path: "docs-howto",
        routeBasePath: "howto",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/bennetrr/wiki/edit/main/"
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "links",
        path: "docs-links",
        routeBasePath: "links",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/bennetrr/wiki/edit/main/"
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "cheatsheets",
        path: "docs-cheatsheets",
        routeBasePath: "cheatsheets",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/bennetrr/wiki/edit/main/"
      }
    ]
  ]
};

module.exports = config;
