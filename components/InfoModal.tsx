import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

interface InfoModalProps {
  visible: boolean;
  onPressClose: () => void;
  title: string;
  content: string;
  accessibilityLabel?: string;
}

const InfoModal: React.FC<InfoModalProps> = ({
  visible,
  onPressClose,
  title,
  content,
  accessibilityLabel,
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
          <Text style={styles.modalTitle}>{title}</Text>
          <Text style={styles.bodyText}>{content}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#454949',
    width: 327,
    height: 199,
    borderRadius: 8,
    padding: 20,
    paddingTop: 50, // Add more padding at the top for the Close.png icon
    position: 'relative',
  },
  modalTitle: {
    fontSize: 22,
    lineHeight: 26,
    marginBottom: 10,
    color: 'white',
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
