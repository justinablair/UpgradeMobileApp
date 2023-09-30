import React, {useEffect, useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Text from '../components/Text';
import PinkButton from '../components/theme/buttons/PinkButton';

import {NavigationProps} from '../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../components/theme/Colour';
import ListItem from '../components/ListItem';
import Toast from '../components/Toast';
import WhiteButton from '../components/theme/buttons/WhiteButton';

type UpgradedEmailProps = NavigationProps<'UpgradedEmail'>;

const UpgradedEmailScreen: React.FC<UpgradedEmailProps> = () => {
  const [showBankAccountToast, setShowBankAccountToast] = useState(false);
  const [showOpenMailToast, setShowOpenMailToast] = useState(false);

  const bankAccountToast = () => {
    return <Toast message="This would navigate to the users bank account" />;
  };
  const openMailToast = () => {
    return <Toast message="This would navigate to the users mail app" />;
  };

  useEffect(() => {
    // Close the bank account toast after 5 seconds
    if (showBankAccountToast) {
      const bankAccountToastTimer = setTimeout(() => {
        setShowBankAccountToast(false);
      }, 2000);

      // Clear the timer when the component unmounts or if the other button is clicked
      return () => clearTimeout(bankAccountToastTimer);
    }
  }, [showBankAccountToast]);

  useEffect(() => {
    // Close the open mail toast after 5 seconds
    if (showOpenMailToast) {
      const openMailToastTimer = setTimeout(() => {
        setShowOpenMailToast(false);
      }, 2000);
      return () => clearTimeout(openMailToastTimer);
    }
  }, [showOpenMailToast]);
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Text variant="screenTitle leftAlign" style={{color: Colours.black}}>
            Look out for an email from us
          </Text>
          <Text variant="bodyText" style={{color: Colours.black}}>
            If you haven’t received it already, we’re sending you an email with
            scheduled payment and Direct Debit information from your e-money
            account.
          </Text>
          <View style={styles.spaceMedium} />
          <Text variant="bodyText bodyTextBold" style={{color: Colours.black}}>
            Important things you’ll need to do:
          </Text>
          <Text
            variant="bodyText bodyTextBold"
            style={{color: Colours.black30}}>
            You can find all this in the email
          </Text>
          <ListItem text="Set up scheduled payments" />
          <ListItem text="Set up Direct Debits" />
          <ListItem text="Update outstanding invoices" />
          <ListItem
            text="Share your new bank details"
            description="You can find these at any time in the Account tab"
          />
          <WhiteButton
            buttonText="Got it"
            onPress={() => {
              setShowBankAccountToast(true);
              setShowOpenMailToast(false); // Close the open mail toast if it's open
            }}
          />
          <PinkButton
            buttonText="Open email app"
            onPress={() => {
              setShowOpenMailToast(true);
              setShowBankAccountToast(false); // Close the bank account toast if it's open
            }}
          />
          {/* Conditionally render the toasts */}
          {showBankAccountToast && bankAccountToast()}
          {showOpenMailToast && openMailToast()}
        </View>
      </ScrollView>
    </SafeAreaView>
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
  safeAreaContainer: {
    backgroundColor: Colours.white,
    height: '100%',
  },
});

export default UpgradedEmailScreen;
