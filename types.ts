import React from 'react';

export interface ButtonProps {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export interface SocialIconProps {
  platform: 'facebook' | 'instagram' | 'twitter' | 'tiktok';
  url: string;
}