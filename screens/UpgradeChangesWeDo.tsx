//UpgradeChangesWeDo.tsx
import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import PinkButton from '../components/theme/buttons/PinkButton';

import {NavigationProps} from '../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../components/theme/Colour';
import ChangesWeDo from './Common/ChangesWeDo';
import Text from '../components/Text';
import {useUserContext} from '../components/UserContext';

type UpgradeChangesWeDoProps = NavigationProps<'UpgradeChangesWeDo'>;

const UpgradeChangesWeDoScreen: React.FC<UpgradeChangesWeDoProps> = ({
  navigation,
}) => {
  const {isDarkMode} = useUserContext(); // Access isDarkMode from context

  const backgroundColour = isDarkMode ? Colours.black : Colours.white;

  const title = isDarkMode ? Colours.white : Colours.black;

  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeChangesYouDo'); // Navigate to the desired screen
  };
  return (
    <SafeAreaView
      style={[styles.safeAreaContainer, {backgroundColor: backgroundColour}]}>
      <ScrollView>
        <View style={[styles.container, {backgroundColor: backgroundColour}]}>
          <View style={styles.titleContainer}>
            <Text variant="screenTitle centreAlign" style={{color: title}}>
              What we’ll do during the switch
            </Text>
            <View style={styles.space} />
          </View>
          <ChangesWeDo />
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
  space: {
    marginVertical: 8,
  },
  titleContainer: {
    paddingLeft: 10, // Adjust this value as needed
  },
});

export default UpgradeChangesWeDoScreen;
