import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../components/Footer';

import './gallery.css';

const ASPECT_RATIO = 3 / 2;

function GalleryPage(props) {
  const { data } = props;
  return (
    <div className="Gallery">
      <div>
        {data.files.edges.map((edge) => (
          <a className="Gallery__item" key={edge.node.relativePath}>
            <Img
              className="Gallery__thumbnail"
              fluid={{
                ...edge.node.childImageSharp.fluid,
                aspectRatio: ASPECT_RATIO,
              }}
            />
          </a>
        ))}
      </div>
      <div style={{ clear: 'both' }} />
      <Footer />
    </div>
  );
}

GalleryPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired,
    }).isRequired,
    files: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            relativePath: PropTypes.string.isRequired,
            childImageSharp: PropTypes.shape({
              fluid: PropTypes.shape({
                aspectRatio: PropTypes.number.isRequired,
                src: PropTypes.string.isRequired,
                srcSet: PropTypes.string.isRequired,
                sizes: PropTypes.string.isRequired,
                base64: PropTypes.string,
                tracedSVG: PropTypes.string,
                srcWebp: PropTypes.string,
                srcSetWebp: PropTypes.string,
                media: PropTypes.string,
              }),
            }).isRequired,
          }).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

GalleryPage.defaultProps = {};

export default GalleryPage;

export const query = graphql`
  query GalleryPageQuery {
    site {
      siteMetadata {
        title
        subtitle
        description
        keywords
      }
    }
    files: allFile(
      filter: {
        sourceInstanceName: { eq: "gallery" }
        extension: { eq: "jpg" }
      }
      sort: { relativePath: ASC }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 780, quality: 85) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`;
