import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Text from '../components/Text';
import PinkButton from '../components/theme/buttons/PinkButton';

import {NavigationProps} from '../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../components/theme/Colour';
import {useUserContext} from '../components/UserContext'; // Import the user context
import CheckboxToggle from '../components/toggles/CheckboxToggle';

type UpgradeTaxReportingProps = NavigationProps<'UpgradeTaxReporting'>;

const UpgradeTaxReportingScreen: React.FC<UpgradeTaxReportingProps> = ({
  navigation,
}) => {
  const {userType} = useUserContext();
  const [isChecked, setIsChecked] = useState(false); // State to track the checkbox

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked); // Toggle the checkbox state
  };

  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeNationality'); // Navigate to the desired screen
  };

  const renderContent = () => {
    if (userType === 'limitedCompany') {
      return (
        <>
          <Text variant="bodyText" style={{color: Colours.black}}>
            I acknowledge, on behalf of the business, that the information I
            supply may be reported to the HMRC, and may be transferred to the
            government of another territory in accordance with FATCA and CRS
            agreements.{'\n\n'}I agree to inform Mettle of any change in
            circumstance that causes my information to become incorrect or
            incomplete and to provide an updated Self Certification Declaration
            within 30 days.{'\n\n'} I declare that the business is compliant
            with all relevant tax laws and all statements made in this
            declaration are, to the best of my knowledge and belief, correct and
            complete.
          </Text>
          <View style={styles.spaceLarge} />
        </>
      );
    } else if (userType === 'soleTrader') {
      return (
        <>
          <Text variant="bodyText" style={{color: Colours.black}}>
            I acknowledge that any relevant information I supply may be reported
            to the HMRC, and may be transferred to the government of another
            territory in accordance with FATCA and CRS agreements.{'\n\n'}I
            agree to inform Mettle of any change in circumstance that causes my
            information to become incorrect or incomplete and to provide an
            updated Self Certification Declaration within 30 days.{'\n\n'} I
            declare that I am compliant with all relevant tax laws and all
            statements made in this declaration are, to the best of my knowledge
            and belief, correct and complete.
          </Text>
        </>
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.container}>
          {/* SoleTraderCopy */}
          <Text variant="screenTitle leftAlign" style={{color: Colours.black}}>
            Tax reporting
          </Text>
          {renderContent()}
          <View style={styles.spaceMedium} />
          <View style={styles.checkboxContainer}>
            <Text variant="bodyText" style={styles.checkboxText}>
              I confirm that I am tax compliant
            </Text>
            <CheckboxToggle
              checked={isChecked}
              onToggle={handleCheckboxToggle}
            />
          </View>
          <View style={styles.spaceMedium} />
          <PinkButton
            buttonText="Agree"
            onPress={handleSwitchButtonPress}
            disabled={!isChecked}
          />
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 8,
  },
  checkboxText: {
    marginLeft: 8,
    color: Colours.black,
    flex: 1,
  },
  safeAreaContainer: {
    backgroundColor: Colours.white,
    height: '100%',
  },
});

export default UpgradeTaxReportingScreen;
