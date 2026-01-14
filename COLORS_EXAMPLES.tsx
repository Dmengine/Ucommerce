/**
 * Example: How to Use the Centralized Color System
 * 
 * This file demonstrates various ways to use colors in your React Native components.
 */

import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { Colors, getColor, ColorKey } from './src/constants/colors';

/**
 * Example 1: Basic Usage in StyleSheet
 */
const ExampleComponent1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
  },
  title: {
    color: Colors.textPrimary,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

/**
 * Example 2: Dynamic Color Selection
 */
const ExampleComponent2 = ({ isPrimary }: { isPrimary: boolean }) => {
  const buttonColor = isPrimary ? Colors.primary : Colors.secondary;
  
  return (
    <View style={{ backgroundColor: buttonColor }}>
      <Text style={{ color: Colors.white }}>Button</Text>
    </View>
  );
};

/**
 * Example 3: Using the Helper Function
 */
const ExampleComponent3 = ({ colorKey }: { colorKey: ColorKey }) => {
  const selectedColor = getColor(colorKey);
  
  return (
    <View style={{ backgroundColor: selectedColor }}>
      <Text>Dynamic Color</Text>
    </View>
  );
};

/**
 * Example 4: Inline Styles with Colors
 */
const ExampleComponent4 = () => {
  return (
    <View 
      style={{
        backgroundColor: Colors.gray100,
        borderBottomColor: Colors.gray600,
        borderBottomWidth: 1,
      }}
    >
      <Text style={{ color: Colors.textSecondary }}>
        Inline styled component
      </Text>
    </View>
  );
};

/**
 * Example 5: SVG with Colors
 */
import Svg, { Circle, Path } from 'react-native-svg';

const ExampleSVG = () => (
  <Svg width={100} height={100}>
    <Circle cx={50} cy={50} r={40} fill={Colors.primary} />
    <Path 
      d="M50 10 L50 90" 
      stroke={Colors.white} 
      strokeWidth={2}
    />
  </Svg>
);

/**
 * Example 6: Conditional Styling
 */
const ExampleComponent6 = ({ status }: { status: 'success' | 'error' | 'warning' }) => {
  const statusColors = {
    success: Colors.success,
    error: Colors.error,
    warning: Colors.warning,
  };
  
  return (
    <View style={{ 
      backgroundColor: statusColors[status],
      padding: 10,
      borderRadius: 5,
    }}>
      <Text style={{ color: Colors.white }}>
        Status: {status}
      </Text>
    </View>
  );
};

/**
 * Common Patterns
 */

// Pattern 1: Card with shadow
const cardStyle = {
  backgroundColor: Colors.white,
  borderRadius: 8,
  borderWidth: 1,
  borderColor: Colors.cardBorder,
  shadowColor: Colors.black,
  shadowOpacity: 0.1,
};

// Pattern 2: Button styles
const primaryButton = {
  backgroundColor: Colors.primary,
  color: Colors.white,
};

const secondaryButton = {
  backgroundColor: Colors.white,
  color: Colors.primary,
  borderWidth: 1,
  borderColor: Colors.primary,
};

// Pattern 3: Text hierarchy
const textStyles = StyleSheet.create({
  heading: {
    color: Colors.textPrimary,
    fontSize: 24,
    fontWeight: 'bold',
  },
  subheading: {
    color: Colors.textSecondary,
    fontSize: 18,
    fontWeight: '600',
  },
  body: {
    color: Colors.textTertiary,
    fontSize: 16,
  },
  caption: {
    color: Colors.gray700,
    fontSize: 12,
  },
});

export {
  ExampleComponent1,
  ExampleComponent2,
  ExampleComponent3,
  ExampleComponent4,
  ExampleSVG,
  ExampleComponent6,
};
