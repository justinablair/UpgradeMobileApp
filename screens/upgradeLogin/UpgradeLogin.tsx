import React, {useEffect, useState} from 'react';
import {View, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import {useUserContext} from '../../components/UserContext';
import Colours from '../../components/theme/Colour';
import PinkButton from '../../components/theme/buttons/PinkButton';
import Text from '../../components/Text';
import Dots from '../../components/Dots';
import Grid from '../../components/Grid';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {height} = Dimensions.get('window');

interface LoginProps {
  navigation?: any;
}

const LoginScreen: React.FC<LoginProps> = ({navigation}) => {
  const {isDarkMode} = useUserContext();
  const backgroundColour = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  const [code, setCode] = useState('');
  const [selectedCount, setSelectedCount] = useState(0);

  useEffect(() => {
    if (selectedCount === 6) {
      navigation.navigate('UpgradedWelcome');
    }
  }, [selectedCount, navigation]);

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
    <SafeAreaView
      style={[styles.safeAreaContainer, {backgroundColor: backgroundColour}]}>
      <View style={styles.modalContainer}>
        <View
          style={styles.modalContent}
          accessibilityLabel="Authentication Modal">
          <View style={styles.space} />
          <Text variant="screenTitle" style={{color: textColour}}>
            Authorise
          </Text>
          <View style={styles.space} testID="selectedCount" />

          {/* Importing the Dots */}
          <Dots
            selectedCount={selectedCount}
            totalCount={6}
            color={textColour}
          />

          <View style={styles.space} />

          {/* Importing the Grid */}
          <Grid
            handleDigitPress={handleDigitPress}
            handleBackspace={handleBackspace}
            textColour={textColour}
          />
        </View>
        <View style={styles.padding}>
          <PinkButton
            buttonText="Login"
            accessibilityLabel="login"
            testID="loginButton"
            onPress={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContent: {
    padding: wp('4%'),
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignItems: 'center',
    height: hp('60%'),
    width: '100%',
  },
  space: {
    marginVertical: hp('2%'),
  },
  safeAreaContainer: {
    flex: 1,
    padding: wp('5%'),
  },
  padding: {
    paddingBottom: hp('2%'),
  },
});

export default LoginScreen;
