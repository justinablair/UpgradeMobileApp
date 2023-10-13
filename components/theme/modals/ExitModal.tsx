//ExitModal.tsx
import React from 'react';
import {Modal, View, StyleSheet} from 'react-native';
import Colours from '../Colour'; // Update the path to Colour.js
import PinkButton from '../buttons/PinkButton';
import WhiteButton from '../buttons/WhiteButton';
import Text from '../../Text';
import {useNavigation} from '@react-navigation/native';
import {useUserContext} from '../../UserContext';

interface ExitModalProps {
  visible: boolean;
  onPressClose: () => void;
  title: string;
  content: string;
  accessibilityLabel?: string;
  onAgree?: () => void;
  toggleExitModal: any; // Receive the toggle function
}

const ExitModal: React.FC<ExitModalProps> = ({
  visible,
  onPressClose,
  title,
  content,
  onAgree,
  toggleExitModal, // Receive the toggle function
}) => {
  const {isDarkMode} = useUserContext(); // Get the userType and businessName from the context
  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  const navigation = useNavigation(); // Obtain the navigation prop

  const handleExitButtonPress = () => {
    toggleExitModal(); // Close the modal
    navigation.navigate('ThemeScreen'); // Navigate to UserSelection
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.backgroundContainer}>
        <View style={styles.modalContainer}>
          <View
            style={[
              styles.modalContent,
              {backgroundColor: containerBackgroundColor},
            ]}>
            <Text
              variant="bodyTextBold centerAlign"
              style={[styles.modalTitle, {color: textColour}]}>
              {title}
            </Text>
            <Text
              variant="centerAlign"
              style={[styles.bodyText, {color: textColour}]}>
              {content}
            </Text>
            <View style={styles.buttonContainer}>
              <WhiteButton
                buttonText="Continue Switch"
                onPress={() => {
                  onAgree && onAgree();
                  onPressClose(); // Close the modal after agreeing
                }}
                customWidth={158} // Set a custom width for the PinkButton
              />
              <View style={{width: 10}} />
              <PinkButton
                buttonText="Exit Switch"
                onPress={() => {
                  handleExitButtonPress();
                  onPressClose();
                }}
                customWidth={158}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  modalContainer: {
    // flex: 1,
    // backgroundColor: 'rgba(0, 0, 0, 1)', // Fully opaque background
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    padding: 10,
  },

  modalContent: {
    // backgroundColor: Colours.white,
    // width: 327, // Set the width to 327
    borderRadius: 8,
    paddingTop: 18,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15,

    // paddingLeft: 18,
    // paddingRight: 18,

    // paddingTop: 50, // Add more padding at the top for the Close.png icon
    position: 'relative',
  },
  modalTitle: {
    fontSize: 22,
    lineHeight: 26,
    marginBottom: 10,
    fontWeight: '500',
  },

  bodyText: {
    fontSize: 16,
    lineHeight: 21,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row', // Arrange buttons side by side
    justifyContent: 'space-between', // Add space between buttons
    alignItems: 'center', // Align buttons vertically
  },
});

export default ExitModal;
