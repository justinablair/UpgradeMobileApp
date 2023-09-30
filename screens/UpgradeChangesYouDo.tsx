//UpgradeChangesWeDo.tsx
import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Text from '../components/Text';
import PinkButton from '../components/theme/buttons/PinkButton';

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
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.container}>
          <ChangesYouDo />
          <PinkButton buttonText="Next" onPress={handleSwitchButtonPress} />
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

export default UpgradeChangesYouDoScreen;
