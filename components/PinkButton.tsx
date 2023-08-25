//PinkButton.tsx

import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colours from '../components/theme/Colour'; // Update the path to Colour.js

interface PinkButtonProps {
  buttonText: string;
  onPress: () => void;
}

const PinkButton: React.FC<PinkButtonProps> = ({buttonText, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colours.pink,
    borderRadius: 8,
    width: 327,
    padding: 15,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default PinkButton;
