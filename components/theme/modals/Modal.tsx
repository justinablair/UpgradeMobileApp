//Modal.tsx
import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Colours from '../Colour'; // Update the path to Colour.js
import PinkButton from '../buttons/PinkButton';

interface CustomModalProps {
  visible: boolean;
  onPressClose: () => void;
  title: string;
  content: string;
  accessibilityLabel?: string;
  onAgree?: () => void; // Optional callback for Agree button
}

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onPressClose,
  title,
  content,
  accessibilityLabel,
  onAgree,
}) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity
            style={styles.modalCloseIcon}
            onPress={onPressClose}>
            <Image
              source={require('../assets/Close.png')}
              style={styles.modalCloseIcon}
              accessibilityLabel={accessibilityLabel}
            />
          </TouchableOpacity>
          <Text style={[styles.modalTitle, {color: Colours.black}]}>
            {title}
          </Text>
          <Text style={[styles.bodyText, {color: Colours.black}]}>
            {content}
          </Text>
          <PinkButton
            buttonText="Agree"
            onPress={() => {
              onAgree && onAgree();
              onPressClose(); // Close the modal after agreeing
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: Colours.white,
    width: '100%',
    borderRadius: 8,
    padding: 20,
    paddingTop: 50, // Add more padding at the top for the Close.png icon
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
  buttonContainer: {
    marginTop: 20,
  },
});

export default CustomModal;
