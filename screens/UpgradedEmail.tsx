//UpgradeEmail.tsx

import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  AccessibilityInfo,
} from 'react-native';
import Text from '../components/Text';
import PinkButton from '../components/theme/buttons/PinkButton';
import {NavigationProps} from '../navigationTypes';
import {useUserContext} from '../components/UserContext';
import Colours from '../components/theme/Colour';
import ListItem from '../components/ListItem';
import Toast from '../components/Toast';
import WhiteButton from '../components/theme/buttons/WhiteButton';

type UpgradedEmailProps = NavigationProps<'UpgradedEmail'>;

const UpgradedEmailScreen: React.FC<UpgradedEmailProps> = () => {
  const {isDarkMode} = useUserContext();

  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  const [showBankAccountToast, setShowBankAccountToast] = useState(false);
  const [showOpenMailToast, setShowOpenMailToast] = useState(false);

  const bankAccountToast = () => {
    return <Toast message="Would navigate to the bank account" />;
  };

  const openMailToast = () => {
    return <Toast message="Would navigate to the mail app" />;
  };

  useEffect(() => {
    if (showBankAccountToast) {
      const bankAccountToastTimer = setTimeout(() => {
        setShowBankAccountToast(false);
      }, 2000);
      return () => clearTimeout(bankAccountToastTimer);
    }
  }, [showBankAccountToast]);

  useEffect(() => {
    if (showOpenMailToast) {
      const openMailToastTimer = setTimeout(() => {
        setShowOpenMailToast(false);
      }, 2000);
      return () => clearTimeout(openMailToastTimer);
    }
  }, [showOpenMailToast]);

  const title = 'Look out for an email from us';

  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(title);
  }, [title]);

  return (
    <SafeAreaView
      style={[
        styles.safeAreaContainer,
        {backgroundColor: containerBackgroundColor},
      ]}
      accessible={true}
      accessibilityLabel="Email screen"
      accessibilityRole="summary">
      <ScrollView>
        <View
          style={[
            styles.safeAreaContainer,
            {backgroundColor: containerBackgroundColor},
          ]}>
          {/* Title section */}
          <Text
            variant="screenTitle leftAlign"
            style={{color: textColour}}
            accessible={true}
            accessibilityRole="header"
            accessibilityLabel="Email title">
            {title}
          </Text>

          {/* Body text */}
          <Text
            variant="bodyText"
            style={{color: textColour}}
            accessible={true}
            accessibilityRole="text"
            accessibilityLabel="Email body">
            If you haven’t received it already, we’re sending you an email with
            scheduled payment and Direct Debit information from your old
            account.{'\n\n'} You can also message us via in-app chat, we’re
            happy to help!
          </Text>

          {/* Important instructions */}
          <View style={styles.spaceMedium} />
          <Text
            variant="bodyText bodyTextBold"
            style={{color: textColour}}
            accessible={true}
            accessibilityLabel="Important instructions">
            Important things you’ll need to do:
          </Text>
          <Text
            variant="bodyText bodyTextBold"
            style={{color: Colours.black60}}
            accessible={true}
            accessibilityLabel="Email instructions">
            You can find all this in the email
          </Text>

          {/* List items */}
          <ListItem
            text="Set up scheduled payments"
            textStyle={{color: textColour}}
            accessible={true}
            accessibilityRole="text"
            accessibilityLabel="Scheduled payments"
          />
          <ListItem
            text="Set up Direct Debits"
            textStyle={{color: textColour}}
            accessible={true}
            accessibilityRole="text"
            accessibilityLabel="Direct Debits"
          />
          <ListItem
            text="Re-create unpaid invoices"
            textStyle={{color: textColour}}
            accessible={true}
            accessibilityRole="text"
            accessibilityLabel="Unpaid invoices"
          />
          <ListItem
            textStyle={{color: textColour}}
            text="Share your new bank details"
            description="You can find these at any time in the Account tab"
            accessible={true}
            accessibilityRole="text"
            accessibilityLabel="Share bank details"
          />
          {/* Conditionally render the toasts */}
          {showBankAccountToast && bankAccountToast()}
          {showOpenMailToast && openMailToast()}

          {/* Buttons */}
        </View>
      </ScrollView>
      <WhiteButton
        buttonText="Got it"
        onPress={() => {
          setShowBankAccountToast(true);
          setShowOpenMailToast(false);
        }}
        accessibilityLabel="Got it button"
      />
      <PinkButton
        buttonText="Open email app"
        onPress={() => {
          setShowOpenMailToast(true);
          setShowBankAccountToast(false);
        }}
        accessibilityLabel="Open email app button"
      />
      <View style={styles.spaceMedium}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  spaceLarge: {
    marginBottom: 25,
  },
  spaceMedium: {
    marginBottom: 15,
  },
  safeAreaContainer: {
    padding: 16,
    height: '100%',
  },
});

export default UpgradedEmailScreen;
