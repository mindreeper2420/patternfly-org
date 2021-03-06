import React from 'react';
import Helmet from 'react-helmet';
import './../fonts.scss';

const Header = ({ siteTitle }) => (
  <Helmet>
    <title>{siteTitle}</title>
    <html lang="en-US" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.6.3/css/solid.css"
      integrity="sha384-+0VIRx+yz1WBcCTXBkVQYIBVNEFH1eP6Zknm16roZCyeNg2maWEpk/l/KsyFKs7G"
      crossOrigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.6.3/css/brands.css"
      integrity="sha384-1KLgFVb/gHrlDGLFPgMbeedi6tQBLcWvyNUN+YKXbD7ZFbjX6BLpMDf0PJ32XJfX"
      crossOrigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.6.3/css/fontawesome.css"
      integrity="sha384-jLuaxTTBR42U2qJ/pm4JRouHkEDHkVqH0T1nyQXn1mZ7Snycpf6Rl25VBNthU4z0"
      crossOrigin="anonymous"
    />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css" />
  </Helmet>
);

export default Header;
