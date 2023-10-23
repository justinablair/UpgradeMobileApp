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
import Colours from '../components/theme/Colour';
import {useUserContext} from '../components/UserContext';
import {NavigationProps} from '../navigationTypes';

type UpgradeIneligibleResidentProps =
  NavigationProps<'UpgradeIneligibleResident'>;

const UpgradeIneligibleResidentScreen: React.FC<
  UpgradeIneligibleResidentProps
> = ({navigation}) => {
  const {userType, isDarkMode} = useUserContext();

  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  const handleSwitchExitJourneyPress = () => {
    navigation.navigate('UpgradeIntro');
  };

  const renderContent = () => {
    let contentText = '';
    if (userType === 'limitedCompany') {
      contentText =
        'We’re currently unable to support businesses that are liable to pay tax outside of the United Kingdom.';
    } else if (userType === 'soleTrader') {
      contentText =
        'We’re currently unable to support countries outside of the United Kingdom where you’re liable to pay tax.\n';
    }
    return (
      <Text
        variant="bodyText"
        style={{color: textColour}}
        accessibilityLabel="upgradeIneligibleContent">
        {contentText}
      </Text>
    );
  };

  const title = 'Sorry, we can’t open a bank account for you';

  // Use AccessibilityInfo to set accessibility focus on the title
  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(title);
  }, [title]);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View
        style={[styles.container, {backgroundColor: containerBackgroundColor}]}
        accessibilityRole="header">
        <ScrollView>
          <Text
            variant="screenTitle leftAlign"
            style={{color: textColour}}
            accessibilityRole="header"
            accessibilityLabel="upgradeIneligibleTitle">
            {title}
          </Text>
          {renderContent()}
          <Text
            variant="bodyText"
            style={{color: textColour}}
            accessibilityLabel="upgrade-ineligible-body">
            Please continue to use your e-money account.
            {'\n\n'}
            If you have any questions about our decision, contact us via in-app
            chat.
          </Text>
        </ScrollView>
        <View style={styles.bottomButtonContainer}>
          <PinkButton
            buttonText="Cancel switch"
            onPress={handleSwitchExitJourneyPress}
            accessibilityLabel="cancelSwitchButton"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  bottomButtonContainer: {
    marginBottom: 20,
  },
  safeAreaContainer: {
    flex: 1,
  },
});

export default UpgradeIneligibleResidentScreen;
