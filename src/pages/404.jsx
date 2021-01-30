import * as React from 'react';
import { Link } from 'gatsby';
import Starfield from '../components/starfield';
import SEO from '../components/seo';

export default function NotFound() {
  return (
    <>
      <SEO title="404" description="Page not found" />
      <Starfield />
      <div className="flex flex-col gap-6 z-10 text-center">
        <h1 className="text-9xl font-bold">404</h1>
        <Link to="/" className="font-semibold text-xl rounded-md bg-green-700 hover:bg-green-500 cursor-pointer align-middle py-2 transition-colors">
          <span className="">Back home</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="inline h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </>
  );
}
