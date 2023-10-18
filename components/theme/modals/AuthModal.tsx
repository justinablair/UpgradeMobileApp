import React, {useState, useEffect} from 'react';
import {View, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import Colours from '../Colour';
import Text from '../../Text';
import {PinBackIcon} from '../icons/PinbackIcon';

interface AuthModalProps {
  visible: boolean;
  onNext?: () => void; // Make onNext callback optional
  onClose: () => void;
  onDigitsEntered?: () => void; // Make onDigitsEntered callback optional
}
const AuthModal: React.FC<AuthModalProps> = ({
  visible,
  onClose,
  onDigitsEntered,
  onNext,
}) => {
  const [code, setCode] = useState('');
  const [selectedCount, setSelectedCount] = useState(0);

  useEffect(() => {
    if (selectedCount === 6 && code.length === 6) {
      if (onNext) {
        onNext(); // Call onNext if provided
      }
      if (onDigitsEntered) {
        onDigitsEntered(); // Call onDigitsEntered if provided
      }
      if (code.length === 6) {
        // Check if code length is 6
        onClose(); // Close the modal if code length is 6
      }
    }
  }, [selectedCount, onNext, onDigitsEntered, onClose]);

  const handleDigitPress = (digit: number) => {
    if (selectedCount < 6) {
      setCode(prevCode => prevCode + digit.toString());
      setSelectedCount(prevCount => prevCount + 1);
    }
  };

  const handleBackspace = () => {
    if (code.length > 0) {
      setCode(prevCode => prevCode.slice(0, -1));
      setSelectedCount(prevCount => prevCount - 1);
    }
  };
  return (
    <Modal transparent={true} visible={visible}>
      <View
        style={styles.modalContainer}
        accessible={true}
        accessibilityLabel="Authentication Modal"
        accessibilityRole="alert">
        <View style={styles.modalContent}>
          <View style={styles.space} /> {/* Title of the modal */}
          <Text
            variant="screenTitle"
            style={{color: Colours.white}}
            accessibilityLabel="Authentication Screen Title"
            accessibilityRole="text">
            Authorise
          </Text>
          <View style={styles.space} />
          {/* Display the dots representing the pin */}
          <View
            style={styles.dotsContainer}
            accessible={true}
            accessibilityLabel="Authentication Pin Container"
            accessibilityRole="alert"
            accessibilityState={{busy: true}}>
            {/* Display 6 dots */}
            {Array.from({length: 6}).map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  selectedCount > index && styles.selectedDot,
                ]}
              />
            ))}
          </View>
          <View style={styles.space} />
          {/* Display the grid of digits */}
          <View style={styles.gridContainer}>
            {/* Rows of digits 1-3 */}
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.gridItem}
                onPress={() => handleDigitPress(1)}
                accessibilityRole="button">
                <Text
                  style={styles.gridText}
                  accessibilityRole="keyboardkey"
                  accessibilityLabel="digit-1">
                  1
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.gridItem}
                onPress={() => handleDigitPress(2)}>
                <Text
                  style={styles.gridText}
                  accessibilityRole="keyboardkey"
                  accessibilityLabel="digit-2">
                  2
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.gridItem}
                onPress={() => handleDigitPress(3)}>
                <Text
                  style={styles.gridText}
                  accessibilityRole="keyboardkey"
                  accessibilityLabel="digit-3">
                  3
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              {/* Rows of digits 4-6 */}
              <TouchableOpacity
                style={styles.gridItem}
                onPress={() => handleDigitPress(4)}>
                <Text
                  style={styles.gridText}
                  accessibilityRole="keyboardkey"
                  accessibilityLabel="digit-4">
                  4
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.gridItem}
                onPress={() => handleDigitPress(5)}>
                <Text
                  style={styles.gridText}
                  accessibilityRole="keyboardkey"
                  accessibilityLabel="digit-5">
                  5
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.gridItem}
                onPress={() => handleDigitPress(6)}>
                <Text
                  style={styles.gridText}
                  accessibilityRole="keyboardkey"
                  accessibilityLabel="digit-6">
                  6
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              {/* Rows of digits 7-9 */}

              <TouchableOpacity
                style={styles.gridItem}
                onPress={() => handleDigitPress(7)}>
                <Text
                  style={styles.gridText}
                  accessibilityRole="keyboardkey"
                  accessibilityLabel="digit-7">
                  7
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.gridItem}
                onPress={() => handleDigitPress(8)}>
                <Text
                  style={styles.gridText}
                  accessibilityRole="keyboardkey"
                  accessibilityLabel="digit-8">
                  8
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.gridItem}
                onPress={() => handleDigitPress(9)}>
                <Text
                  style={styles.gridText}
                  accessibilityRole="keyboardkey"
                  accessibilityLabel="digit-9">
                  9
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <View style={styles.gridItem} />
              {/* Row with the digit 0 and backspace button */}
              <TouchableOpacity
                style={styles.gridItem}
                onPress={() => handleDigitPress(0)}>
                <Text
                  style={styles.gridText}
                  accessibilityRole="keyboardkey"
                  accessibilityLabel="digit-0">
                  0
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.gridItem}
                onPress={handleBackspace}
                testID="backspaceButton">
                <PinBackIcon fill="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: Colours.black,
    padding: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignItems: 'center',
    height: '60%',
    width: '100%',
  },
  space: {
    marginVertical: 15,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    height: 15,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    marginHorizontal: 5,
  },
  selectedDot: {
    width: 13,
    height: 13,
    borderRadius: 13,
  },
  gridContainer: {
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 0,
  },
  gridItem: {
    width: '30%',
    aspectRatio: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  gridText: {
    fontWeight: '600',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default AuthModal;
