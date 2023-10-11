//PinkButton.tsx

import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colours from '../Colour'; // Update the path to Colour.js
import {useUserContext} from '../../UserContext';

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
  const {isDarkMode} = useUserContext(); // Get the userType and businessName from the context
  const disabledButton = isDarkMode
    ? Colours.disabledPinkDark
    : Colours.disabledPinkLight;

  const disabledText = isDarkMode ? Colours.disabledWhite : Colours.white;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && {backgroundColor: disabledButton},
        {width: customWidth || 327},
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text
        style={[
          styles.buttonText,
          {
            color: disabled ? disabledText : 'white',
          },
        ]}>
        {buttonText}
      </Text>
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

  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default PinkButton;
