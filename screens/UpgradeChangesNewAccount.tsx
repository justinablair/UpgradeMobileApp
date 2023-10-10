//UpgradeChangesWeDo.tsx
import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import PinkButton from '../components/theme/buttons/PinkButton';

import {NavigationProps} from '../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../components/theme/Colour';
import WhiteButton from '../components/theme/buttons/WhiteButton';
import NewAccount from './Common/NewAccount';
import Text from '../components/Text';
import {useUserContext} from '../components/UserContext';

type UpgradeChangesNewAccountProps =
  NavigationProps<'UpgradeChangesNewAccount'>;

const UpgradeChangesNewAccountScreen: React.FC<
  UpgradeChangesNewAccountProps
> = ({navigation}) => {
  const {isDarkMode} = useUserContext(); // Access isDarkMode from context

  const backgroundColour = isDarkMode ? Colours.black : Colours.white;

  const title = isDarkMode ? Colours.white : Colours.black;

  const handleSwitchButtonPress = () => {
    navigation.navigate('StepperScreen2'); // Navigate to the desired screen
  };
  const handleSwitchExitJourneyPress = () => {
    navigation.navigate('UpgradeIntro'); // Navigate to the desired screen
  };

  return (
    <SafeAreaView
      style={[styles.safeAreaContainer, {backgroundColor: backgroundColour}]}>
      <ScrollView>
        <View style={[styles.container, {backgroundColor: backgroundColour}]}>
          <View style={styles.titleContainer}>
            <Text variant="screenTitle centreAlign" style={{color: title}}>
              How your new account will work
            </Text>
          </View>
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
    padding: 16,
  },
  safeAreaContainer: {
    height: '100%',
  },
  space: {
    marginVertical: 8,
  },
  titleContainer: {
    paddingLeft: 10, // Adjust this value as needed
  },
});

export default UpgradeChangesNewAccountScreen;
