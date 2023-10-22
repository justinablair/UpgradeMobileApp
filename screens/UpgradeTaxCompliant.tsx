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
import CheckboxToggle from '../components/toggles/CheckboxToggle'; // Import the CheckboxToggle component

import {NavigationProps} from '../navigationTypes';
import Colours from '../components/theme/Colour';

type UpgradeTaxCompliantProps = NavigationProps<'UpgradeTaxCompliant'>;

const UpgradeTaxCompliantScreen: React.FC<UpgradeTaxCompliantProps> = ({
  navigation,
}) => {
  const [isChecked, setIsChecked] = useState(false); // State to track the checkbox

  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeTaxReporting'); // Navigate to the desired screen
  };

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked); // Toggle the checkbox state
  };

  const title = 'Are you tax compliant?';
  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(title);
  }, [title]);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text
            variant="screenTitle leftAlign"
            style={{color: Colours.black}}
            accessibilityRole="header"
            accessibilityLabel="Tax Compliance Check">
            {title}
          </Text>
          <Text
            variant="bodyText leftAlign"
            style={[{color: Colours.black}, styles.space]}
            accessibilityRole="text"
            accessibilityLabel="Tax Compliance Description">
            This means that you've not previously evaded tax and are not engaged
            in any tax avoidance arrangements.
          </Text>

          <View style={styles.space} />
          <View style={styles.flex} />
          <View style={styles.checkboxContainer} accessibilityRole="checkbox">
            <Text
              variant="bodyText"
              style={styles.checkboxText}
              accessibilityLabel="Tax Compliance Confirmation Text">
              I confirm that I am tax compliant
            </Text>
            <CheckboxToggle
              checked={isChecked}
              onToggle={handleCheckboxToggle}
              accessibilityRole="button"
              accessibilityLabel="Checkbox Toggle"
              testID="checkboxToggle"
            />
          </View>
          <View style={styles.buttonContainer}>
            <PinkButton
              buttonText="Next"
              onPress={handleSwitchButtonPress}
              disabled={!isChecked}
              accessibilityLabel="Next Button"
              testID="nextButton"
            />
          </View>
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
  space: {
    marginVertical: 8,
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
  scrollContainer: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  buttonContainer: {
    flex: 0.1,
    justifyContent: 'flex-end',
  },
  safeAreaContainer: {
    backgroundColor: Colours.white,
    height: '100%',
  },
});

export default UpgradeTaxCompliantScreen;
