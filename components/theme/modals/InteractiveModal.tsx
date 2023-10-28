import React from 'react';
import {Modal, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Text from '../../Text';
import Colours from '../Colour';
import PinkButton from '../buttons/PinkButton';
import WhiteButton from '../buttons/WhiteButton';
import {useUserContext} from '../../UserContext';

interface InteractiveModalProps {
  modalVisible: boolean;
  closeModal: () => void;
  modalTitle: string;
  modalContent: string | JSX.Element;
  pinkButtonText: string;
  onPinkButtonClick: () => void;
  whiteButtonText?: string;
  onWhiteButtonClick?: () => void;
  testID?: string;
  accessible?: boolean;
  accessibilityLabel?: string;
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
  testID,
  accessible = false, // Default to false if not provided
  accessibilityLabel,
}) => {
  // Access isDarkMode from the user context
  const {isDarkMode} = useUserContext();

  // Determine the background and title colors based on the dark mode
  const backgroundColour = isDarkMode ? Colours.black : Colours.white;
  const title = isDarkMode ? Colours.white : Colours.black;

  // Render the pink button with the provided text and click handler
  const renderPinkButton = () => (
    <PinkButton
      buttonText={pinkButtonText}
      onPress={onPinkButtonClick}
      testID={'interactivePinkButton'}
    />
  );

  // Render the white button if the text and click handler are provided, otherwise render nothing
  const renderWhiteButton = () => {
    if (whiteButtonText && onWhiteButtonClick) {
      return (
        <WhiteButton
          buttonText={whiteButtonText}
          onPress={onWhiteButtonClick}
        />
      );
    }
    return null;
  };

  return (
    <Modal visible={modalVisible} animationType="slide" transparent>
      {/* Main modal container */}
      <View style={styles.modalContainer}>
        {/* Modal content */}
        <View
          style={[styles.modalContent, {backgroundColor: backgroundColour}]}>
          {/* Close icon */}
          <TouchableOpacity
            style={styles.modalCloseIcon}
            onPress={closeModal}
            accessible={true}
            accessibilityLabel="Close Button">
            <Image
              source={require('../../../assets/Close.png')}
              style={styles.modalCloseIcon}
              accessible={true}
              accessibilityLabel="Close Icon"
            />
          </TouchableOpacity>
          {/* Modal title */}
          <Text
            variant="leftAlign"
            style={[styles.modalTitle, {color: title}]}
            accessible={true}
            accessibilityRole="header"
            accessibilityLabel={modalTitle}>
            {modalTitle}
          </Text>
          {/* Modal content */}
          <Text
            variant="leftAlign"
            style={[styles.bodyText, {color: title}]}
            accessible={true}
            accessibilityLabel="Modal Body Text">
            {modalContent}
          </Text>
          {/* Render the pink button */}
          {renderPinkButton()}
          {/* Render the white button (if available) */}
          {renderWhiteButton()}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for the modal
    justifyContent: 'flex-end', // Align the content at the bottom of the screen
    alignItems: 'center', // Center align the items horizontally
  },
  modalContent: {
    width: '100%', // Take up the full width of the screen
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
