//UpgradeIntro.tsx

import React, {useEffect} from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  AccessibilityInfo,
} from 'react-native';

import Text from '../components/Text';
import {NavigationProps} from '../navigationTypes';
import Colours from '../components/theme/Colour';
import {useUserContext} from '../components/UserContext';

type UpgradeStartedProps = NavigationProps<'UpgradeStarted'>;

const UpgradeStartedScreen: React.FC<UpgradeStartedProps> = ({navigation}) => {
  const {isDarkMode} = useUserContext();

  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  useEffect(() => {
    // Use setTimeout to navigate after 10 seconds (10000 milliseconds)
    const timeoutId = setTimeout(() => {
      navigation.navigate('UpgradeComplete'); // Navigate to the desired screen
    }, 10000);

    // Clear the timeout if the component unmounts before 10 seconds
    return () => clearTimeout(timeoutId);
  }, [navigation]);

  const title = 'We’ve started your switch';
  // Use AccessibilityInfo to set accessibility focus on the title
  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(title);
  }, [title]);

  return (
    <SafeAreaView
      style={[
        styles.safeAreaContainer,
        {backgroundColor: containerBackgroundColor},
      ]}>
      <ScrollView
        style={[styles.container, {backgroundColor: containerBackgroundColor}]}>
        <View>
          <View style={styles.largeImage}>
            <Image
              source={require('../assets/Padlock.png')}
              style={styles.alignCentre}
              accessibilityLabel="Image of a padlock"
            />
          </View>
          <Text variant="screenTitle" style={{color: textColour}}>
            {title}
          </Text>
          <Text variant="bodyText centerAlign" style={{color: textColour}}>
            This usually takes less than a couple of minutes, but it can
            sometimes take up to 2 hours.{'\n\n'}If you need anything during
            this time, message us via in-app chat.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    marginTop: 50,
    height: '100%',
  },
  safeAreaContainer: {
    height: '100%',
  },
  alignCentre: {
    alignSelf: 'center',
  },

  largeImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginHorizontal: 50,
  },

  centeredText: {
    textAlign: 'center',
  },
});

export default UpgradeStartedScreen;
