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
              sizes={{
                ...edge.node.childImageSharp.sizes,
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
    files: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            relativePath: PropTypes.string.isRequired,
            childImageSharp: PropTypes.shape({
              sizes: PropTypes.object.isRequired,
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
  query GalleryImagesQuery {
    files: allFile(
      filter: {
        sourceInstanceName: { eq: "gallery" }
        extension: { eq: "jpg" }
      }
      sort: { order: ASC, fields: [relativePath] }
    ) {
      edges {
        node {
          relativePath
          childImageSharp {
            sizes(maxWidth: 780, quality: 85) {
              ...GatsbyImageSharpSizes_noBase64
            }
          }
        }
      }
    }
  }
`;
