import React from 'react';
import Link from 'gatsby-link';

function NotFoundPage() {
  return (
    <div>
      <h1>Page not found</h1>
      <p>The page you requested cannot be found.</p>
      <Link to="/">Return to home page</Link>
    </div>
  );
}

export default NotFoundPage;
