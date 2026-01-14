# Quick Fixes - Immediate Improvements

This document contains code fixes that can be applied immediately to improve code quality.

## 1. Create Theme Constants

**Create file:** `src/constants/theme.ts`

```typescript
// src/constants/theme.ts
export const COLORS = {
  primary: '#FF7622',
  secondary: '#181C2E',
  background: '#FFFFFF',
  backgroundGray: '#F5F5FA',
  backgroundLight: '#F7F8F9',
  backgroundCard: '#F0F5FA',
  text: {
    primary: '#000000',
    secondary: '#2D2D2D',
    tertiary: '#464E57',
    gray: '#8083A3',
    white: '#FFFFFF',
  },
  border: {
    light: '#E4E6E8',
    medium: '#E2E4E8',
  },
  status: {
    live: '#FF0000',
  },
  accent: {
    blue: '#178AD9',
    lightBlue: '#00A2F3',
  },
  meditation: {
    accent: '#75563B',
    inactive: '#2C2016',
  },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const TYPOGRAPHY = {
  fontSize: {
    xs: 11,
    sm: 12,
    base: 14,
    md: 15,
    lg: 16,
    xl: 17,
    xxl: 18,
    h3: 20,
    h2: 30,
  },
  fontWeight: {
    light: '300' as const,
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
};

export const BORDER_RADIUS = {
  sm: 8,
  md: 10,
  lg: 12,
  xl: 14,
  xxl: 16,
  round: 90,
};

export const SIZES = {
  icon: {
    sm: 24,
    md: 32,
    lg: 46,
  },
  avatar: {
    sm: 32,
    md: 46,
  },
  card: {
    height: 161,
    width: 85,
  },
};
```

## 2. Fix App.tsx

**Current:**
```typescript
export default function App() {
  return (
    // <IntroScreen />
    // <ProfileSetting />
    // <HomeScreen />
    <PaymentScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

**Fixed:**
```typescript
export default function App() {
  return <PaymentScreen />;
}
```

## 3. Fix TopTabs.tsx

**Current:**
```typescript
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { act } from "react";
import { useState } from "react";
import { vs, s } from "react-native-size-matters";
```

**Fixed:**
```typescript
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { vs, s } from "react-native-size-matters";
import { COLORS, TYPOGRAPHY, SPACING, BORDER_RADIUS } from "../constants/theme";
```

**Update constants:**
```typescript
const ACTIVE_BG = COLORS.meditation.accent;
const ACTIVE_TEXT = COLORS.text.white;
const INACTIVE_TEXT = COLORS.meditation.inactive;
```

## 4. Fix HomeScreen.tsx

**Current:**
```typescript
const styles = StyleSheet.create({
  title: {
    fontSize: s(20),
    fontWeight: 600, // ❌ Wrong type
    width: s(123),
    height: vs(24),
  },
});
```

**Fixed:**
```typescript
import { COLORS, TYPOGRAPHY, SPACING } from "../constants/theme";

const styles = StyleSheet.create({
  title: {
    fontSize: s(TYPOGRAPHY.fontSize.h3),
    fontWeight: TYPOGRAPHY.fontWeight.semibold,
    width: s(123),
    height: vs(24),
  },
  subtitle: {
    fontSize: s(TYPOGRAPHY.fontSize.md),
    fontWeight: TYPOGRAPHY.fontWeight.normal,
    width: s(249),
    height: vs(17),
    marginTop: vs(6),
    marginHorizontal: s(4),
  },
});
```

## 5. Fix PaymentScreen.tsx - Move to Screens

**Action:** Move file from `src/components/PaymentScreen.tsx` to `src/screens/PaymentScreen.tsx`

**Update imports in App.tsx:**
```typescript
// Before
import PaymentScreen from './src/components/PaymentScreen';

// After
import PaymentScreen from './src/screens/PaymentScreen';
```

**Fix inline styles:**
```typescript
// Before
<View style={{marginStart:s(20), flexDirection:'row', alignItems:'center', gap:s(20), borderRadius:2, width:133, paddingHorizontal:s(16)}}>
  <Text style={{color:'#181C2E', fontSize:17, fontWeight:'400'}}>Payment</Text>
</View>

// After
import { COLORS, TYPOGRAPHY, SPACING } from "../constants/theme";

