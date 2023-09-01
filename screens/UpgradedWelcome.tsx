//UpgradeIntro.tsx

import React from 'react';
import {View, Image, ScrollView, StyleSheet, SafeAreaView} from 'react-native';

import Text from '../components/Text';
import {NavigationProps} from '../navigationTypes';
import Colours from '../components/theme/Colour';
import PinkButton from '../components/PinkButton';

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
            accessibilityLabel="Mettle logo with stars around it"
          />
          <Text variant="screenTitle">
            Welcome to your new Mettle bank account
          </Text>
          <Text variant="bodyText centerAlign">
            It may look like nothing’s changed, but we’ve done a lot of work
            under the hood.
          </Text>
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

export default UpgradedWelcomeScreen;
