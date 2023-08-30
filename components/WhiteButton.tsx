import React from 'react';
import {TouchableOpacity, Text, StyleSheet, ViewStyle} from 'react-native';
import Colours from '../components/theme/Colour';

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
  return (
    <TouchableOpacity
      style={[styles.button, {width: customWidth || 327}]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
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
