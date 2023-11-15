//Text.tsx

import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
  TextStyle,
} from 'react-native';

// Define the possible variants for the Text component
type TextVariant =
  | 'screenTitle'
  | 'headerMedium'
  | 'headerSmall'
  | 'bodyText'
  | 'bodyTextBold'
  | 'leftAlign'
  | 'centerAlign';

// Define the props for the Text component
interface TextProps extends RNTextProps {
  variant?: TextVariant | string; // Allow specifying the variant as a string
  style?: TextStyle | TextStyle[]; // Allow specifying styles
}

// Define the Text component
const Text: React.FC<TextProps> = ({
  variant = 'screenTitle',
  style,
  ...props
}) => {
  const variantNames = variant.split(' ');
  const combinedStyles = variantNames.map(variantName => styles[variantName]);

  return <RNText style={[...combinedStyles, style]} {...props} />;
};

// Define styles for different variants
const styles: Record<string, TextStyle> = StyleSheet.create({
  screenTitle: {
    fontSize: 22,
    lineHeight: 26,
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
  },
  headerMedium: {
    fontSize: 24,
    textAlign: 'left',
    marginTop: 10,
    color: 'white',
  },
  headerSmall: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 21,
    textAlign: 'left',
    marginTop: 10,
    color: 'white',
  },
  bodyTextBold: {
    fontWeight: '600',
  },
  bodyTextDescription: {
    fontSize: 13,
  },
  leftAlign: {
    textAlign: 'left',
  },
  centerAlign: {
    textAlign: 'center',
  },
});

export default Text;
