import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {CloseIcon} from '../icons/CloseIcon';

interface InfoModalProps {
  visible: boolean;
  onPressClose: () => void;
  title: string;
  content: string;
  accessibilityLabel?: string;
  contentStyle?: object;
  titleStyle?: object;
  bodyTextStyle?: object;
}

const InfoModal: React.FC<InfoModalProps> = ({
  visible,
  onPressClose,
  title,
  content,
  accessibilityLabel,
  contentStyle,
  titleStyle,
  bodyTextStyle,
}) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View
        style={styles.modalBackground}
        accessible={true}
        accessibilityLabel="Info Modal Background"
        accessibilityRole="alert">
        {/* Background with opacity */}
        <View>
          {/* Modal Content */}
          <View
            style={[styles.modalContent, contentStyle]}
            accessible={true}
            accessibilityLabel="Info Modal Content"
            testID="InfoModalContent"
            accessibilityRole="alert">
            <TouchableOpacity
              style={styles.modalCloseIcon}
              testID="CloseIcon"
              onPress={onPressClose}
              accessibilityLabel={accessibilityLabel}>
              <Image
                source={require('../../../assets/Close.png')}
                style={styles.modalCloseIcon}
                accessibilityLabel={accessibilityLabel}
              />
            </TouchableOpacity>
            <Text
              style={[styles.modalTitle, titleStyle]}
              accessibilityRole="header">
              {title}
            </Text>
            <Text style={[styles.bodyText, bodyTextStyle]}>{content}</Text>
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
    backgroundColor: '#454949',
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
