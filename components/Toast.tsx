import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Text from './Text';
import Colour from './theme/Colour';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Interface for the props of the Toast component
interface ToastProps {
  message: string;
}

// Toast component that displays a message with an optional warning image
const Toast: React.FC<ToastProps> = ({message}) => {
  // Handle the case when the message is empty
  if (!message) {
    // handle empty message case
    return null;
  }
  // Rendering the Toast component with the provided message
  return (
    <View style={styles.toastContainer}>
      {/* Container for the warning image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/Warning.png')}
          accessibilityLabel="Exclamation mark"
        />
      </View>
      {/* Text component for displaying the message */}
      <Text variant="bodyText" style={[{color: Colour.white}, styles.text]}>
        {message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    backgroundColor: 'black',
    width: wp('80%'),
    height: hp('8%'),
    padding: wp('2%'),
    borderRadius: 4,
    flexDirection: 'row',
    marginTop: -hp('5%'),
  },
  imageContainer: {
    paddingRight: wp('2.5%'),
    alignItems: 'center',
  },

  text: {
    flex: 1,
    padding: wp('0.75%'),
  },
});

export default Toast;
