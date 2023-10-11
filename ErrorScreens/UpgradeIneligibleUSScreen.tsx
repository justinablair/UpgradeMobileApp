import React from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import Text from '../components/Text';
import PinkButton from '../components/theme/buttons/PinkButton';
import {NavigationProps} from '../navigationTypes';
import Colours from '../components/theme/Colour';
import {useUserContext} from '../components/UserContext';

type UpgradeIneligibleResidentProps = NavigationProps<'UpgradeIneligibleUS'>;

const UpgradeIneligibleUSScreen: React.FC<UpgradeIneligibleResidentProps> = ({
  navigation,
}) => {
  const {isDarkMode} = useUserContext();

  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  const handleSwitchExitJourneyPress = () => {
    navigation.navigate('UpgradeIntro'); // Navigate to the desired screen
  };

  return (
    <SafeAreaView
      style={[
        styles.safeAreaContainer,
        {backgroundColor: containerBackgroundColor},
      ]}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View
            style={[
              styles.content,
              {backgroundColor: containerBackgroundColor},
            ]}>
            <Text variant="screenTitle leftAlign" style={{color: textColour}}>
              Sorry, we can’t open a bank account for you{' '}
            </Text>
            <Text variant="bodyText" style={{color: textColour}}>
              We’re currently unable to support businesses that are liable to
              pay tax in the United States.
              {'\n\n'}Please continue to use your e-money account.
              {'\n\n'}
              If you have any questions about our decision, contact us via
              in-app chat.
            </Text>
          </View>
        </ScrollView>
        <View style={styles.bottomButtonContainer}>
          <PinkButton
            buttonText="Cancel switch"
            onPress={handleSwitchExitJourneyPress}
            style={styles.pinkButton} // Add a new style for the pink button
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  bottomButtonContainer: {
    marginBottom: 10, // Some margin to separate the button from the content
  },
  safeAreaContainer: {
    height: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1, // Content takes remaining space
    padding: 16,
  },
  pinkButton: {
    alignSelf: 'center',
    marginVertical: 20, // Adjust this value as needed
  },
});

export default UpgradeIneligibleUSScreen;
