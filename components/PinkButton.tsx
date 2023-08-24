import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface PinkButtonProps {
  buttonText: string;
  onPress: () => void;
  navigateToScreen?: string;
  navigation: any; // Add this prop for navigation
}

const PinkButton: React.FC<PinkButtonProps> = ({
  buttonText,
  onPress,
  navigateToScreen,
  navigation,
}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        onPress();
        if (navigateToScreen) {
          navigation.navigate(navigateToScreen);
        }
      }}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f45f78',
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
