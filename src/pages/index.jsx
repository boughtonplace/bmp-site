import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Footer from '../components/Footer';
import LinkButton from '../components/LinkButton';

import './index.css';

function HomePage(props) {
  const { data } = props;
  return (
    <div>
      <Img
        className="Home__hero"
        alt="Boughton Monchelsea Place"
        fluid={data.heroImage.childImageSharp.fluid}
      />
      <section className="Home__intro">
        <p>
          Boughton Monchelsea Place is an exquisite venue which{' '}
          <br className="hidden-xs" />
          may be hired throughout the year for location shoots.{' '}
          <br className="hidden-xs" />
          We also offer garden visits from April to September.
        </p>
        <p>
          <LinkButton href="/gallery">View gallery</LinkButton>
        </p>
        <Footer />
      </section>
    </div>
  );
}

HomePage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired,
    }).isRequired,
    heroImage: PropTypes.shape({
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
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default HomePage;

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        subtitle
        description
        keywords
      }
    }
    heroImage: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "index/Hero.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1170, quality: 85) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;
