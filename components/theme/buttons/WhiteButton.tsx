import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colours from '../Colour';
import {useUserContext} from '../../UserContext';

interface WhiteButtonProps {
  buttonText: string;
  onPress: () => void;
  customWidth?: number; // New prop for custom width
}

const WhiteButton: React.FC<WhiteButtonProps> = ({
  buttonText,
  onPress,
  customWidth,
}) => {
  const {isDarkMode} = useUserContext();

  const backgroundColour = isDarkMode ? Colours.black : Colours.white;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {width: customWidth || 327},
        {backgroundColor: backgroundColour},
      ]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: Colours.pink, // Pink outline
    borderWidth: 1, // Pink outline width
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    color: Colours.pink, // Pink text color
  },
});

export default WhiteButton;
