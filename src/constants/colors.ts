/**
 * Color Palette for Ucommerce App
 * 
 * This file contains all color definitions used throughout the application.
 * Import and use these colors instead of hardcoding hex values.
 * 
 * Usage:
 * import { Colors } from '@/constants/colors';
 * backgroundColor: Colors.primary
 */

export const Colors = {
  // Primary Colors
  primary: '#FF7622',
  primaryDark: '#FF5F00',
  
  // Secondary Colors
  secondary: '#1077AF',
  secondaryLight: '#2790C3',
  secondaryDark: '#2566AF',
  
  // Neutral Colors
  white: '#FFFFFF',
  black: '#000000',
  
  // Gray Scale
  gray50: '#FBFBFC',
  gray100: '#F8F9FA',
  gray150: '#F7F8F9',
  gray200: '#F5F5FA',
  gray250: '#F5F5F4',
  gray300: '#F4F0ED',
  gray350: '#F0F5FA',
  gray400: '#ECF0F4',
  gray500: '#E8E8E8',
  gray600: '#E4E6E8',
  gray650: '#E2E4E8',
  gray700: '#A0A5BA',
  gray750: '#8083A3',
  gray800: '#464E57',
  
  // Text Colors
  textPrimary: '#181C2E',
  textSecondary: '#32343E',
  textTertiary: '#2D2D2D',
  textLight: '#2C2016',
  
  // Social Media Colors
  socialBlue: '#00A2F3',
  socialTeal: '#178AD9',
  socialBlueAlt: '#4A8CFF',
  
  // Status Colors
  success: '#E0D03C',
  error: '#FF0000',
  warning: '#FECB5F',
  
  // Card/Badge Colors
  liveRed: '#FF0000',
  masterCardYellow: '#F79E1B',
  masterCardRed: '#EB001B',
  cardBackground: '#F7F8F9',
  cardBorder: '#E2E4E8',
  
  // UI Component Colors
  tabActive: '#75563B',
  tabInactive: '#2C2016',
  overlayDark: 'rgba(0, 0, 0, 0.45)',
  
  // Additional UI Colors
  iconColor: '#231F20',
} as const;

/**
 * Type-safe color keys
 */
export type ColorKey = keyof typeof Colors;

/**
 * Helper function to get color value
 * @param colorKey - The key of the color to retrieve
 * @returns The color value
 */
export const getColor = (colorKey: ColorKey): string => {
  return Colors[colorKey];
};

export default Colors;
