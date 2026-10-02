import React from 'react';

export type AppTheme = {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    secondaryText: string;
    border: string;
    error: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  typography: {
    fontFamily: string;
    fontSize: {
      small: number;
      medium: number;
      large: number;
      heading: number;
    };
  };
  mode: 'light' | 'dark';
};

export const lightTheme: AppTheme = {
  mode: 'light',
  colors: {
    primary: '#2563EB',
    secondary: '#64748B',
    background: '#FFFFFF',
    surface: '#F8FAFC',
    text: '#0F172A',
    secondaryText: '#64748B',
    border: '#E2E8F0',
    error: '#DC2626',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  typography: {
    fontFamily: 'System',
    fontSize: {
      small: 12,
      medium: 16,
      large: 20,
      heading: 24,
    },
  },
};

export const darkTheme: AppTheme = {
  ...lightTheme,
  mode: 'dark',
  colors: {
    ...lightTheme.colors,
    primary: '#60A5FA',
    secondary: '#94A3B8',
    background: '#0F172A',
    surface: '#1E293B',
    text: '#F8FAFC',
    secondaryText: '#CBD5E1',
    border: '#334155',
    error: '#F87171',
  },
};
