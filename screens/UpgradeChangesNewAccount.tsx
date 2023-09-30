//UpgradeChangesWeDo.tsx
import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import PinkButton from '../components/theme/buttons/PinkButton';

import {NavigationProps} from '../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../components/theme/Colour';
import WhiteButton from '../components/theme/buttons/WhiteButton';
import NewAccount from './Common/NewAccount';

type UpgradeChangesNewAccountProps =
  NavigationProps<'UpgradeChangesNewAccount'>;

const UpgradeChangesNewAccountScreen: React.FC<
  UpgradeChangesNewAccountProps
> = ({navigation}) => {
  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeTerms'); // Navigate to the desired screen
  };
  const handleSwitchExitJourneyPress = () => {
    navigation.navigate('UpgradeIntro'); // Navigate to the desired screen
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.container}>
          <NewAccount />
          <WhiteButton
            buttonText="Maybe later"
            onPress={handleSwitchExitJourneyPress}
          />
          <PinkButton
            buttonText="Get started"
            onPress={handleSwitchButtonPress}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.white,
    padding: 16,
  },
  safeAreaContainer: {
    backgroundColor: Colours.white,
    height: '100%',
  },
});

export default UpgradeChangesNewAccountScreen;
