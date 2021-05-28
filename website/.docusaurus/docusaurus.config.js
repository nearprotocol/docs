export default {
  "title": "NEAR Documentation",
  "tagline": "Documentation for NEAR Protocol",
  "url": "https://docs.near.org",
  "baseUrl": "/",
  "organizationName": "nearprotocol",
  "projectName": "near-docs",
  "scripts": [
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "https://use.fontawesome.com/221fd444f5.js",
    "/js/copy-code-button.js",
    "/js/mixpanel.js"
  ],
  "stylesheets": [
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;900&family=Source+Code+Pro:ital,wght@0,400;0,600;1,400;1,600&display=swap",
    "/css/copy-code-button.css",
    "/css/landing-page.css",
    "https://near.org/wp-content/themes/near-19/assets/dist/near.min.css"
  ],
  "favicon": "img/favicon.ico",
  "customFields": {
    "disableHeaderTitle": true,
    "fonts": {
      "myFont": [
        "Inter",
        "sans-serif"
      ]
    }
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "editUrl": "https://github.com/near/docs/tree/master/docs/",
          "path": "../docs",
          "sidebarPath": "../website/sidebars.json"
        },
        "blog": {},
        "theme": {
          "customCss": "../src/css/customTheme.css"
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "prism": {
      "additionalLanguages": [
        "rust",
        "toml"
      ]
    },
    "navbar": {
      "title": "NEAR Documentation",
      "logo": {
        "src": "img/near_logo.svg"
      },
      "items": [
        {
          "to": "docs/",
          "label": "Concepts",
          "position": "left"
        },
        {
          "to": "docs/develop/basics/getting-started",
          "label": "Develop",
          "position": "left"
        },
        {
          "to": "docs/tools/near-cli",
          "label": "Tools",
          "position": "left"
        },
        {
          "to": "docs/tutorials/create-transactions",
          "label": "Tutorials",
          "position": "left"
        },
        {
          "to": "docs/api/rpc",
          "label": "API",
          "position": "left"
        },
        {
          "to": "docs/community/community-channels",
          "label": "Community",
          "position": "left"
        },
        {
          "to": "docs/tokens/token-custody",
          "label": "Tokens",
          "position": "left"
        },
        {
          "to": "docs/validator/staking-overview",
          "label": "Stake",
          "position": "left"
        },
        {
          "to": "docs/roles/integrator/exchange-integration",
          "label": "Integrate",
          "position": "left"
        },
        {
          "href": "https://github.com/near/docs/issues",
          "label": "GitHub",
          "position": "left"
        }
      ],
      "hideOnScroll": false
    },
    "image": "img/near_logo.svg",
    "sidebarCollapsible": false,
    "footer": {
      "links": [],
      "copyright": "Copyright © 2021 Near Protocol",
      "logo": {
        "src": "img/near_logo.svg"
      },
      "style": "light"
    },
    "algolia": {
      "apiKey": "058929d1d423f0f46d3278a102d58bfd",
      "indexName": "near",
      "placeholder": "Search the Docs...",
      "contextualSearch": false,
      "appId": "BH4D9OD16A",
      "searchParameters": {}
    },
    "gtag": {
      "trackingID": "UA-100373569-7"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false
  },
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};