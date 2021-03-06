module.exports = {
  siteMetadata: {
    title: 'Boughton Monchelsea Place',
    subtitle: 'Maidstone, Kent ME17 4BU',
    description:
      'Boughton Monchelsea Place is an exquisite venue which may be hired throughout the year for location shoots and corporate dining for up to 50. We also offer garden visits from April to September.',
    keywords: [
      'location',
      'shoots',
      'photo',
      'stately',
      'home',
      'elizabethan',
      'manor',
      'corporate',
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'gallery',
        path: `${__dirname}/src/gallery/`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
