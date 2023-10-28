import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Linking,
  Pressable,
  SafeAreaView,
  AccessibilityInfo,
} from 'react-native';
import Text from '../../components/Text';
import PinkButton from '../../components/theme/buttons/PinkButton';
import InfoBox from '../../components/InfoBox';
import {PersonIcon} from '../../components/theme/icons/PersonIcon';

import {NavigationProps} from '../../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../../components/theme/Colour';
import {useUserContext} from '../../components/UserContext'; // Import the user context

type UpgradeTermsProps = NavigationProps<'UpgradeTerms'>;

const UpgradeTermsScreen: React.FC<UpgradeTermsProps> = ({navigation}) => {
  const {userType, businessName, isDarkMode} = useUserContext(); // Get the userType and businessName from the context
  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  // Open the terms link in a browser
  const openTermsLink = () => {
    Linking.openURL(
      'https://www.mettle.co.uk/docs/mettle-natwest-app-terms-and-conditions/1.1.pdf',
    );
  };

  // Open the privacy link in a browser
  const openPrivacyLink = () => {
    Linking.openURL(
      'https://www.mettle.co.uk/docs/mettle-natwest-privacy-notice/1.1.pdf',
    );
  };

  // Navigate to the desired screen
  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeConsents'); // Navigate to the desired screen
  };

  // Render the content based on the user type
  const renderContent = () => {
    if (userType === 'limitedCompany') {
      return (
        <>
          <Text
            variant="bodyText"
            style={{color: textColour}}
            accessible={true}
            accessibilityLabel="You must be a director"
            accessibilityRole="text">
            To switch from an e-money account to a Mettle bank account, you must
            be a director of {businessName}.
          </Text>
          <View style={styles.spaceLarge} />
          <InfoBox
            icon={<PersonIcon fill={textColour} />}
            title="Only 1 user has access"
            description="Just like before, as the person opening the account, you’ll be the only one with access."
            accessible={true}
            accessibilityLabel="Only 1 user has access"
          />
          <View style={styles.spaceLarge} />
          <Text
            variant="bodyText"
            style={{color: textColour}}
            accessible={true}
            accessibilityLabel="Confirmation statements"
            accessibilityRole="text">
            By tapping ‘Agree’ you’re confirming that:{'\n\n'}1. You’re
            authorised by {businessName} to switch to a Mettle bank account and
            agree to our Terms.{'\n\n'}2. {businessName} has taken all actions
            necessary, for example passing a board resolution, to approve
            switching to a Mettle bank account and agreeing to our Terms.
            {'\n\n'}Take a moment to read our Privacy Notice. It explains how we
            collect and use your personal data.
          </Text>
        </>
      );
    } else if (userType === 'soleTrader') {
      return (
        <>
          <Text
            variant="bodyText"
            style={{color: textColour}}
            accessible={true}
            accessibilityLabel="Confirmation statement"
            accessibilityRole="text">
            Take your time to read these documents. By tapping ‘Agree’, you’re
            agreeing to our Terms.{'\n\n'}Take a moment to read our Privacy
            Notice. It explains how we collect and use your personal data.
          </Text>
        </>
      );
    }
  };

  const title = 'Terms and Privacy Notice';
  // Use AccessibilityInfo to set accessibility focus on the title
  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(title);
  }, [title]);

  return (
    <SafeAreaView
      style={[
        styles.safeAreaContainer,
        {backgroundColor: containerBackgroundColor},
      ]}
      accessibilityRole="summary"
      accessibilityLabel="Upgrade Terms Screen">
      <ScrollView
        contentContainerStyle={styles.scrollViewContentContainer}
        keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Text
              variant="screenTitle leftAlign"
              style={{color: textColour}}
              accessibilityRole="header"
              accessibilityLabel="Terms and Privacy Notice">
              {title}
            </Text>
            {renderContent()}
            <View style={styles.spaceMedium} />
            <Pressable
              onPress={openTermsLink}
              accessible={true}
              accessibilityRole="button"
              accessibilityLabel="Open Terms Link">
              <Text
                variant="bodyText bodyTextBold"
                style={{color: Colours.pink}}>
                Terms
              </Text>
            </Pressable>
            <View style={styles.spaceMedium} />
            <Pressable
              onPress={openPrivacyLink}
              accessible={true}
              accessibilityRole="button"
              accessibilityLabel="Open Privacy Link">
              <Text
                variant="bodyText bodyTextBold"
                style={{color: Colours.pink}}>
                Privacy Notice
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.bottomButtonContainer}>
          <PinkButton
            buttonText="Agree"
            onPress={handleSwitchButtonPress}
            accessibilityLabel="Agree"
            testID="agreeButton"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    // backgroundColor: Colours.white,
  },
  scrollViewContentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    // backgroundColor: Colours.white,
    padding: 16,
  },
  contentContainer: {
    flex: 1, // Content takes remaining space
  },
  spaceLarge: {
    marginBottom: 25,
  },
  spaceMedium: {
    marginBottom: 15,
  },
  bottomButtonContainer: {
    alignSelf: 'center',
    marginVertical: 20, // Adjust this value as needed
  },
});

export default UpgradeTermsScreen;
