//UpgradeChangesWeDo.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../components/Text';
import PinkButton from '../components/PinkButton';

import {NavigationProps} from '../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../components/theme/Colour';
import ChangesYouDo from './Common/ChangesYouDo';

type UpgradeChangesYouDoProps = NavigationProps<'UpgradeChangesYouDo'>;

const UpgradeChangesYouDoScreen: React.FC<UpgradeChangesYouDoProps> = ({
  navigation,
}) => {
  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeChangesNewAccount'); // Navigate to the desired screen
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <ChangesYouDo />
        <PinkButton buttonText="Next" onPress={handleSwitchButtonPress} />
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

export default UpgradeChangesYouDoScreen;
