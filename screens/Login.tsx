//UpgradeIntro.tsx

import React from 'react';
import {ScrollView, StyleSheet, SafeAreaView} from 'react-native';

import Text from '../components/Text';
import {NavigationProps} from '../navigationTypes';
import Colours from '../components/theme/Colour';
import PinkButton from '../components/PinkButton';
import AuthModal from '../components/AuthModal';

type LoginProps = NavigationProps<'Login'>;

const LoginScreen: React.FC<LoginProps> = ({navigation}) => {
  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradedWelcome'); // Navigate to the desired screen
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <AuthModal
          visible={false}
          navigation={undefined}
          onNext={function (code: string): void {
            throw new Error('Function not implemented.');
          }}
          onClose={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
        <PinkButton buttonText="Login" onPress={handleSwitchButtonPress} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colours.black,
    padding: 25,
    height: '100%',
  },
  safeAreaContainer: {
    backgroundColor: Colours.black,
  },

  largeImage: {
    width: 280,
    height: 260,
    alignSelf: 'center',
  },

  centeredText: {
    textAlign: 'center',
  },
});

export default LoginScreen;
