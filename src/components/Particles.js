"use client";
import { useEffect, useState } from "react";

export default function FloatingParticles({ density = 15 }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < density; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 8 + Math.random() * 4,
          size: 4 + Math.random() * 8,
          opacity: 0.3 + Math.random() * 0.4,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, [density]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
          style={{
            left: `${particle.x}%`,
            bottom: '-20px',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-600px) translateX(50px) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
}