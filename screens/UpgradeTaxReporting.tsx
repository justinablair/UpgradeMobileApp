import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TextStyle,
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
  const {userType} = useUserContext();
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
          <Text variant="bodyText" style={{color: Colours.black}}>
            I acknowledge, on behalf of the business, that the information I
            supply may be reported to the HMRC, and may be transferred to the
            government of another territory in accordance with{' '}
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
          <Text variant="bodyText" style={{color: Colours.black}}>
            I agree to inform Mettle of any change in circumstance that causes
            my information to become incorrect or incomplete and to provide an
            updated Self Certification Declaration which details my tax
            liabilities, within 30 days.
          </Text>
          <View style={styles.separator} />
          <Text variant="bodyText" style={{color: Colours.black}}>
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
          <Text variant="bodyText" style={{color: Colours.black}}>
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
          <Text variant="bodyText" style={{color: Colours.black}}>
            I agree to inform Mettle of any change in circumstance that causes
            my information to become incorrect or incomplete and to provide an
            updated Self Certification Declaration within 30 days.
          </Text>
          <View style={styles.separator} />
          <Text variant="bodyText" style={{color: Colours.black}}>
            I declare that I am compliant with all relevant tax laws and all
            statements made in this declaration are, to the best of my knowledge
            and belief, correct and complete.
          </Text>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Text variant="screenTitle leftAlign" style={{color: Colours.black}}>
            Tax reporting
          </Text>
          <Text variant="bodyText leftAlign" style={{color: Colours.black}}>
            To open a Mettle bank account you need to agree to the following:{' '}
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
          {/* FACTA Info Modal */}
          <InfoModal
            visible={showFACTAModal}
            onPressClose={() => setShowFACTAModal(false)}
            title="FACTA"
            content="FACTA stands for the Foreign Account Tax Compliance Act. It is a United States federal law requiring all non-U.S. financial institutions to report financial accounts held by U.S. taxpayers to the U.S. Internal Revenue Service (IRS)."
            contentStyle={{backgroundColor: Colours.white}}
            accessibilityLabel="FACTA Info Modal"
            titleStyle={{color: Colours.black}}
            bodyTextStyle={{color: Colours.black}}
          />

          {/* CRS Info Modal */}
          <InfoModal
            visible={showCRSModal}
            onPressClose={() => setShowCRSModal(false)}
            title="CRS"
            content="CRS stands for the Common Reporting Standard. It is a global standard for the automatic exchange of financial account information between tax authorities to help combat tax evasion."
            contentStyle={{backgroundColor: Colours.white}}
            accessibilityLabel="CRS Info Modal"
            titleStyle={{color: Colours.black}}
            bodyTextStyle={{color: Colours.black}}
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
    color: Colours.black,
    flex: 1,
  },
  safeAreaContainer: {
    backgroundColor: Colours.white,
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
