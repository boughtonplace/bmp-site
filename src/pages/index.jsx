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
        sizes={data.heroImage.childImageSharp.sizes}
      />
      <section className="Home__intro">
        <p>
          Boughton Monchelsea Place is an exquisite venue which may be hired{' '}
          <br className="hidden-xs" /> throughout the year for location shoots
          and corporate dining. <br className="hidden-xs" /> We also offer
          garden visits from April to September.
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
    heroImage: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        sizes: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default HomePage;

export const query = graphql`
  query HeroImageQuery {
    heroImage: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "index/Hero.jpg" }
    ) {
      childImageSharp {
        sizes(maxWidth: 1170, quality: 85) {
          ...GatsbyImageSharpSizes_noBase64
        }
      }
    }
  }
`;
