//UpgradeTerms.tsx
import React from 'react';
import {View, StyleSheet, Linking, Pressable} from 'react-native';
import Text from '../components/Text';
import PinkButton from '../components/PinkButton';
import InfoBox from '../components/InfoBox';
import {PersonIcon} from '../components/theme/PersonIcon';

import {NavigationProps} from '../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../components/theme/Colour';

type UpgradeTermsProps = NavigationProps<'UpgradeTerms'>;

const UpgradeTermsScreen: React.FC<UpgradeTermsProps> = ({navigation}) => {
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
    navigation.navigate('UpgradeChangesNewAccount'); // Navigate to the desired screen
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* SoleTraderCopy */}
        <Text variant="screenTitle leftAlign" style={{color: Colours.black}}>
          Terms and Privacy Notice
        </Text>
        <Text variant="bodyText" style={{color: Colours.black}}>
          Take your time to read these documents. By tapping ‘Agree’, you’re
          agreeing to our Terms.{'\n\n'}Take a moment to read our Privacy
          Notice. It explains how we collect and use your personal data.
        </Text>
        {/* LimitedCompanyCopy */}
        <Text variant="bodyText" style={{color: Colours.black}}>
          To switch from an e-money account to a Mettle bank account, you must
          be a director of “Company name”.
        </Text>
        <InfoBox
          icon={<PersonIcon stroke={Colours.black} />}
          title="Only 1 user has access"
          description="As the person opening the account, you’ll be the only one with access."
        />
        <Text variant="bodyText" style={{color: Colours.black}}>
          By tapping ‘Agree’ you’re confirming that:{'\n\n'}1. You’re authorised
          by “Company name” to switch to a Mettle bank account and agree to our
          Terms.{'\n\n'}2. “Company name” has taken all actions necessary, such
          as passing a board resolution, to approve switching to a Mettle bank
          account and agreeing to our Terms.{'\n\n'}Take a moment to read our
          Privacy Notice. It explains how we collect and use your personal data.
        </Text>
        <Pressable onPress={openTermsLink}>
          <Text variant="bodyText bodyTextBold" style={{color: Colours.pink}}>
            Terms
          </Text>
        </Pressable>
        <Pressable onPress={openPrivacyLink}>
          <Text variant="bodyText bodyTextBold" style={{color: Colours.pink}}>
            Privacy Notice
          </Text>
        </Pressable>

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
});

export default UpgradeTermsScreen;
