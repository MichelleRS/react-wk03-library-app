import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <p>
        Check out our <Link to="/books">catalog</Link>
      </p>
    </main>
  );
}
