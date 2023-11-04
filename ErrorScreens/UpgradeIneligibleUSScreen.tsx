//UpgradeIneligibleUSScreen.tsx

import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  AccessibilityInfo,
  Dimensions,
} from 'react-native';
import Text from '../components/Text';
import PinkButton from '../components/theme/buttons/PinkButton';
import {NavigationProps} from '../navigationTypes';
import Colours from '../components/theme/Colour';
import {useUserContext} from '../components/UserContext';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {height} = Dimensions.get('window');

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
            {/* Title */}
            <Text
              variant="screenTitle leftAlign"
              style={{color: textColour}}
              accessible={true}
              accessibilityRole="header"
              accessibilityLabel={title}>
              {title}
            </Text>
            {/* Body text */}
            <Text
              variant="bodyText"
              style={{color: textColour}}
              accessible={true}
              accessibilityLabel="Upgrade Ineligible Content">
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
            accessibilityLabel="Cancel Switch"
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
    marginBottom: height > 800 ? 0 : hp('2%'),
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
    padding: wp('4%'),
  },
});

export default UpgradeIneligibleUSScreen;
