import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colours from '../components/theme/Colour';

interface WhiteButtonProps {
  buttonText: string;
  onPress: () => void;
}

const WhiteButton: React.FC<WhiteButtonProps> = ({buttonText, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderColor: Colours.pink, // Pink outline
    borderWidth: 2, // Pink outline width
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
    color: Colours.pink, // Pink text color
  },
});

export default WhiteButton;
