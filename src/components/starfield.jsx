import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import SizeMe from 'react-sizeme';
import raf from 'raf';

import Particle from './particle';

SizeMe.enableSSRBehaviour = true;

const Starfield = React.memo(({ size }) => {
  const { width, height } = size;
  let particles = [];
  let vp;
  let bounds;

  const canvasRef = useRef(null);
  const requestIdRef = useRef(null);

  const reset = () => {
    particles = [];
    const depth = 300;
    const count = 300;
    const v = {
      x: width / 2,
      y: height / 2,
    };

    vp = v;
    bounds = {
      depth,
      width,
      height,
      x: { min: -vp.x, max: width - vp.x },
      y: { min: -vp.y, max: height - vp.y },
      z: { min: -depth, max: 1000 },
    };
    for (let i = 0; i < count; i += 1) {
      particles.push(new Particle(bounds, 1));
    }
  };

  const updateParticles = () => {
    for (let i = 0; i < particles.length; i += 1) {
      particles[i].update();
    }
  };

  const draw = () => {
    const ctx = canvasRef.current.getContext('2d');
    const lineWidth = 2;

    ctx.save();
    ctx.translate(vp.x, vp.y);
    ctx.clearRect(-vp.x, -vp.y, bounds.width, bounds.height);
    ctx.lineWidth = lineWidth;

    for (let i = 0; i < particles.length; i += 1) {
      const p = particles[i];

      p.calcS(bounds, 1);

      ctx.beginPath();
      ctx.moveTo(p.sx, p.sy);
      ctx.lineTo(p.osx, p.osy);
      ctx.strokeStyle = `hsla(${p.hue}, 100%, ${p.lightness}%, ${p.alpha})`;
      ctx.stroke();
    }

    ctx.restore();
  };

  const tick = () => {
    if (!canvasRef.current) return;
    updateParticles();
    draw();

    requestIdRef.current = raf(tick);
  };

  useEffect(() => {
    reset();
    requestIdRef.current = raf(tick);
    return () => {
      raf.cancel(requestIdRef.current);
    };
  }, [size]);

  return (
    <div
      style={{
        overflow: 'hidden',
        position: 'fixed',
      }}
      className="inset-0 z-0 motion-reduce:hidden"
    >
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
});

export default SizeMe({ monitorWidth: true, monitorHeight: true })(Starfield);

Starfield.propTypes = {
  size: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
};
