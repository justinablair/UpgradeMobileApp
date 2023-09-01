//UpgradeChangesWeDo.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import PinkButton from '../components/PinkButton';

import {NavigationProps} from '../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../components/theme/Colour';
import ChangesWeDo from './Common/ChangesWeDo';

type UpgradeChangesWeDoProps = NavigationProps<'UpgradeChangesWeDo'>;

const UpgradeChangesWeDoScreen: React.FC<UpgradeChangesWeDoProps> = ({
  navigation,
}) => {
  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeChangesYouDo'); // Navigate to the desired screen
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <ChangesWeDo />
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

export default UpgradeChangesWeDoScreen;
