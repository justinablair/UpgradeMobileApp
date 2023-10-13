//UpgradeIntro.tsx

import React from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';

import Text from '../components/Text';
import {NavigationProps} from '../navigationTypes';
import Colours from '../components/theme/Colour';
import PinkButton from '../components/theme/buttons/PinkButton';
import {useUserContext} from '../components/UserContext';

type UpgradedWelcomeProps = NavigationProps<'UpgradedWelcome'>;

const UpgradedWelcomeScreen: React.FC<UpgradedWelcomeProps> = ({
  navigation,
}) => {
  const {isDarkMode} = useUserContext();

  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradedEmail'); // Navigate to the desired screen
  };

  const MettleStarsImageSource = isDarkMode
    ? require('../assets/MettleStars.png')
    : require('../assets/MettleStarsLightMode.png');

  const FSCSImageSource = isDarkMode
    ? require('../assets/FSCSLogo.png')
    : require('../assets/FSCSLightMode.png');

  return (
    <SafeAreaView
      style={[
        styles.safeAreaContainer,
        {backgroundColor: containerBackgroundColor},
      ]}>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          {backgroundColor: containerBackgroundColor},
        ]}>
        <View>
          <Image
            source={MettleStarsImageSource}
            style={styles.largeImage}
            resizeMode="contain"
            accessibilityLabel="Mettle logo with stars around it"
          />
          <Text variant="screenTitle centerAlign" style={{color: textColour}}>
            {' '}
            {/* Fix the typo here */}
            Welcome to your new Mettle bank account
          </Text>
          <Text variant="bodyText centerAlign" style={{color: textColour}}>
            It may look like nothing’s changed, but we’ve done a lot of work
            under the hood.
          </Text>
          <View style={styles.bottomContainer}>
            <Image
              source={FSCSImageSource}
              style={styles.smallImage}
              accessibilityLabel="FSCS logo"
            />
            <Text
              variant="bodyTextDescription centerAlign"
              style={[styles.text, {color: textColour}]}>
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
const screenHeight = Dimensions.get('window').height;
const marginTop = screenHeight * 0.2; // Adjust the multiplier according to your layout requirements

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  safeAreaContainer: {
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
    marginTop: marginTop,
    flexDirection: 'row',
    width: 327,
  },
  smallImage: {
    width: 32,
    height: 32,
  },

  text: {
    flex: 1,
  },
});

export default UpgradedWelcomeScreen;
