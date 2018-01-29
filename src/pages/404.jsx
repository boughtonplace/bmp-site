import React from 'react';
import Link from 'gatsby-link';

function NotFoundPage() {
  return (
    <React.Fragment>
      <h1>Page not found</h1>
      <p>The page you requested cannot be found.</p>
      <Link to="/">Return to home page</Link>
    </React.Fragment>
  );
}

export default NotFoundPage;
