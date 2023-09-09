//ExitModal.tsx
import React from 'react';
import {Modal, View, StyleSheet} from 'react-native';
import Colours from '../components/theme/Colour'; // Update the path to Colour.js
import PinkButton from './PinkButton';
import WhiteButton from './WhiteButton';
import Text from './Text';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../navigationTypes';

interface ExitModalProps {
  visible: boolean;
  onPressClose: () => void;
  title: string;
  content: string;
  accessibilityLabel?: string;
  onAgree?: () => void;
  onNavigateToUpgradeIntro: () => void; // Define the callback prop
}

const ExitModal: React.FC<ExitModalProps> = ({
  visible,
  onPressClose,
  title,
  content,
  onAgree,
  onNavigateToUpgradeIntro,
}) => {
  const navigation = useNavigation();

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.backgroundContainer}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text
              variant="bodyTextBold centerAlign"
              style={[styles.modalTitle, {color: Colours.black}]}>
              {title}
            </Text>
            <Text
              variant="centerAlign"
              style={[styles.bodyText, {color: Colours.black}]}>
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
                  onNavigateToUpgradeIntro();
                  onPressClose();
                  navigation.navigate('UserSelection'); // Use the navigation prop here
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
    backgroundColor: Colours.white,
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
