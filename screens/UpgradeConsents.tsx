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
} from 'react-native';
import Text from '../components/Text';
import Colours from '../components/theme/Colour';
import PinkButton from '../components/theme/buttons/PinkButton';
import {NavigationProps} from '../navigationTypes';
import CheckboxToggle from '../components/toggles/CheckboxToggle';
import {useUserContext} from '../components/UserContext';

type UpgradeConsentsProps = NavigationProps<'UpgradeConsents'>;

const UpgradeConsentsScreen: React.FC<UpgradeConsentsProps> = ({
  navigation,
}) => {
  const {isDarkMode} = useUserContext();

  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  const [checkboxesChecked, setCheckboxesChecked] = useState([
    false,
    false,
    false,
    false,
  ]); // Initially unchecked
  const [descriptionsExpanded, setDescriptionsExpanded] = useState([
    true,
    true,
    true,
    true,
  ]); // Initially expanded

  const consentTitles = [
    'Opening your new account',
    'Closing your e-money account',
    'Sharing your data',
    'Transferring your balance',
  ];

  const consentDescriptions = [
    'Once you’ve started the switch and everything is in order, we’ll open your new bank account. We’ll send you a welcome email with your new account details.',
    'As part of the switch, we’ll close your existing e-money account. We’ll email your scheduled payment and Direct Debit information, so you can set them up again in your new bank account.',
    'We’ll use the data you gave us when you opened your e-money account, and data we’ve collected since, to open your new bank account. You’ll be able to update your details in your account settings. If your business has a second owner, you’ll also need to download and share this document with them.  ',
    'We’ll move your total balance (including money in pots) to your new account.',
  ];

  const toggleCheckbox = (index: number) => {
    const updatedCheckboxes = [...checkboxesChecked];
    updatedCheckboxes[index] = !updatedCheckboxes[index];

    // Update the descriptionsExpanded state here
    const updatedDescriptionsExpanded = [...descriptionsExpanded];
    updatedDescriptionsExpanded[index] = !updatedCheckboxes[index];
    setDescriptionsExpanded(updatedDescriptionsExpanded);

    setCheckboxesChecked(updatedCheckboxes);
  };
  const isButtonDisabled = !checkboxesChecked.every(checked => checked);

  const title = 'Your consents to switch';
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
      <ScrollView>
        <View
          style={[
            styles.container,
            {backgroundColor: containerBackgroundColor},
          ]}>
          <View style={styles.titleContainer}>
            <Text variant="screenTitle leftAlign" style={{color: textColour}}>
              {title}
            </Text>
            <Text variant="bodyText" style={{color: textColour}}>
              To switch your e-money account to a Mettle bank account, you need
              to agree to the following:
            </Text>
          </View>
          <View style={styles.space} />
          {consentTitles.map((title, index) => (
            <TouchableOpacity
              key={index}
              style={styles.box}
              onPress={() => toggleCheckbox(index)}>
              <View style={styles.textContainer}>
                <Text
                  variant="bodyText bodyTextBold"
                  style={{color: textColour}}>
                  {title}
                </Text>
                {descriptionsExpanded[index] ? (
                  <>
                    <Text
                      variant="bodyText leftAlign"
                      style={{color: textColour}}>
                      {consentDescriptions[index]}
                    </Text>
                    {index === 2 && (
                      <Pressable
                        onPress={() =>
                          Linking.openURL(
                            'https://www.mettle.co.uk/upgrade-data-use.pdf',
                          )
                        }>
                        <Text
                          variant="bodyText bodyTextBold"
                          style={{
                            color: Colours.pink,
                            textDecorationLine: 'underline',
                          }}>
                          Read more about how we’ll use your data
                        </Text>
                        <Text variant="bodyText" style={{color: textColour}}>
                          If your business has a second owner, you’ll also need
                          to download and share this document with them.
                        </Text>
                      </Pressable>
                    )}
                  </>
                ) : null}
              </View>
              <CheckboxToggle
                checked={checkboxesChecked[index]}
                onToggle={() => toggleCheckbox(index)}
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
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  space: {
    marginVertical: 8,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 16,
    marginBottom: 8,
    alignSelf: 'center',
    width: 327,
    borderBottomWidth: 1,
    borderBottomColor: Colours.black05,
  },
  textContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingLeft: 10,
  },
  safeAreaContainer: {
    flex: 1,
  },
  bottomPadding: {
    paddingBottom: 16,
  },
});

export default UpgradeConsentsScreen;
