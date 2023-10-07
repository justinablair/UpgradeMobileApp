import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Text from './Text';
import Colour from './theme/Colour';

interface ToastProps {
  message: string;
}

const Toast: React.FC<ToastProps> = ({message}) => {
  return (
    <View style={styles.toastContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/Warning.png')}
          accessibilityLabel="Exclamation mark"
        />
      </View>
      <Text variant="bodyText" style={[{color: Colour.white}, styles.text]}>
        {message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    backgroundColor: 'black',
    width: '100%',
    height: '13%',
    padding: 10,
    borderRadius: 4,
    flexDirection: 'row', // Arrange components horizontally
  },
  imageContainer: {
    paddingRight: 10, // Add space to the right of the image
  },

  text: {
    flex: 1,
    padding: 3,
  },
});

export default Toast;
