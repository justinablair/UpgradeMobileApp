import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  AccessibilityInfo,
  Pressable,
  TextStyle,
} from 'react-native';
import Text from '../components/Text';
import PinkButton from '../components/theme/buttons/PinkButton';
import CheckboxToggle from '../components/toggles/CheckboxToggle'; // Import the CheckboxToggle component

import {NavigationProps} from '../navigationTypes';
import Colours from '../components/theme/Colour';
import InfoModal from '../components/theme/modals/InfoModal';

type UpgradeTaxCompliantProps = NavigationProps<'UpgradeTaxCompliant'>;

const UpgradeTaxCompliantScreen: React.FC<UpgradeTaxCompliantProps> = ({
  navigation,
}) => {
  const [isChecked, setIsChecked] = useState(false); // State to track the checkbox

  const [showEvasionInfoModal, setShowEvasionInfoModal] = useState(false);

  const [showAvoidanceInfoModal, setShowAvoidanceInfoModal] = useState(false);

  const [taxEvasionPressed, setTaxEvasionPressed] = useState(false);

  const [taxAvoidancePressed, setTaxAvoidancePressed] = useState(false);

  // const [taxAvoidancePressed, setTaxAvoidancePressed] = useState(false);

  // Navigate to the desired screen
  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeTaxReporting');
  };

  // Function to toggle the checkbox state
  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleEvasionPress = () => {
    setShowEvasionInfoModal(true);
    setTaxEvasionPressed(true);
  };

  const handleAvoidancePress = () => {
    setShowAvoidanceInfoModal(true);
    setTaxAvoidancePressed(true);
  };

  const pressedEvasionTextStyles: TextStyle = {
    ...styles.linkText,
    color: taxEvasionPressed ? Colours.blue : Colours.pink,
    textDecorationLine: 'underline',
  };

  const pressedAvoidanceTextStyles: TextStyle = {
    ...styles.linkText,
    color: taxAvoidancePressed ? Colours.blue : Colours.pink,
    textDecorationLine: 'underline',
  };

  const title = 'Are you tax compliant?';
  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(title);
  }, [title]);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Title text */}
          <Text
            variant="screenTitle leftAlign"
            style={{color: Colours.black}}
            accessibilityRole="header"
            accessibilityLabel="Tax Compliance Check">
            {title}
          </Text>
          {/* Title text */}
          <Text
            variant="bodyText leftAlign"
            style={[{color: Colours.black}, styles.space]}
            accessibilityRole="text"
            accessibilityLabel="Tax Compliance Description">
            This means that you've not previously{' '}
            <Text
              variant="bodyText leftAlign"
              onPress={handleEvasionPress}
              style={pressedEvasionTextStyles}
              accessibilityLabel="Evaded Tax Pressable">
              evaded tax
            </Text>{' '}
            and are not engaged in any{' '}
            <Text
              variant="bodyText leftAlign"
              onPress={handleAvoidancePress}
              style={pressedAvoidanceTextStyles}
              accessibilityLabel="Avoided Tax Pressable">
              tax avoidance
            </Text>{' '}
            arrangements.
          </Text>

          {/* </Text> */}
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
            {/* Tax evasion Info Modal */}
            <InfoModal
              visible={showEvasionInfoModal}
              onPressClose={() => setShowEvasionInfoModal(false)}
              title="Tax evasion"
              content="This is a deliberate attempt not to declare and account for the taxes which are owed. It includes the hidden economy, where the presence of taxable sources of income are concealed."
              accessibilityLabel="tax evasion Info Modal"
            />
            {/* Tax avoidance Info Modal */}
            <InfoModal
              visible={showAvoidanceInfoModal}
              onPressClose={() => setShowAvoidanceInfoModal(false)}
              title="Tax avoidance"
              content="This involves bending the rules of the tax system to try to gain a tax advantage that Parliament never intended. It often involves contrived, artificial transactions with no genuine purpose other than to produce a tax advantage. This is operating within the letter, but not the spirit of the law."
              accessibilityLabel="tax avoidance Info Modal"
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
  linkText: {
    lineHeight: 90,
    fontWeight: 'bold',
  },
});

export default UpgradeTaxCompliantScreen;
