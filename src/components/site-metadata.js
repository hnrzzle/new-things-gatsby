import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import favicon16 from '../../static/favicon16.ico';
import favicon32 from '../../static/favicon32.ico';
import favicon64 from '../../static/favicon64.ico';


const SiteMetadata = ({ pathname }) => {
  const {
    site: {
      siteMetadata: { siteUrl, title, twitter },
    },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          siteUrl
          title
          twitter
        }
      }
    }
  `);
  const favicon = [
    { rel: "icon", type: "image/png", sizes: "16x16", href: `${favicon16}` },
    { rel: "icon", type: "image/png", sizes: "32x32", href: `${favicon32}` },
    { rel: "shortcut icon", type: "image/png", href: `${favicon64}` },
  ];

  return (
    <Helmet defer={false} defaultTitle={title} titleTemplate={`%s | ${title}`} link={favicon}>
      <html lang="en" />
      <link rel="canonical" href={`${siteUrl}`} />
      <meta name="docsearch:version" content="2.0" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en" />
      <meta property="og:site_name" content={title} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter} />
    </Helmet>
  );
};

export default SiteMetadata;