<View style={styles.header}>
  <Text style={styles.headerText}>Payment</Text>
</View>

const styles = StyleSheet.create({
  // ... existing styles
  header: {
    marginStart: s(SPACING.lg),
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(SPACING.lg),
    paddingHorizontal: s(SPACING.md),
  },
  headerText: {
    color: COLORS.secondary,
    fontSize: TYPOGRAPHY.fontSize.xl,
    fontWeight: TYPOGRAPHY.fontWeight.normal,
  },
});
```

## 6. Fix UserAvatar.tsx - Remove Base64 Image

**Step 1:** Save the avatar image to `assets/images/default-avatar.jpg`

**Step 2:** Update component:
```typescript
// Before
import { StyleSheet, Text, Image } from 'react-native'
import React from 'react'
import {s} from "react-native-size-matters"

const UserAvatar = () => {
  return (
   <Image 
    source={{uri: "data:image/jpeg;base64,/9j/4AAQSkZJRg..."}}
    style={styles.userAvatar}
   />
  )
}

// After
import { StyleSheet, Image } from 'react-native'
import React from 'react'
import { s } from "react-native-size-matters"
import { SIZES } from "../constants/theme"

interface UserAvatarProps {
  source?: any;
  size?: number;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ 
  source = require('../../assets/images/default-avatar.jpg'),
  size = SIZES.avatar.sm 
}) => {
  return (
    <Image 
      source={source}
      style={[styles.userAvatar, { width: s(size), height: s(size), borderRadius: s(size / 2) }]}
    />
  )
}

export default UserAvatar

const styles = StyleSheet.create({
  userAvatar: {
    // Dynamic sizing now handled via props
  }
})
```

## 7. Add .editorconfig

**Create file:** `.editorconfig`

```ini
# EditorConfig helps maintain consistent coding styles
root = true

[*]
charset = utf-8
end_of_line = lf
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false

[*.{json,yml,yaml}]
indent_size = 2
```

## 8. Add .prettierrc

**Create file:** `.prettierrc`

```json
{
  "arrowParens": "always",
  "bracketSpacing": true,
  "endOfLine": "lf",
  "printWidth": 100,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "useTabs": false
}
```

## 9. Add .eslintrc.js

**Create file:** `.eslintrc.js`

```javascript
module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-native'],
  rules: {
    'react-native/no-inline-styles': 'warn',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  env: {
    'react-native/react-native': true,
  },
};
```

## 10. Update package.json Scripts

**Add to package.json:**

```json
{
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,md}\"",
    "format:check": "prettier --check \"**/*.{js,jsx,ts,tsx,json,md}\"",
    "type-check": "tsc --noEmit"
  }
}
```

## Installation Commands for Quick Fixes

```bash
# Install development dependencies
npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
npm install --save-dev prettier eslint-config-prettier
npm install --save-dev @react-native-community/eslint-config

# Run formatting
npm run format

# Run linting
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Check TypeScript types
npm run type-check
```

## Summary of Changes

✅ **Completed:**
1. Create theme constants file
2. Remove commented code from App.tsx
3. Remove unused styles from App.tsx
4. Fix unused import in TopTabs.tsx
5. Fix fontWeight types in HomeScreen.tsx
6. Add .editorconfig
7. Add .prettierrc
8. Add .eslintrc.js
9. Update package.json scripts
10. Improve UserAvatar component

📝 **Manual Steps Required:**
1. Move PaymentScreen.tsx to screens folder
2. Save default avatar image to assets
3. Run `npm install --save-dev` commands above
4. Run format and lint commands
5. Fix any remaining linting errors
6. Update all components to use theme constants

## Next Steps After Quick Fixes

After applying these quick fixes:

1. ✅ Run `npm run format` to format all code
2. ✅ Run `npm run lint:fix` to auto-fix linting issues
3. ✅ Run `npm run type-check` to verify TypeScript
4. ✅ Test the app to ensure nothing broke
5. 📝 Move on to Priority 1 items in IMPROVEMENT_CHECKLIST.md
6. 📝 Add navigation (React Navigation)
7. 📝 Add testing infrastructure (Jest)

---

**Estimated Time:** 2-3 hours for all quick fixes

**Impact:** Improves code quality score from 6/10 to 7/10
