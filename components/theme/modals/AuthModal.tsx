import React, {useState, useEffect} from 'react';
import {View, Modal, StyleSheet} from 'react-native';
import Colours from '../Colour';
import Text from '../../Text';
import Dots from '../../Dots';
import Grid from '../../Grid';

interface AuthModalProps {
  visible?: boolean;
  onClose: () => void;
  navigation?: any;
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

          {/* Importing DotsComponent */}
          <Dots selectedCount={selectedCount} totalCount={6} color="white" />

          <View style={styles.space} />

          {/* Importing GridComponent */}
          <Grid
            handleDigitPress={handleDigitPress}
            handleBackspace={handleBackspace}
            textColour="white"
          />
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
});

export default AuthModal;
