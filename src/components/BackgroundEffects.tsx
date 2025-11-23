import React, { useEffect, useState } from 'react';
import './BackgroundEffects.css';

const BackgroundEffects: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="background-effects">
      {/* Animated gradient overlay that shifts with scroll */}
      <div 
        className="gradient-overlay"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          opacity: 0.3 + (scrollY / 2000) * 0.2
        }}
      ></div>

      {/* Floating circles */}
      <div 
        className="floating-circle circle-1"
        style={{
          transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.2}px) rotate(${scrollY * 0.1}deg)`
        }}
      ></div>
      <div 
        className="floating-circle circle-2"
        style={{
          transform: `translate(${-scrollY * 0.15}px, ${scrollY * 0.25}px) rotate(${-scrollY * 0.15}deg)`
        }}
      ></div>
      <div 
        className="floating-circle circle-3"
        style={{
          transform: `translate(${scrollY * 0.2}px, ${-scrollY * 0.1}px) rotate(${scrollY * 0.2}deg)`
        }}
      ></div>
      <div 
        className="floating-circle circle-4"
        style={{
          transform: `translate(${-scrollY * 0.1}px, ${scrollY * 0.3}px) rotate(${-scrollY * 0.1}deg)`
        }}
      ></div>
      <div 
        className="floating-circle circle-5"
        style={{
          transform: `translate(${scrollY * 0.18}px, ${scrollY * 0.15}px) rotate(${scrollY * 0.18}deg)`
        }}
      ></div>

      {/* Animated blobs */}
      <div 
        className="animated-blob blob-1"
        style={{
          transform: `translate(${scrollY * 0.12}px, ${scrollY * 0.22}px) scale(${1 + scrollY / 3000})`
        }}
      ></div>
      <div 
        className="animated-blob blob-2"
        style={{
          transform: `translate(${-scrollY * 0.18}px, ${scrollY * 0.28}px) scale(${1 + scrollY / 4000})`
        }}
      ></div>
      <div 
        className="animated-blob blob-3"
        style={{
          transform: `translate(${scrollY * 0.14}px, ${-scrollY * 0.12}px) scale(${1 + scrollY / 3500})`
        }}
      ></div>

      {/* Particle effects */}
      <div className="particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
              animationDelay: `${i * 0.3}s`,
              transform: `translateY(${scrollY * (0.05 + (i % 3) * 0.02)}px)`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundEffects;

