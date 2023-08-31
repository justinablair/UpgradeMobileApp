import React from 'react';
import {View, StyleSheet, Linking, Pressable} from 'react-native';
import Text from '../components/Text';
import PinkButton from '../components/PinkButton';
import InfoBox from '../components/InfoBox';
import {PersonIcon} from '../components/theme/PersonIcon';

import {NavigationProps} from '../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../components/theme/Colour';
import {useUserContext} from '../components/UserContext'; // Import the user context

type UpgradeTermsProps = NavigationProps<'UpgradeTerms'>;

const UpgradeTermsScreen: React.FC<UpgradeTermsProps> = ({navigation}) => {
  const {userType, businessName} = useUserContext(); // Get the userType and businessName from the context

  const openTermsLink = () => {
    Linking.openURL(
      'https://www.mettle.co.uk/docs/mettle-natwest-app-terms-and-conditions/1.1.pdf',
    );
  };

  const openPrivacyLink = () => {
    Linking.openURL(
      'https://www.mettle.co.uk/docs/mettle-natwest-privacy-notice/1.1.pdf',
    );
  };
  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeConsents'); // Navigate to the desired screen
  };

  const renderContent = () => {
    if (userType === 'limitedCompany') {
      return (
        <>
          <Text variant="bodyText" style={{color: Colours.black}}>
            To switch from an e-money account to a Mettle bank account, you must
            be a director of {businessName}.
          </Text>
          <View style={styles.spaceLarge} />
          <InfoBox
            icon={<PersonIcon stroke={Colours.black} />}
            title="Only 1 user has access"
            description="As the person opening the account, you’ll be the only one with access."
          />
          <View style={styles.spaceLarge} />
          <Text variant="bodyText" style={{color: Colours.black}}>
            By tapping ‘Agree’ you’re confirming that:{'\n\n'}1. You’re
            authorised by {businessName} to switch to a Mettle bank account and
            agree to our Terms.{'\n\n'}2. {businessName} has taken all actions
            necessary, such as passing a board resolution, to approve switching
            to a Mettle bank account and agreeing to our Terms.{'\n\n'}Take a
            moment to read our Privacy Notice. It explains how we collect and
            use your personal data.
          </Text>
        </>
      );
    } else if (userType === 'soleTrader') {
      return (
        <>
          <Text variant="bodyText" style={{color: Colours.black}}>
            Take your time to read these documents. By tapping ‘Agree’, you’re
            agreeing to our Terms.{'\n\n'}Take a moment to read our Privacy
            Notice. It explains how we collect and use your personal data.
          </Text>
        </>
      );
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text variant="screenTitle leftAlign" style={{color: Colours.black}}>
          Terms and Privacy Notice
        </Text>
        {renderContent()}
        <View style={styles.spaceMedium} />
        <Pressable onPress={openTermsLink}>
          <Text variant="bodyText bodyTextBold" style={{color: Colours.pink}}>
            Terms
          </Text>
        </Pressable>
        <View style={styles.spaceMedium} />
        <Pressable onPress={openPrivacyLink}>
          <Text variant="bodyText bodyTextBold" style={{color: Colours.pink}}>
            Privacy Notice
          </Text>
        </Pressable>
        <View style={styles.spaceMedium} />
        <PinkButton buttonText="Agree" onPress={handleSwitchButtonPress} />
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
  spaceLarge: {
    marginBottom: 25,
  },
  spaceMedium: {
    marginBottom: 15,
  },
});

export default UpgradeTermsScreen;
