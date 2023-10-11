import React from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
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
    if (userType === 'limitedCompany') {
      return (
        <>
          <Text variant="bodyText" style={{color: textColour}}>
            We’re currently unable to support businesses that are liable to pay
            tax outside of the United Kingdom.
          </Text>
        </>
      );
    } else if (userType === 'soleTrader') {
      return (
        <>
          <Text variant="bodyText" style={{color: textColour}}>
            We’re currently unable to support countries outside of the United
            Kingdom where you’re liable to pay tax.{'\n'}
          </Text>
        </>
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View
        style={[styles.container, {backgroundColor: containerBackgroundColor}]}>
        <ScrollView>
          <Text variant="screenTitle leftAlign" style={{color: textColour}}>
            Sorry, we can’t open a bank account for you{' '}
          </Text>
          {renderContent()}
          <Text variant="bodyText" style={{color: textColour}}>
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
    marginBottom: 10, // Some margin to separate the button from the content
  },
  safeAreaContainer: {
    height: '100%',
  },
});

export default UpgradeIneligibleResidentScreen;
