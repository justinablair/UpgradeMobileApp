import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TextStyle,
  AccessibilityInfo,
  Dimensions,
} from 'react-native';
import Text from '../../components/Text';
import PinkButton from '../../components/theme/buttons/PinkButton';

import {NavigationProps} from '../../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../../components/theme/Colour';
import {useUserContext} from '../../components/UserContext'; // Import the user context
import CheckboxToggle from '../../components/toggles/CheckboxToggle';
import InfoModal from '../../components/theme/modals/InfoModal';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const {height} = Dimensions.get('window');

type UpgradeTaxReportingProps = NavigationProps<'UpgradeTaxReporting'>;

const UpgradeTaxReportingScreen: React.FC<UpgradeTaxReportingProps> = ({
  navigation,
}) => {
  const {userType, isDarkMode} = useUserContext();

  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  const [isChecked, setIsChecked] = useState(false); // State to track the checkbox
  const [showFACTAModal, setShowFACTAModal] = useState(false);
  const [showCRSModal, setShowCRSModal] = useState(false);

  const handleFACTAPress = () => {
    setShowFACTAModal(true);
  };

  const handleCRSPress = () => {
    setShowCRSModal(true);
  };

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked); // Toggle the checkbox state
  };

  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeNationality'); // Navigate to the desired screen
  };

  const factaTextStyles: TextStyle = {
    ...styles.pressableText,
    color: showFACTAModal ? Colours.blue : Colours.pink,
  };

  const crsTextStyles: TextStyle = {
    ...styles.pressableText,
    color: showCRSModal ? Colours.blue : Colours.pink,
  };

  const renderContent = () => {
    if (userType === 'limitedCompany') {
      return (
        <View>
          <Text
            variant="bodyText"
            style={{color: textColour}}
            accessible={true}
            accessibilityLabel="I Acknowledge"
            accessibilityRole="text">
            I acknowledge, on behalf of the business, that the information I
            supply may be reported to the HMRC, and may be transferred to the
            government of another territory in accordance with{' '}
            <Pressable
              onPress={handleFACTAPress}
              accessibilityLabel="FACTA Pressable">
              <Text
                variant="bodyText"
                style={factaTextStyles}
                testID="facta"
                accessible={true}
                accessibilityLabel="FACTA Pressable"
                accessibilityRole="button">
                {' FACTA '}
              </Text>
            </Pressable>
            and
            <Pressable
              onPress={handleCRSPress}
              accessibilityLabel="CRS Pressable"
              testID="crs">
              <Text
                variant="bodyText"
                style={crsTextStyles}
                accessible={true}
                accessibilityLabel="CRS Pressable"
                accessibilityRole="button">
                {' CRS '}
              </Text>
            </Pressable>
            agreements.
          </Text>
          <View style={styles.separator} />
          <Text
            variant="bodyText"
            style={{color: textColour}}
            accessible={true}
            accessibilityLabel="I Agree"
            accessibilityRole="text">
            I agree to inform Mettle of any change in circumstance that causes
            my information to become incorrect or incomplete and to provide an
            updated Self Certification Declaration which details my tax
            liabilities, within 30 days.
          </Text>
          <View style={styles.separator} />
          <Text
            variant="bodyText"
            style={{color: textColour}}
            accessible={true}
            accessibilityLabel="I Declare"
            accessibilityRole="text">
            I declare that the business is compliant with all relevant tax laws
            and all statements made in this declaration are, to the best of my
            knowledge and belief, correct and complete.
          </Text>
          <View style={styles.spaceLarge} />
        </View>
      );
    } else if (userType === 'soleTrader') {
      return (
        <View>
          <Text
            variant="bodyText"
            style={{color: textColour}}
            accessible={true}
            accessibilityLabel="I Acknowledge"
            accessibilityRole="text"
            accessibilityHint="Tap the phrases 'FACTA' and 'CRS' to learn more.">
            I acknowledge that any relevant information I supply may be reported
            to the HMRC, and may be transferred to the government of another
            territory in accordance with{' '}
            <Pressable onPress={handleFACTAPress}>
              <Text
                variant="bodyText"
                style={factaTextStyles}
                accessible={true}
                accessibilityLabel="FACTA Pressable"
                accessibilityRole="button">
                {' FACTA '}
              </Text>
            </Pressable>
            and
            <Pressable onPress={handleCRSPress}>
              <Text
                variant="bodyText"
                style={crsTextStyles}
                accessible={true}
                accessibilityLabel="CRS Pressable"
                accessibilityRole="button">
                {' CRS '}
              </Text>
            </Pressable>
            agreements.
          </Text>
          <View style={styles.separator} />
          <Text
            variant="bodyText"
            style={{color: textColour}}
            accessible={true}
            accessibilityLabel="I Agree"
            accessibilityRole="text">
            I agree to inform Mettle of any change in circumstance that causes
            my information to become incorrect or incomplete and to provide an
            updated Self Certification Declaration within 30 days.
          </Text>
          <View style={styles.separator} />
          <Text
            variant="bodyText"
            style={{color: textColour}}
            accessible={true}
            accessibilityLabel="I Declare"
            accessibilityRole="text">
            I declare that I am compliant with all relevant tax laws and all
            statements made in this declaration are, to the best of my knowledge
            and belief, correct and complete.
          </Text>
        </View>
      );
    }
  };

  const title = 'Tax reporting';
  // Use AccessibilityInfo to set accessibility focus on the title
  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(title);
  }, [title]);

  return (
    <SafeAreaView
      style={[
        styles.safeAreaContainer,
        {backgroundColor: containerBackgroundColor},
      ]}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View
          style={[
            styles.container,
            {backgroundColor: containerBackgroundColor},
          ]}>
          <Text
            variant="screenTitle leftAlign"
            style={{color: textColour}}
            accessible={true}
            accessibilityLabel="Tax Reporting"
            accessibilityRole="header">
            {title}
          </Text>
          <Text
            variant="bodyText leftAlign"
            style={{color: textColour}}
            accessible={true}
            accessibilityRole="text"
            accessibilityLabel="Agree To The Following">
            To open a Mettle bank account you need to agree to the following:{' '}
          </Text>
          {renderContent()}

          <View style={styles.spaceMedium} />
          <View style={styles.bottomContainer}>
            <View style={styles.checkboxContainer}>
              <Text
                variant="bodyText"
                style={[styles.checkboxText, {color: textColour}]}
                accessible={true}
                accessibilityLabel="I Agree To All Statements"
                accessibilityRole="text">
                I agree with these statements
              </Text>
              <CheckboxToggle
                checked={isChecked}
                onToggle={handleCheckboxToggle}
                testID="checkboxToggle"
                accessible={true}
                accessibilityRole="checkbox"
                accessibilityLabel="Toggle"
              />
            </View>
          </View>
        </View>
        {/* FACTA Info Modal */}
        <InfoModal
          visible={showFACTAModal}
          onPressClose={() => setShowFACTAModal(false)}
          title="FACTA"
          content="FACTA stands for the Foreign Account Tax Compliance Act. It is a United States federal law requiring all non-U.S. financial institutions to report financial accounts held by U.S. taxpayers to the U.S. Internal Revenue Service (IRS)."
          accessible={true}
          accessibilityLabel="FACTA Definition Modal"
          contentStyle={[{backgroundColor: containerBackgroundColor}]}
          titleStyle={{color: textColour}}
          bodyTextStyle={{color: textColour}}
          testID="FactaModal"
        />

        {/* CRS Info Modal */}
        <InfoModal
          visible={showCRSModal}
          onPressClose={() => setShowCRSModal(false)}
          title="CRS"
          content="CRS stands for the Common Reporting Standard. It is a global standard for the automatic exchange of financial account information between tax authorities to help combat tax evasion."
          contentStyle={[{backgroundColor: containerBackgroundColor}]}
          accessible={true}
          accessibilityLabel="CRS Definition Modal"
          titleStyle={{color: textColour}}
          bodyTextStyle={{color: textColour}}
        />
      </ScrollView>
      <View style={styles.padding}>
        <PinkButton
          buttonText="Agree"
          onPress={handleSwitchButtonPress}
          disabled={!isChecked}
          accessibilityLabel="Agree"
          testID="agreeButton"
          accessibilityHint={
            !isChecked
              ? 'Please check the checkbox to confirm your tax reporting'
              : undefined
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    padding: wp('4%'),
    margin: wp('4%'),
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: height > 700 ? hp('17%') : hp('1%'),
  },
  spaceLarge: {
    marginBottom: hp('3%'),
  },
  spaceMedium: {
    marginBottom: height > 700 ? 0 : hp('1%'),
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: wp('1.5%'),
  },
  checkboxText: {
    flex: 1,
  },
  safeAreaContainer: {
    height: '100%',
  },
  pressableText: {
    lineHeight: height > 700 ? hp('20.7%') : hp('32.6%'),
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: Colours.pink,
  },
  separator: {
    paddingTop: hp('0.8%'),
    width: wp('90%'),
    borderBottomWidth: 1,
    borderBottomColor: Colours.black30,
  },
  padding: {
    paddingBottom: height > 700 ? 0 : hp('1%'),
  },
});

export default UpgradeTaxReportingScreen;
