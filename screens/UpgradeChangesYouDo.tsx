//UpgradeChangesWeDo.tsx
import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Text from '../components/Text';
import PinkButton from '../components/theme/buttons/PinkButton';
import {useUserContext} from '../components/UserContext';
import {NavigationProps} from '../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../components/theme/Colour';
import ChangesYouDo from './Common/ChangesYouDo';

type UpgradeChangesYouDoProps = NavigationProps<'UpgradeChangesYouDo'>;

const UpgradeChangesYouDoScreen: React.FC<UpgradeChangesYouDoProps> = ({
  navigation,
}) => {
  const {isDarkMode} = useUserContext(); // Access isDarkMode from context

  const backgroundColour = isDarkMode ? Colours.black : Colours.white;

  const title = isDarkMode ? Colours.white : Colours.black;

  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeChangesNewAccount'); // Navigate to the desired screen
  };
  return (
    <SafeAreaView
      style={[styles.safeAreaContainer, {backgroundColor: backgroundColour}]}>
      <ScrollView>
        <View style={[styles.container, {backgroundColor: backgroundColour}]}>
          <View style={styles.titleContainer}>
            <Text variant="screenTitle centreAlign" style={{color: title}}>
              What you’ll need to do after the switch
            </Text>
          </View>
          <View style={styles.space} />
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
    // backgroundColor: Colours.white,
    padding: 16,
  },
  safeAreaContainer: {
    height: '100%',
  },

  titleContainer: {
    paddingLeft: 10, // Adjust this value as needed
  },
  space: {
    marginVertical: 8,
  },
});

export default UpgradeChangesYouDoScreen;
