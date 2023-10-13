// ActionableModal.tsx

import React from 'react';
import {Modal, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Text from '../../Text';
import Colours from '../Colour';
import PinkButton from '../buttons/PinkButton'; // Import the PinkButton component from the correct path
import WhiteButton from '../buttons/WhiteButton'; // Import the WhiteButton component from the correct path
import {useUserContext} from '../../UserContext';

interface InteractiveModalProps {
  modalVisible: boolean;
  closeModal: () => void;
  modalTitle: string;
  modalContent: string | JSX.Element;
  pinkButtonText: string;
  onPinkButtonClick: () => void;
  whiteButtonText?: string; // Make the WhiteButton text optional
  onWhiteButtonClick?: () => void; // Make the WhiteButton click handler optional
}

const InteractiveModal: React.FC<InteractiveModalProps> = ({
  modalVisible,
  closeModal,
  modalTitle,
  modalContent,
  pinkButtonText,
  onPinkButtonClick,
  whiteButtonText,
  onWhiteButtonClick,
}) => {
  const {isDarkMode} = useUserContext(); // Access isDarkMode from context
  const backgroundColour = isDarkMode ? Colours.black : Colours.white;
  const title = isDarkMode ? Colours.white : Colours.black;

  const renderPinkButton = () => (
    <PinkButton buttonText={pinkButtonText} onPress={onPinkButtonClick} />
  );

  const renderWhiteButton = () => {
    if (whiteButtonText && onWhiteButtonClick) {
      return (
        <WhiteButton
          buttonText={whiteButtonText}
          onPress={onWhiteButtonClick}
        />
      );
    } else {
      // If whiteButtonText and onWhiteButtonClick are not provided, render nothing
      return null;
    }
  };

  return (
    <Modal visible={modalVisible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View
          style={[styles.modalContent, {backgroundColor: backgroundColour}]}>
          <TouchableOpacity style={styles.modalCloseIcon} onPress={closeModal}>
            <Image
              source={require('../../../assets/Close.png')}
              style={styles.modalCloseIcon}
            />
          </TouchableOpacity>
          <Text variant="leftAlign" style={[styles.modalTitle, {color: title}]}>
            {modalTitle}
          </Text>
          <Text variant="leftAlign" style={[styles.bodyText, {color: title}]}>
            {modalContent}
          </Text>
          {renderPinkButton()}
          {renderWhiteButton()}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContent: {
    // backgroundColor: Colours.white,
    width: '100%',
    borderRadius: 8,
    padding: 20,
    paddingTop: 50,
    position: 'relative',
  },
  modalTitle: {
    fontSize: 22,
    lineHeight: 26,
    marginBottom: 10,
    fontWeight: '500',
  },
  modalCloseIcon: {
    position: 'absolute',
    top: 7,
    right: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
    padding: 5,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 21,
    marginBottom: 20,
  },
});

export default InteractiveModal;
