import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
  TextStyle,
} from 'react-native';

// Define the possible variants for the Text component
type TextVariant = 'screenTitle' | 'headerMedium' | 'headerSmall' | 'bodyText'; // Use | to indicate multiple variants

// Define the props for the Text component, extending RNTextProps
interface TextProps extends RNTextProps {
  variant?: TextVariant; // Allow specifying the variant
  style?: TextStyle | TextStyle[]; // Allow specifying styles
}

// Create the Text component
const Text: React.FC<TextProps> = ({
  variant = 'screenTitle',
  style,
  ...props
}) => {
  // Use RNText with the specified styles based on the variant
  return <RNText style={[styles[variant], style]} {...props} />;
};

// Define styles for different variants
const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 22,
    lineHeight: 26,
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
  },
  // Define more variants as needed
  headerMedium: {
    fontSize: 24,
    fontWeight: 'bold',
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
    textAlign: 'left', // Updated to 'left'
    marginTop: 10,
    color: 'white',
  },
});

export default Text;
