import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <footer className="Footer">
      <p className="Footer__contact">
        For all enquiries, contact Mrs&nbsp;Marice&nbsp;Kendrick on
        01622&nbsp;743120
        <br />
        or email{' '}
        <a href="mailto:mk@boughtonplace.co.uk">mk@boughtonplace.co.uk</a>
      </p>
    </footer>
  );
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
