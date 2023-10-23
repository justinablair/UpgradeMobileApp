//UpgradeWelcome.tsx

import React, {useEffect} from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  AccessibilityInfo,
} from 'react-native';

import Text from '../../components/Text';
import {NavigationProps} from '../../navigationTypes';
import Colours from '../../components/theme/Colour';
import PinkButton from '../../components/theme/buttons/PinkButton';
import {useUserContext} from '../../components/UserContext';

type UpgradedWelcomeProps = NavigationProps<'UpgradedWelcome'>;

const UpgradedWelcomeScreen: React.FC<UpgradedWelcomeProps> = ({
  navigation,
}) => {
  // Accessing dark mode context from user context
  const {isDarkMode} = useUserContext();

  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradedEmail');
  };

  // Determining image sources based on dark mode
  const MettleStarsImageSource = isDarkMode
    ? require('../../assets/MettleStars.png')
    : require('../../assets/MettleStarsLightMode.png');

  const FSCSImageSource = isDarkMode
    ? require('../../assets/FSCSLogo.png')
    : require('../../assets/FSCSLightMode.png');

  const title = 'Welcome to your new Mettle bank account';

  // Using AccessibilityInfo to announce the title for accessibility
  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(title);
  }, [title]);

  return (
    // SafeAreaView for ensuring content is not obscured by device notches or system bars
    <SafeAreaView
      style={[
        styles.safeAreaContainer,
        {backgroundColor: containerBackgroundColor},
      ]}
      accessible={true}
      accessibilityLabel="Welcome Screen"
      accessibilityRole="summary">
      {/* ScrollView for scrollable content */}
      <ScrollView
        contentContainerStyle={[
          styles.container,
          {backgroundColor: containerBackgroundColor},
        ]}
        accessible={true}
        accessibilityLabel="Welcome Screen Content"
        accessibilityRole="summary">
        <View>
          {/* Mettle Logo Image */}
          <Image
            source={MettleStarsImageSource}
            style={styles.largeImage}
            resizeMode="contain"
            accessibilityLabel="Mettle logo with stars around it"
            accessibilityRole="image"
          />
          {/* Title Text */}
          <Text
            variant="screenTitle centerAlign"
            style={{color: textColour}}
            accessible={true}
            accessibilityRole="header">
            {title}
          </Text>
          {/* Description Text */}
          <Text
            variant="bodyText centerAlign"
            style={{color: textColour}}
            accessible={true}
            accessibilityRole="text">
            It may look like nothing’s changed, but we’ve done a lot of work
            under the hood.
          </Text>
          {/* Bottom Container */}
          <View
            style={styles.bottomContainer}
            accessible={true}
            accessibilityRole="alert">
            {/* FSCS Logo Image */}
            <Image
              source={FSCSImageSource}
              style={styles.smallImage}
              accessibilityLabel="FSCS logo"
              accessibilityRole="image"
            />
            {/* FSCS Description Text */}
            <Text
              variant="bodyTextDescription centerAlign"
              style={[styles.text, {color: textColour}]}
              accessible={true}
              accessibilityRole="text">
              Your eligible deposits at Mettle are covered by the Financial
              Services Compensation Scheme.
            </Text>
          </View>
          {/* Next Button */}
          <PinkButton
            buttonText="Next"
            onPress={handleSwitchButtonPress}
            accessibilityLabel="Next Button"
            testID="nextButton"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Calculating marginTop based on screenHeight
const screenHeight = Dimensions.get('window').height;
const marginTop = screenHeight * 0.2;

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
