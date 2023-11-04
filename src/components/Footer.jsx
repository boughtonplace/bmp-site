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
      <h3>Public events</h3>
      <p>
        <b>Open-air theatre:</b> For info and tickets see{' '}
        <a href="https://www.changeling-theatre.com">
          Changeling Theatre Company
        </a>
        <br />
        <b>Garden open days for charity:</b> For info and pre-booking see{' '}
        <a href="https://www.ngs.org.uk">NGS</a>
      </p>
    </footer>
  );
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
