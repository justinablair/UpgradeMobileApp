//UpgradeIntro.tsx

import React, {useEffect} from 'react';
import {View, Image, ScrollView, StyleSheet, SafeAreaView} from 'react-native';

import Text from '../components/Text';
import {NavigationProps} from '../navigationTypes';
import Colours from '../components/theme/Colour';

type UpgradeStartedProps = NavigationProps<'UpgradeStarted'>;

const UpgradeStartedScreen: React.FC<UpgradeStartedProps> = ({navigation}) => {
  useEffect(() => {
    // Use setTimeout to navigate after 10 seconds (10000 milliseconds)
    const timeoutId = setTimeout(() => {
      navigation.navigate('UpgradeComplete'); // Navigate to the desired screen
    }, 10000);

    // Clear the timeout if the component unmounts before 10 seconds
    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Image
            source={require('../assets/padlock.png')}
            style={styles.largeImage}
            accessibilityLabel="Padlock image"
          />
          <Text variant="screenTitle">We’ve started your switch</Text>
          <Text variant="bodyText centerAlign">
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

export default UpgradeStartedScreen;
