import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section>
      <h1>Page not found</h1>
      <Link to="/">Go back to home</Link>
    </section>
  );
};

export default NotFoundPage;
