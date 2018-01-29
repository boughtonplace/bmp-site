import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';

import './Header.css';

function Header(props) {
  const { title, subtitle } = props;
  return (
    <header className="Header">
      <h1 className="Header__title">
        <Link className="Header__link" to="/">
          {title}
        </Link>
      </h1>
      <h2 className="Header__subtitle">{subtitle}</h2>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Header;
