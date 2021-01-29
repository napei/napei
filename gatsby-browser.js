/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import '@fontsource/inter';
import './src/styles/global.css';

export function shouldUpdateScroll() {
  return false;
}

const scrollTo = (id) => () => {
  const el = document.querySelector(id);
  if (el) return window.scrollTo(0, el.offsetTop - 20);
  return false;
};

export const onRouteUpdate = ({ location: { hash } }) => {
  if (hash) {
    window.setTimeout(scrollTo(hash), 10);
  }
};
