import React, {useState, useEffect} from 'react';
import {View, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import Colours from '../Colour';
import {PinBackIcon} from '../icons/PinbackIcon';
import Text from '../../Text';

interface AuthModalProps {
  visible?: boolean;
  navigation?: any;
  onNext?: (code: string) => void;
  onClose: () => void;
  navigationTarget: string;
}
const AuthModal: React.FC<AuthModalProps> = ({
  visible,
  onClose,
  navigation,
  navigationTarget,
}) => {
  const [code, setCode] = useState('');
  const [selectedCount, setSelectedCount] = useState(0);

  useEffect(() => {
    if (selectedCount === 6) {
      navigation.navigate(navigationTarget);
      onClose();
    }
  }, [selectedCount, navigation, onClose]);
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
      <View style={styles.modalContainer}>
        <View
          style={styles.modalContent}
          accessibilityLabel="Authentication Modal">
          <View style={styles.space} />
          <Text variant="screenTitle" style={{color: Colours.white}}>
            Authorise
          </Text>
          <View style={styles.space} />

          <View style={styles.dotsContainer}>
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

          <View style={styles.gridContainer}>
            {/* Display numbers 1-9 and 0 in a grid */}
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.gridItem}
                onPress={() => handleDigitPress(1)}>
                <Text style={styles.gridText} accessibilityLabel="digit-1">
                  1
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.gridItem}
                onPress={() => handleDigitPress(2)}>
                <Text style={styles.gridText} accessibilityLabel="digit-2">
                  2
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.gridItem}
                onPress={() => handleDigitPress(3)}>
                <Text style={styles.gridText} accessibilityLabel="digit-3">
                  3
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.gridItem}
                onPress={() => handleDigitPress(4)}>
                <Text style={styles.gridText} accessibilityLabel="digit-4">
                  4
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.gridItem}
                onPress={() => handleDigitPress(5)}>
                <Text style={styles.gridText} accessibilityLabel="digit-5">
                  5
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.gridItem}
                onPress={() => handleDigitPress(6)}>
                <Text style={styles.gridText} accessibilityLabel="digit-6">
                  6
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.gridItem}
                onPress={() => handleDigitPress(7)}>
                <Text style={styles.gridText} accessibilityLabel="digit-7">
                  7
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.gridItem}
                onPress={() => handleDigitPress(8)}>
                <Text style={styles.gridText} accessibilityLabel="digit-8">
                  8
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.gridItem}
                onPress={() => handleDigitPress(9)}>
                <Text style={styles.gridText} accessibilityLabel="digit-9">
                  9
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <View style={styles.gridItem} />
              <TouchableOpacity
                style={styles.gridItem}
                onPress={() => handleDigitPress(0)}>
                <Text style={styles.gridText} accessibilityLabel="digit-0">
                  0
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.gridItem}
                onPress={handleBackspace}
                testID="backspaceButton">
                <PinBackIcon
                  fill="white"
                  accessibilityLabel="backspaceButton"
                />
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
