import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from './Text';
import Colour from './theme/Colour';

interface ToastProps {
  message: string;
}

const Toast: React.FC<ToastProps> = ({message}) => {
  return (
    <View style={styles.toastContainer}>
      <Text variant="bodyText" style={{color: Colour.white}}>
        {message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    backgroundColor: 'black',
    width: 378,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
});

export default Toast;
