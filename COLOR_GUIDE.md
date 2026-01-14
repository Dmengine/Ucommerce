# Color Management Guide

This document explains how to use the centralized color system in the Ucommerce app.

## Overview

All colors are now centralized in `src/constants/colors.ts` for easy management and consistency across the application.

## Usage

### Basic Import

```typescript
import { Colors } from '@/constants/colors';
// or
import { Colors } from '../constants/colors';
```

### Using Colors in Components

```typescript
import { StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    borderColor: Colors.cardBorder,
  },
  text: {
    color: Colors.textPrimary,
  }
});
```

### Available Colors

#### Primary Colors
- `Colors.primary` - Main brand color (#FF7622)
- `Colors.primaryDark` - Darker variant (#FF5F00)

#### Secondary Colors
- `Colors.secondary` - Secondary brand color (#1077AF)
- `Colors.secondaryLight` - Light variant (#2790C3)
- `Colors.secondaryDark` - Dark variant (#2566AF)

#### Neutral Colors
- `Colors.white` - White (#FFFFFF)
- `Colors.black` - Black (#000000)

#### Gray Scale
- `Colors.gray50` to `Colors.gray800` - Various gray shades

#### Text Colors
- `Colors.textPrimary` - Primary text (#181C2E)
- `Colors.textSecondary` - Secondary text (#32343E)
- `Colors.textTertiary` - Tertiary text (#2D2D2D)
- `Colors.textLight` - Light text (#2C2016)

#### Social Media Colors
- `Colors.socialBlue` - Social media blue (#00A2F3)
- `Colors.socialTeal` - Social media teal (#178AD9)
- `Colors.socialBlueAlt` - Alternative blue (#4A8CFF)

#### Status Colors
- `Colors.success` - Success state (#E0D03C)
- `Colors.error` - Error state (#FF0000)
- `Colors.warning` - Warning state (#FECB5F)

#### Specialized Colors
- `Colors.liveRed` - Live badge (#FF0000)
- `Colors.masterCardYellow` - MasterCard yellow (#F79E1B)
- `Colors.masterCardRed` - MasterCard red (#EB001B)
- `Colors.cardBackground` - Card backgrounds (#F7F8F9)
- `Colors.cardBorder` - Card borders (#E2E4E8)
- `Colors.tabActive` - Active tab (#75563B)
- `Colors.tabInactive` - Inactive tab (#2C2016)
- `Colors.overlayDark` - Dark overlay (rgba(0, 0, 0, 0.45))

## Advanced Usage

### Type-Safe Color Access

```typescript
import { Colors, ColorKey, getColor } from '../constants/colors';

// Using the helper function
const myColor = getColor('primary');

// Type-safe color key
const colorKey: ColorKey = 'primary';
```

### In SVG Components

```typescript
import { Colors } from '../constants/colors';

<Path fill={Colors.primary} />
<Circle stroke={Colors.secondary} />
```

## Benefits

1. **Consistency**: All colors defined in one place ensures visual consistency
2. **Maintainability**: Easy to update colors across the entire app
3. **Type Safety**: TypeScript support with autocomplete
4. **Documentation**: Clear naming makes color purpose obvious
5. **Theming Ready**: Easy to extend for dark mode or multiple themes

## Best Practices

1. Always use `Colors` instead of hardcoded hex values
2. Choose semantic color names (e.g., `Colors.primary` instead of `Colors.orange`)
3. Add new colors to the central file when needed
4. Document the purpose of new colors
5. Use the provided helper function for dynamic color selection

## Migration

Previously, colors were hardcoded like:
```typescript
backgroundColor: '#FF7622'
```

Now they should be:
```typescript
backgroundColor: Colors.primary
```

All existing components have been migrated to use the centralized color system.
