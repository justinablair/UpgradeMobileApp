//UpgradeIntro.tsx

import React from 'react';
import {View, Image, ScrollView, StyleSheet, SafeAreaView} from 'react-native';

import Text from '../components/Text';
import {NavigationProps} from '../navigationTypes';
import Colours from '../components/theme/Colour';
import PinkButton from '../components/theme/buttons/PinkButton';

type UpgradedWelcomeProps = NavigationProps<'UpgradedWelcome'>;

const UpgradedWelcomeScreen: React.FC<UpgradedWelcomeProps> = ({
  navigation,
}) => {
  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradedEmail'); // Navigate to the desired screen
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Image
            source={require('../assets/MettleStars.png')}
            style={styles.largeImage}
            resizeMode="contain"
            accessibilityLabel="Mettle logo with stars around it"
          />
          <Text variant="screenTitle centerAlign">
            {' '}
            {/* Fix the typo here */}
            Welcome to your new Mettle bank account
          </Text>
          <Text variant="bodyText centerAlign">
            It may look like nothing’s changed, but we’ve done a lot of work
            under the hood.
          </Text>
          <View style={styles.bottomContainer}>
            <Image
              source={require('../assets/FSCSLogo.png')}
              style={styles.smallImage}
              accessibilityLabel="FSCS logo"
            />
            <Text variant="bodyTextDescription centerAlign" style={styles.text}>
              Your eligible deposits at Mettle are covered by the Financial
              Services Compensation Scheme.
            </Text>
          </View>
          <PinkButton buttonText="Next" onPress={handleSwitchButtonPress} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colours.black,
    padding: 25,
  },
  safeAreaContainer: {
    backgroundColor: Colours.black,
    flex: 1,
  },
  largeImage: {
    alignSelf: 'center',
    width: 279,
    height: 200,
  },
  centeredText: {
    textAlign: 'center',
  },
  bottomContainer: {
    marginTop: '40%',
    flexDirection: 'row',
    width: 327,
  },
  smallImage: {
    width: 32,
    height: 32,
  },

  text: {
    flex: 1,
    color: Colours.white,
  },
});

export default UpgradedWelcomeScreen;
