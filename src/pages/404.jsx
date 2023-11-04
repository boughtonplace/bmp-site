import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout';

function NotFoundPage(props) {
  const { data } = props;
  return (
    <Layout data={data}>
      <div>
        <h2>Page not found</h2>
        <p>The page you requested cannot be found.</p>
        <Link to="/">Return to home page</Link>
      </div>
    </Layout>
  );
}

NotFoundPage.propTypes = {
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
};

export default NotFoundPage;

export const query = graphql`
  query NotFoundPageQuery {
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
