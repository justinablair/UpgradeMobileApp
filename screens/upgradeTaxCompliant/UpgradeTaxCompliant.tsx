import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  AccessibilityInfo,
  Pressable,
  TextStyle,
  Dimensions,
  Platform,
  Touchable,
} from 'react-native';
import Text from '../../components/Text';
import PinkButton from '../../components/theme/buttons/PinkButton';
import CheckboxToggle from '../../components/toggles/CheckboxToggle'; // Import the CheckboxToggle component
import {NavigationProps} from '../../navigationTypes';
import Colours from '../../components/theme/Colour';
import InfoModal from '../../components/theme/modals/InfoModal';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useUserContext} from '../../components/UserContext';

const {height} = Dimensions.get('window');

type UpgradeTaxCompliantProps = NavigationProps<'UpgradeTaxCompliant'>;

const UpgradeTaxCompliantScreen: React.FC<UpgradeTaxCompliantProps> = ({
  navigation,
}) => {
  const {isDarkMode} = useUserContext();

  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

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
    <SafeAreaView
      style={[
        styles.safeAreaContainer,
        {backgroundColor: containerBackgroundColor},
      ]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Title text */}
          <Text
            variant="screenTitle leftAlign"
            style={{color: textColour}}
            accessibilityRole="header"
            accessibilityLabel="Tax Compliance Header">
            {title}
          </Text>
          {/* Title text */}
          <Text
            variant="bodyText leftAlign"
            style={[{color: textColour}, styles.space]}
            accessible={true}
            accessibilityRole="text"
            accessibilityLabel="Tax Compliance Description"
            accessibilityHint="Tap the phrases 'evaded tax' and 'tax avoidance' to learn more.">
            This means that you've not previously{' '}
            <Text
              onPress={handleEvasionPress}
              variant="bodyText leftAlign"
              style={[styles.margin, pressedEvasionTextStyles]}
              testID="evadedTax">
              evaded tax
            </Text>{' '}
            and are not engaged in any{' '}
            <Text
              onPress={handleAvoidancePress}
              variant="bodyText leftAlign"
              style={[styles.margin, pressedAvoidanceTextStyles]}
              testID="avoidedTax">
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
              accessible={true}
              accessibilityRole="text"
              accessibilityLabel="I confirm I Am Tax Compliant">
              I confirm that I am tax compliant
            </Text>
            <CheckboxToggle
              checked={isChecked}
              onToggle={handleCheckboxToggle}
              accessible={true}
              accessibilityRole="checkbox"
              accessibilityLabel="Toggle"
              testID="checkboxToggle"
            />
          </View>
        </View>
        <View>
          <View style={styles.padding}>
            <PinkButton
              buttonText="Next"
              onPress={handleSwitchButtonPress}
              disabled={!isChecked}
              accessibilityLabel="Next"
              testID="nextButton"
              accessibilityHint={
                !isChecked
                  ? 'Please check the checkbox to confirm your tax compliance'
                  : undefined
              }
            />
          </View>
          {/* Tax evasion Info Modal */}
          <InfoModal
            visible={showEvasionInfoModal}
            onPressClose={() => setShowEvasionInfoModal(false)}
            title="Tax evasion"
            content="This is a deliberate attempt not to declare and account for the taxes which are owed. It includes the hidden economy, where the presence of taxable sources of income are concealed."
            accessible={true}
            accessibilityLabel="Tax Evasion Definition Modal"
          />
          {/* Tax avoidance Info Modal */}
          <InfoModal
            visible={showAvoidanceInfoModal}
            onPressClose={() => setShowAvoidanceInfoModal(false)}
            title="Tax avoidance"
            content="This involves bending the rules of the tax system to try to gain a tax advantage that Parliament never intended. It often involves contrived, artificial transactions with no genuine purpose other than to produce a tax advantage. This is operating within the letter, but not the spirit of the law."
            accessible={true}
            accessibilityLabel="Tax Avoidance Definition Modal"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: hp('4%'),
    lineHeight: 100,
  },
  space: {
    marginVertical: hp('1%'),
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: hp('1%'),
  },
  checkboxText: {
    marginLeft: hp('1%'),
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },

  safeAreaContainer: {
    height: '100%',
  },
  linkText: {
    fontWeight: 'bold',
    ...Platform.select({
      ios: {
        lineHeight: height > 800 ? hp('10.5%') : hp('13.5%'),
      },
    }),
  },
  margin: {
    ...Platform.select({
      android: {
        marginBottom: hp('-0.5%'),
      },
    }),
  },
  padding: {
    paddingBottom: height > 800 ? 0 : hp('2%'),
  },
});

export default UpgradeTaxCompliantScreen;
