import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../components/Text';
import PinkButton from '../components/PinkButton';

import {NavigationProps} from '../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../components/theme/Colour';
import ListItem from '../components/ListItem';

type UpgradedEmailProps = NavigationProps<'UpgradedEmail'>;

const UpgradedEmailScreen: React.FC<UpgradedEmailProps> = ({navigation}) => {
  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeConsents'); // Navigate to the desired screen
  };

  return (
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
        <Text variant="bodyText bodyTextBold" style={{color: Colours.black30}}>
          You can find all this in the email
        </Text>
        <ListItem text="Set up scheduled payments" />
        <ListItem text="Set up Direct Debits" />
        <ListItem text="Update outstanding invoices" />
        <ListItem
          text="Share your new bank details"
          description="You can find these at any time in the Account tab"
        />
        <PinkButton buttonText="Got it" onPress={handleSwitchButtonPress} />
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

export default UpgradedEmailScreen;
