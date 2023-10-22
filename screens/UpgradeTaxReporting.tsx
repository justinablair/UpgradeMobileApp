import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TextStyle,
  AccessibilityInfo,
} from 'react-native';
import Text from '../components/Text';
import PinkButton from '../components/theme/buttons/PinkButton';

import {NavigationProps} from '../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../components/theme/Colour';
import {useUserContext} from '../components/UserContext'; // Import the user context
import CheckboxToggle from '../components/toggles/CheckboxToggle';
import InfoModal from '../components/theme/modals/InfoModal';

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
          <Text variant="bodyText" style={{color: textColour}}>
            I acknowledge, on behalf of the business, that the information I
            supply may be reported to the HMRC, and may be transferred to the
            government of another territory in accordance with{' '}
            <Pressable
              onPress={handleFACTAPress}
              accessibilityLabel="FACTA Pressable">
              <Text variant="bodyText" style={factaTextStyles} testID="facta">
                {' FACTA '}
              </Text>
            </Pressable>
            and
            <Pressable
              onPress={handleCRSPress}
              accessibilityLabel="CRS Pressable"
              testID="crs">
              <Text variant="bodyText" style={crsTextStyles}>
                {' CRS '}
              </Text>
            </Pressable>
            agreements.
          </Text>
          <View style={styles.separator} />
          <Text variant="bodyText" style={{color: textColour}}>
            I agree to inform Mettle of any change in circumstance that causes
            my information to become incorrect or incomplete and to provide an
            updated Self Certification Declaration which details my tax
            liabilities, within 30 days.
          </Text>
          <View style={styles.separator} />
          <Text variant="bodyText" style={{color: textColour}}>
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
          <Text variant="bodyText" style={{color: textColour}}>
            I acknowledge that any relevant information I supply may be reported
            to the HMRC, and may be transferred to the government of another
            territory in accordance with{' '}
            <Pressable onPress={handleFACTAPress}>
              <Text variant="bodyText" style={factaTextStyles}>
                {' FACTA '}
              </Text>
            </Pressable>
            and
            <Pressable onPress={handleCRSPress}>
              <Text variant="bodyText" style={crsTextStyles}>
                {' CRS '}
              </Text>
            </Pressable>
            agreements.
          </Text>
          <View style={styles.separator} />
          <Text variant="bodyText" style={{color: textColour}}>
            I agree to inform Mettle of any change in circumstance that causes
            my information to become incorrect or incomplete and to provide an
            updated Self Certification Declaration within 30 days.
          </Text>
          <View style={styles.separator} />
          <Text variant="bodyText" style={{color: textColour}}>
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
      ]}
      accessibilityLabel="Upgrade Tax Reporting Screen">
      <ScrollView>
        <View
          style={[
            styles.container,
            {backgroundColor: containerBackgroundColor},
          ]}>
          <Text variant="screenTitle leftAlign" style={{color: textColour}}>
            {title}
          </Text>
          <Text
            variant="bodyText leftAlign"
            style={{color: textColour}}
            accessibilityRole="header"
            accessibilityLabel="Tax Reporting Title">
            To open a Mettle bank account you need to agree to the following:{' '}
          </Text>
          {renderContent()}
          <View style={styles.spaceMedium} />
          <View style={styles.checkboxContainer}>
            <Text
              variant="bodyText"
              style={[styles.checkboxText, {color: textColour}]}>
              I agree with these statements
            </Text>
            <CheckboxToggle
              checked={isChecked}
              onToggle={handleCheckboxToggle}
              testID="checkboxToggle"
            />
          </View>
          <View style={styles.spaceMedium} />
          <PinkButton
            buttonText="Agree"
            onPress={handleSwitchButtonPress}
            disabled={!isChecked}
            testID="agreeButton"
          />
          {/* FACTA Info Modal */}
          <InfoModal
            visible={showFACTAModal}
            onPressClose={() => setShowFACTAModal(false)}
            title="FACTA"
            content="FACTA stands for the Foreign Account Tax Compliance Act. It is a United States federal law requiring all non-U.S. financial institutions to report financial accounts held by U.S. taxpayers to the U.S. Internal Revenue Service (IRS)."
            accessibilityLabel="FACTA Info Modal"
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
            accessibilityLabel="CRS Info Modal"
            titleStyle={{color: textColour}}
            bodyTextStyle={{color: textColour}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    margin: 16,
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
    flex: 1,
  },
  safeAreaContainer: {
    height: '100%',
  },
  pressableText: {
    lineHeight: 215,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: Colours.pink,
  },

  separator: {
    paddingTop: 5,
    width: 327,
    borderBottomWidth: 1,
    borderBottomColor: Colours.black30,
  },
});

export default UpgradeTaxReportingScreen;
