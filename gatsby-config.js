module.exports = {
  flags: { PRESERVE_WEBPACK_CACHE: true, DEV_SSR: true },
  siteMetadata: {
    title: 'Nathaniel Peiffer',
    siteUrl: 'https://nathaniel.peiffer.com.au',
    description: 'Hi there! My name is Nathaniel and I do things (sometimes)',
    author: 'Nathaniel Peiffer',
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-KT1N1T5J5J'],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Nathaniel Peiffer',
        short_name: 'napei',
        start_url: '/',
        background_color: '#111827',
        theme_color: '#111827',
        display: 'minimal-ui',
        icon: 'src/images/icon.svg',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/layout.jsx'),
      },
    },
  ],
};
