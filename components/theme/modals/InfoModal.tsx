//InfoModal.tsx

import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {useUserContext} from '../../UserContext';
import Colours from '../Colour';

interface InfoModalProps {
  visible: boolean;
  onPressClose: () => void;
  title: string;
  content: string;
  accessible?: boolean;
  accessibilityLabel?: string;
  contentStyle?: object;
  titleStyle?: object;
  bodyTextStyle?: object;
  testID?: string;
}

const InfoModal: React.FC<InfoModalProps> = ({
  visible,
  onPressClose,
  title,
  content,
  accessible = false, // Default to false if not provided
  accessibilityLabel,
  contentStyle,
  titleStyle,
  bodyTextStyle,
  testID,
}) => {
  const {isDarkMode} = useUserContext(); // Get the userType and businessName from the context

  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalBackground} testID={testID}>
        {/* Background with opacity */}
        <View>
          {/* Modal Content */}
          <View
            style={[
              styles.modalContent,
              contentStyle,
              {backgroundColor: containerBackgroundColor},
            ]}
            testID="InfoModalContent">
            <TouchableOpacity
              style={styles.modalCloseIcon}
              testID="CloseIcon"
              onPress={onPressClose}
              accessibilityLabel={accessibilityLabel}>
              <Image
                source={require('../../../assets/Close.png')}
                style={styles.modalCloseIcon}
                accessible={true}
                accessibilityLabel="close button"
              />
            </TouchableOpacity>
            <Text
              style={[styles.modalTitle, titleStyle, {color: textColour}]}
              accessible={true}
              accessibilityRole="header">
              {title}
            </Text>
            <Text
              style={[styles.bodyText, {color: textColour}]}
              accessible={true}
              accessibilityLabel="Modal Content"
              accessibilityRole="text">
              {content}
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    width: '90%',
    maxHeight: '100%',
    borderRadius: 8,
    padding: 20,
    paddingTop: 50,
    position: 'relative',
    overflow: 'hidden',
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
    color: 'white',
  },
});

export default InfoModal;
