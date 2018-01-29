import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';

import './LinkButton.css';

function LinkButton(props) {
  const { href, children } = props;
  return (
    <Link className="LinkButton" to={href}>
      {children}
    </Link>
  );
}

LinkButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

LinkButton.defaultProps = {
  href: undefined,
  children: undefined,
};

export default LinkButton;
