import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';

import './index.css';

function Index(props) {
  const { data, children } = props;
  return (
    <div>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta
          name="keywords"
          content={data.site.siteMetadata.keywords.join(', ')}
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=EB+Garamond|Nunito+Sans:700"
        />
      </Helmet>
      <Header
        title={data.site.siteMetadata.title}
        subtitle={data.site.siteMetadata.subtitle}
      />
      <main className="container">{children()}</main>
    </div>
  );
}

Index.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  children: PropTypes.func,
};

Index.defaultProps = {
  children: () => undefined,
};

export default Index;

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        subtitle
        description
        keywords
      }
    }
  }
`;
