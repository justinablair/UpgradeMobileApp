//UpgradeChangesWeDo.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import PinkButton from '../components/PinkButton';

import {NavigationProps} from '../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../components/theme/Colour';
import WhiteButton from '../components/WhiteButton';
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.white,
    padding: 16,
  },
});

export default UpgradeChangesNewAccountScreen;
