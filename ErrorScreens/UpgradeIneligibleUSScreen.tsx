import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  AccessibilityInfo,
} from 'react-native';
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

  // Setting container background and text colors based on the dark mode value
  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  // Function to handle the exit journey when the switch is canceled
  const handleSwitchExitJourneyPress = () => {
    navigation.navigate('UpgradeIntro');
  };

  // Setting the title for the screen
  const title = 'Sorry, we can’t open a bank account for you';

  // Use AccessibilityInfo to set accessibility focus on the title
  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(title);
  }, [title]);

  return (
    // Main container for the screen, with accessibility label and style
    <SafeAreaView
      accessible={true}
      accessibilityLabel="Upgrade Ineligible US Screen"
      style={[
        styles.safeAreaContainer,
        {backgroundColor: containerBackgroundColor},
      ]}>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          accessible={true}
          accessibilityLabel="Scrollable Content"
          accessibilityRole="scrollbar">
          <View
            style={[
              styles.content,
              {backgroundColor: containerBackgroundColor},
            ]}>
            {/* Title */}
            <Text
              variant="screenTitle leftAlign"
              style={{color: textColour}}
              accessible={true}
              accessibilityLabel="Screen Title">
              {title}
            </Text>
            {/* Body text */}
            <Text
              variant="bodyText"
              style={{color: textColour}}
              accessible={true}
              accessibilityLabel="Body Text">
              We’re currently unable to support businesses that are liable to
              pay tax in the United States.
              {'\n\n'}Please continue to use your e-money account.
              {'\n\n'}
              If you have any questions about our decision, contact us via
              in-app chat.
            </Text>
          </View>
        </ScrollView>
        <View
          style={styles.bottomButtonContainer}
          accessible={true}
          accessibilityLabel="Bottom Button Container">
          <PinkButton
            buttonText="Cancel switch"
            onPress={handleSwitchExitJourneyPress}
            accessibilityLabel="Cancel Switch Button"
            testID="cancelSwitchButton"
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
    marginBottom: 10,
  },
  safeAreaContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    padding: 16,
  },
});

export default UpgradeIneligibleUSScreen;
