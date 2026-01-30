import React from 'react';

export const SilverCurves: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 375 812"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="silverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E0E0E0" />
            <stop offset="40%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#C0C0C0" />
            <stop offset="100%" stopColor="#A0A0A0" />
          </linearGradient>
        </defs>

        {/* Left Curve */}
        <path
          d="M0 300 C 50 400, 50 600, 0 700"
          stroke="url(#silverGradient)"
          strokeWidth="2"
          opacity="0.6"
          fill="none"
        />
        <path
          d="M-10 320 C 60 420, 60 580, -10 680"
          stroke="url(#silverGradient)"
          strokeWidth="1.5"
          opacity="0.4"
          fill="none"
        />

        {/* Right Bottom Curve */}
        <path
          d="M375 550 C 300 650, 300 750, 375 800"
          stroke="url(#silverGradient)"
          strokeWidth="3"
          opacity="0.7"
          fill="none"
        />
        <path
          d="M385 530 C 290 640, 290 760, 385 820"
          stroke="url(#silverGradient)"
          strokeWidth="1.5"
          opacity="0.5"
          fill="none"
        />
        
        {/* Profile Circle Accent Curves */}
        <path
          d="M60 280 Q 187 380 315 280"
          stroke="url(#silverGradient)"
          strokeWidth="2"
          fill="none"
          opacity="0.8"
        />
      </svg>
    </div>
  );
};