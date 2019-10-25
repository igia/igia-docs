/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Partners HealthCare',
    image: '/img/Partners_FoundedBy_Vert_614x225.svg',
    width: 'auto', // '265px',
    height: '80px',
    infoLink: 'https://www.partners.org',
    pinned: true,
  },
  {
    caption: 'Persistent Systems',
    image: '/img/Persistent_logo.png',
    width: '105px',
    height: '85px',
    infoLink: 'https://www.persistent.com',
    pinned: true,
  },
];

const registrationUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc38F2WK70mqcp3BhXrS6K9p2qTiQFa_ldpN1dCkUwhrk-Zpw/viewform?usp=pp_url&entry.185840096=Send+me+updates+on+igia+releases.&entry.185840096=Send+me+major+announcements+on+igia-related+updates+and+news.&entry.185840096=Please+feel+free+to+contact+me+about+collaboration+or+other+opportunities.';
const googleGroupsUrl = 'https://groups.google.com/forum/#!forum/igia';

const siteConfig = {
  title: 'igia', // Title for your website.
  headerIcon: 'img/igia-bw-inverse.png',
  footerIcon: 'img/igia-bw-inverse.png',
  titleLogo: 'igia-logo-color.svg',
  contactImage: 'info-at-igia-io-white.svg',
  url: 'http://igia.io', // Your website URL
  tagline: 'Enabling the development, deployment, and sharing of healthcare technology.',
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',
  registrationUrl: registrationUrl,
  googleGroupsUrl: googleGroupsUrl,

  // algolia docsearch api
  algolia: {
    apiKey: 'f8534c32f62ecd9bce873d56fb1f9619',
    indexName: 'igia'
  },

  // Used for publishing and more
  projectName: 'igia',
  organizationName: 'Partners and Persistent Systems',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'gettingstarted', label: 'Documentation' },
    { href: registrationUrl, label: 'Stay Informed' },
    { href: googleGroupsUrl, label: 'Community' },
    { search: true }
    //{doc: 'doc4', label: 'API'},
    //{page: 'help', label: 'Help'},
    //{blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  //headerIcon: 'img/igia-logo.png',
  //footerIcon: 'img/hospital.svg',
  favicon: 'img/igia-favicon.png',

  /* Colors for website */
  colors: {
    /* primaryColor: '#6bafd3',*/
    primaryColor: '#42c1c7',
    secondaryColor: '#6bafd3',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()}`,
  trademark: `"igia" is a trademark of the igia.io project.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  enableUpdateBy: false,
  enableUpdateTime: true,
  docsSideNavCollapsible: true,
  scrollToTop: true,


  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/igia/igia-docs'
};

module.exports = siteConfig;
