//PinkButton.tsx

import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colours from '../Colour'; // Update the path to Colour.js

interface PinkButtonProps {
  buttonText: string;
  onPress: () => void;
  disabled?: boolean; // Make the disabled prop optional
  customWidth?: number; // New prop for custom width
}

const PinkButton: React.FC<PinkButtonProps> = ({
  buttonText,
  onPress,
  disabled = false,
  customWidth,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.disabledButton,
        {width: customWidth || 327},
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: Colours.pink,
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    zIndex: 1,
  },
  disabledButton: {
    backgroundColor: Colours.disabledPink, // Use an appropriate color for disabled state
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default PinkButton;
