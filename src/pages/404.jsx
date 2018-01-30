import React from 'react';
import Link from 'gatsby-link';

function NotFoundPage() {
  return (
    <div>
      <h2>Page not found</h2>
      <p>The page you requested cannot be found.</p>
      <Link to="/">Return to home page</Link>
    </div>
  );
}

export default NotFoundPage;
