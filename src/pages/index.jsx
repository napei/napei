import * as React from 'react';
import Starfield from '../components/starfield';
import SEO from '../components/seo';

function IconButton({ link, icon, alt }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" alt={alt} className="cursor-pointer hover:text-green-500 transition transform hover:scale-150 ease-in-out">
      {React.cloneElement(icon, { className: 'h-8 w-8' })}
    </a>
  );
}

export default function Index() {
  const buttons = [
    {
      link: 'https://github.com/napei',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      ),
      alt: 'GitHub',
    },
    {
      link: 'https://www.linkedin.com/in/nathaniel-peiffer/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
        </svg>
      ),
      alt: 'LinkedIn',
    },
    {
      link: 'https://networktoolbox.net',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
          <path d="M488.6 261.8v-11.6c0-6.4-5.2-11.6-11.6-11.6H273.4v-29.1h52.3c12.8 0 23.3-10.4 23.3-23.3v-93c0-12.8-10.4-23.3-23.3-23.3H186.2c-12.8 0-23.3 10.4-23.3 23.3v93c0 12.8 10.4 23.3 23.3 23.3h52.3v29.1H35c-6.4 0-11.6 5.2-11.6 11.6v11.6c0 6.4 5.2 11.6 11.6 11.6h75.6v29.1H69.9c-12.8 0-23.3 10.4-23.3 23.3v93c0 12.8 10.4 23.3 23.3 23.3h116.3c12.8 0 23.3-10.4 23.3-23.3v-93c0-12.8-10.4-23.3-23.3-23.3h-40.7v-29.1h221v29.1h-40.7c-12.8 0-23.3 10.4-23.3 23.3v93c0 12.8 10.4 23.3 23.3 23.3h116.3c12.8 0 23.3-10.4 23.3-23.3v-93c0-12.8-10.4-23.3-23.3-23.3h-40.7v-29.1H477c6.4 0 11.6-5.2 11.6-11.6zM209.5 163v-46.5h93V163h-93zM163 395.6H93.2V349H163v46.6zm255.8 0H349V349h69.8v46.6z" />
        </svg>
      ),
      alt: 'Network Toolbox',
    },
  ].map(({ link, icon, alt }) => <IconButton key={link} link={link} icon={icon} alt={alt} />);

  return (
    <>
      <SEO title="Home" />
      <Starfield />
      <div className="flex flex-col gap-6 z-10">
        <h1 className="text-4xl md:text-6xl font-bold">Nathaniel Peiffer</h1>
        <div className="flex gap-4 flex-wrap items-center justify-center">{buttons}</div>
      </div>
    </>
  );
}
