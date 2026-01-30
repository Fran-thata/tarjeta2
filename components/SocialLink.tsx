import React from 'react';
import { SocialIconProps } from '../types';

// Simple SVG icons for brands to ensure exact match without heavy libraries
const Icons = {
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
    </svg>
  )
};

export const SocialLink: React.FC<SocialIconProps> = ({ platform, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
    >
      {/* Metallic Circle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E0E0E0] to-[#A0A0A0] rounded-full shadow-md" />
      <div className="absolute inset-[1px] bg-gradient-to-br from-[#ffffff] to-[#dcdcdc] rounded-full" />
      
      {/* Icon */}
      <div className="relative z-10 text-[#FF7F50] group-hover:text-[#FF6347] transition-colors">
        {Icons[platform]}
      </div>
    </a>
  );
};