import * as React from 'react';
import loadable from '@loadable/component';

const StarfieldAnimation = loadable(() => import('react-starfield-animation'));

export default function Stars() {
  return (
    <>
      <StarfieldAnimation style={{ position: 'fixed' }} className="inset-0 z-0 motion-reduce:hidden" />
    </>
  );
}
