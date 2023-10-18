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
  toggleExitModal: () => void;
}

const ExitModal: React.FC<ExitModalProps> = ({
  visible,
  onPressClose,
  title,
  content,
  onAgree,
  toggleExitModal,
}) => {
  // Context and navigation hooks

  const {isDarkMode} = useUserContext(); // Get the userType and businessName from the context
  const navigation = useNavigation(); // Obtain the navigation prop

  // Style configurations
  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  // Handle exit button press
  const handleExitButtonPress = () => {
    toggleExitModal(); // Close the modal
    navigation.navigate('ThemeScreen'); // Navigate to UserSelection
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View
        style={styles.backgroundContainer}
        accessible={true}
        accessibilityLabel="Exit Modal Background"
        accessibilityRole="alert"
        testID="backgroundContainer">
        <View style={styles.modalContainer}>
          <View
            style={[
              styles.modalContent,
              {backgroundColor: containerBackgroundColor},
            ]}
            accessible={true}
            accessibilityLabel="Exit Modal Content"
            accessibilityRole="alert"
            testID="modalContent">
            <Text
              variant="bodyTextBold centerAlign"
              style={[styles.modalTitle, {color: textColour}]}
              accessibilityRole="header">
              {title}
            </Text>
            <Text
              variant="centerAlign"
              style={[styles.bodyText, {color: textColour}]}
              accessibilityRole="text">
              {content}
            </Text>
            <View
              style={styles.buttonContainer}
              accessible={true}
              accessibilityRole="toolbar">
              <WhiteButton
                buttonText="Continue Switch"
                onPress={() => {
                  onAgree && onAgree();
                  onPressClose(); // Close the modal after agreeing
                }}
                customWidth={158}
                accessibilityLabel="Continue Switch Button"
                testID="continueSwitchButton"
              />
              <View style={{width: 10}} />
              <PinkButton
                buttonText="Exit Switch"
                onPress={() => {
                  handleExitButtonPress();
                  onPressClose();
                }}
                customWidth={158}
                accessibilityLabel="Exit Switch Button"
                testID="exitSwitchButton"
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    padding: 10,
  },

  modalContent: {
    borderRadius: 8,
    paddingTop: 18,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15,
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
    flexDirection: 'row',
    justifyContent: 'space-between', // Add space between buttons
    alignItems: 'center',
  },
});

export default ExitModal;
