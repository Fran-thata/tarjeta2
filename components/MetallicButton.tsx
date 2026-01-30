import React from 'react';
import { ButtonProps } from '../types';

export const MetallicButton: React.FC<ButtonProps> = ({ label, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group relative w-full max-w-xs mx-auto h-14 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg mb-4"
    >
      {/* Metallic/Glass Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/10 backdrop-blur-md border border-white/50 rounded-full" />
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-6">
        {/* Fixed width container for icon to match spacer */}
        <div className="w-6 flex justify-center items-center text-[#FF7F50] drop-shadow-sm">
          {icon}
        </div>
        
        {/* Centered Text */}
        <span className="flex-1 text-center text-[#D65A31] font-medium text-lg tracking-wide drop-shadow-sm px-2 truncate">
          {label}
        </span>
        
        {/* Fixed width spacer matching icon container */}
        <div className="w-6" /> 
      </div>
    </button>
  );
};