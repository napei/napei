module.exports = {
  siteMetadata: {
    title: 'Nathaniel Peiffer',
    siteUrl: 'https://nathaniel.peiffer.com.au',
  },
  plugins: [
    'gatsby-plugin-postcss',
    // {
    //   resolve: 'gatsby-plugin-purgecss',
    //   options: {
    //     printRejected: true,
    //     develop: false,
    //     tailwind: true,
    //   },
    // },
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
        icon: 'src/images/icon.png',
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
