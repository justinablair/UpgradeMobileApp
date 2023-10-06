import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Text from '../components/Text';
import PinkButton from '../components/theme/buttons/PinkButton';

import {NavigationProps} from '../navigationTypes';
import Colours from '../components/theme/Colour';
import {useUserContext} from '../components/UserContext';

type UpgradeIneligibleResidentProps =
  NavigationProps<'UpgradeIneligibleResident'>;

const UpgradeIneligibleResidentScreen: React.FC<
  UpgradeIneligibleResidentProps
> = ({navigation}) => {
  const {userType} = useUserContext();

  const handleSwitchExitJourneyPress = () => {
    navigation.navigate('UpgradeIntro'); // Navigate to the desired screen
  };
  const renderContent = () => {
    if (userType === 'limitedCompany') {
      return (
        <>
          <Text variant="bodyText" style={{color: Colours.black}}>
            We’re currently unable to support businesses that are liable to pay
            tax outside of the United Kingdom.
          </Text>
        </>
      );
    } else if (userType === 'soleTrader') {
      return (
        <>
          <Text variant="bodyText" style={{color: Colours.black}}>
            We’re currently unable to support countries outside of the United
            Kingdom where you’re liable to pay tax.
          </Text>
        </>
      );
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text variant="screenTitle leftAlign" style={{color: Colours.black}}>
          Sorry, we can’t open a bank account for you{' '}
        </Text>
        {renderContent()}
        <Text variant="bodyText" style={{color: Colours.black}}>
          {'\n\n'}Please continue to use your e-money account.
          {'\n\n'}
          If you have any questions about our decision, contact us via in-app
          chat.
        </Text>
        <View style={styles.spaceMedium} />

        <View style={styles.spaceMedium} />
        <PinkButton
          buttonText="Cancel switch"
          onPress={handleSwitchExitJourneyPress}
        />
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

export default UpgradeIneligibleResidentScreen;
