// UpgradeConsents.tsx

import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Linking,
  Pressable,
  AccessibilityInfo,
  Dimensions,
} from 'react-native';
import Text from '../../components/Text';
import PinkButton from '../../components/theme/buttons/PinkButton';
import {NavigationProps} from '../../navigationTypes';
import CheckboxToggle from '../../components/toggles/CheckboxToggle';
import {useUserContext} from '../../components/UserContext';
import Colours from '../../components/theme/Colour';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const {height} = Dimensions.get('window');

type UpgradeConsentsProps = NavigationProps<'UpgradeConsents'>;

// Functional component
const UpgradeConsentsScreen: React.FC<UpgradeConsentsProps> = ({
  navigation,
}) => {
  const {isDarkMode} = useUserContext();

  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  const [checkboxesChecked, setCheckboxesChecked] = useState(
    Array(4).fill(false),
  ); // Using Array.fill for initialise
  const [descriptionsExpanded, setDescriptionsExpanded] = useState(
    Array(4).fill(true),
  ); // Using Array.fill to initialise

  // Arrays for consent titles and descriptions
  const consentTitles = [
    'Opening your new account',
    'Closing your e-money account',
    'Sharing your data',
    'Transferring your balance',
  ];

  const consentDescriptions = [
    'Once you’ve started the switch and everything is in order, we’ll open your new bank account. We’ll send you a welcome email with your new account details.',
    'As part of the switch, we’ll close your existing e-money account. We’ll email your scheduled payment and Direct Debit information, so you can set them up again in your new bank account.',
    'We’ll use the data you gave us when you opened your e-money account, and data we’ve collected since, to open your new bank account. You’ll be able to update your details in your account settings. If your business has a second owner, you’ll also need to download and share this document with them.',
    'We’ll move your total balance (including money in pots) to your new account.',
  ];

  // Function to toggle the checkbox state
  const toggleCheckbox = (index: number) => {
    const updatedCheckboxes = [...checkboxesChecked];
    updatedCheckboxes[index] = !updatedCheckboxes[index];

    // Update the descriptionsExpanded state here
    const updatedDescriptionsExpanded = [...descriptionsExpanded];
    updatedDescriptionsExpanded[index] = !updatedCheckboxes[index];
    setDescriptionsExpanded(updatedDescriptionsExpanded);

    setCheckboxesChecked(updatedCheckboxes);
  };

  // Checking if the button should be disabled
  const isButtonDisabled = !checkboxesChecked.every(checked => checked);

  // Title for the screen
  const title = 'Your consents to switch';
  // Use AccessibilityInfo to set accessibility focus on the title
  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(title);
  }, [title]);

  // Function to open the link
  const openLink = () => {
    Linking.openURL('https://www.mettle.co.uk/upgrade-data-use.pdf');
  };

  return (
    <SafeAreaView
      style={[
        styles.safeAreaContainer,
        {backgroundColor: containerBackgroundColor},
      ]}>
      <ScrollView>
        <View
          style={[
            styles.container,
            {backgroundColor: containerBackgroundColor},
          ]}>
          <View style={styles.titleContainer}>
            <Text
              variant="screenTitle leftAlign"
              style={{color: textColour}}
              accessible={true}
              accessibilityRole="header">
              {title}
            </Text>
            <Text
              variant="bodyText"
              style={{color: textColour}}
              accessible={true}
              accessibilityLabel="Agree to the following"
              accessibilityRole="text">
              To switch your e-money account to a Mettle bank account, you need
              to agree to the following:
            </Text>
          </View>
          <View style={styles.space} />
          {consentTitles.map((consentTitle, index) => (
            <TouchableOpacity
              key={index}
              style={styles.box}
              onPress={() => toggleCheckbox(index)}
              accessible={true}
              accessibilityRole="checkbox"
              accessibilityState={{checked: checkboxesChecked[index]}}
              accessibilityLabel={`Consent ${index + 1} ${consentTitle}`}>
              <View style={styles.textContainer}>
                <Text
                  variant="bodyText bodyTextBold"
                  style={{color: textColour}}
                  accessible={true}>
                  {consentTitle}
                </Text>
                {descriptionsExpanded[index] && (
                  <>
                    <Text
                      variant="bodyText leftAlign"
                      style={{color: textColour}}
                      accessible={true}
                      accessibilityLabel={`Consent description ${index + 1}: ${
                        consentDescriptions[index]
                      }`}>
                      {consentDescriptions[index]}
                    </Text>
                    {index === 2 && (
                      <Pressable
                        onPress={openLink}
                        accessible={true}
                        accessibilityRole="link">
                        <Text
                          variant="bodyText bodyTextBold"
                          style={{
                            color: Colours.pink,
                            textDecorationLine: 'underline',
                          }}
                          accessible={true}>
                          Read more about how we’ll use your data
                        </Text>
                        <Text
                          variant="bodyText"
                          style={{color: textColour}}
                          accessible={true}>
                          If your business has a second owner, you’ll also need
                          to download and share this document with them.
                        </Text>
                      </Pressable>
                    )}
                  </>
                )}
              </View>
              <CheckboxToggle
                checked={checkboxesChecked[index]}
                onToggle={() => toggleCheckbox(index)}
                accessibilityRole="button"
                accessibilityState={{checked: checkboxesChecked[index]}}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={styles.bottomPadding}>
        <PinkButton
          buttonText="Next"
          onPress={() => navigation.navigate('Marketing')}
          disabled={isButtonDisabled}
          accessibilityLabel="Next"
          testID="nextButton"
          accessibilityHint={
            !isButtonDisabled
              ? 'Please check all checkboxes to provide your consent'
              : undefined
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('4%'),
  },
  space: {
    marginVertical: hp('1%'),
  },
  box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: hp('2%'),
    marginBottom: hp('1%'),
    alignSelf: 'center',
    width: wp('85%'),
    borderBottomWidth: 1,
    borderBottomColor: Colours.black05,
  },
  textContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingLeft: wp('2.5%'),
  },
  safeAreaContainer: {
    flex: 1,
  },
  bottomPadding: {
    paddingBottom: height > 800 ? 0 : hp('2%'),
  },
});

export default UpgradeConsentsScreen;
