//UpgradeIntro.tsx

import React from 'react';
import {View, Image, ScrollView, StyleSheet, SafeAreaView} from 'react-native';

import Text from '../components/Text';
import {NavigationProps} from '../navigationTypes';
import Colours from '../components/theme/Colour';
import PinkButton from '../components/PinkButton';

type UpgradeCompleteProps = NavigationProps<'UpgradeComplete'>;

const UpgradeCompleteScreen: React.FC<UpgradeCompleteProps> = ({
  navigation,
}) => {
  const handleSwitchButtonPress = () => {
    navigation.navigate('Login'); // Navigate to the desired screen
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Image
            source={require('../assets/RocketTakeoff.png')}
            style={styles.largeImage}
            accessibilityLabel="Rocket taking off image"
          />
          <Text variant="screenTitle">Switch complete</Text>
          <Text variant="bodyText centerAlign">
            You can now log in to your new account. We’ll send you a couple of
            emails soon with your new account details and your e-money scheduled
            payments and Direct Debits.
          </Text>
          <PinkButton buttonText="Log in" onPress={handleSwitchButtonPress} />
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

export default UpgradeCompleteScreen;
