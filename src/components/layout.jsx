import * as React from 'react';
import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <>
      <div className="flex items-center justify-center w-full min-h-screen bg-gray-900 text-gray-200 antialiased transition-all">{children}</div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
