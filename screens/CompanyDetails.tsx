import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TextInput, AccessibilityInfo} from 'react-native';
import Text from '../components/Text';
import Colours from '../components/theme/Colour';
import {NavigationProps} from '../navigationTypes';
import {useUserContext} from '../components/UserContext';
import PinkButton from '../components/theme/buttons/PinkButton';
import CheckboxToggle from '../components/toggles/CheckboxToggle';

type CompanyDetailsScreenProps = NavigationProps<'CompanyDetails'>;

const CompanyDetailsScreen: React.FC<CompanyDetailsScreenProps> = ({
  navigation,
}) => {
  const {setBusinessName, isDarkMode} = useUserContext();
  const [companyName, setCompanyName] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const separatorBorderColor = isDarkMode ? Colours.black05 : Colours.black30;

  const handleNextPress = () => {
    if (isChecked && companyName.trim() !== '') {
      setBusinessName(companyName);
      navigation.navigate('Address');
    }
  };

  const isCompanyNameEntered = companyName.trim() !== '';

  const handleToggle = () => {
    if (isCompanyNameEntered) {
      setIsChecked(!isChecked);
    }
  };

  const title = 'Tell us about your company';

  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(title);
  }, [title]);

  return (
    <View
      style={[styles.container, {backgroundColor: containerBackgroundColor}]}
      accessible={true}
      accessibilityLabel="companyDetailsScreenContainer">
      <View style={styles.contentContainer}>
        <Text
          variant="screenTitle leftAlign"
          style={{color: isDarkMode ? Colours.white : Colours.black}}
          accessible={true}
          accessibilityLabel="companyDetailsScreenTitle">
          {title}
        </Text>
        <Text
          variant="bodyText"
          style={[
            {color: isDarkMode ? Colours.white : Colours.black},
            styles.space,
          ]}
          accessible={true}
          accessibilityLabel="companyNameLabelText">
          Company name
        </Text>
        <TextInput
          style={[
            styles.input,
            {color: isDarkMode ? Colours.white : Colours.black},
          ]}
          placeholder="Enter your company name"
          placeholderTextColor={isDarkMode ? Colours.black30 : Colours.black60}
          value={companyName}
          onChangeText={setCompanyName}
          accessible={true}
          accessibilityLabel="companyNameInput"
        />
        <View
          style={[styles.separator, {borderBottomColor: separatorBorderColor}]}
          accessible={true}
          accessibilityLabel="separator"
        />
      </View>

      <View
        style={styles.checkboxContainer}
        accessible={true}
        accessibilityLabel="consentSection">
        <Text
          variant="bodyText"
          style={[
            styles.checkboxText,
            {color: isDarkMode ? Colours.white : Colours.black},
          ]}
          accessible={true}
          accessibilityLabel="consentText">
          I confirm {companyName ? companyName : 'the company name I entered'}{' '}
          is correct
        </Text>
        <CheckboxToggle
          testID="checkboxToggle"
          checked={isChecked}
          onToggle={handleToggle}
          disabled={!isCompanyNameEntered}
          accessibilityLabel="consentCheckbox"
          accessibilityRole="checkbox"
        />
      </View>

      <View
        accessible={true}
        accessibilityLabel="nextButtonContainer"
        accessibilityRole="button">
        <PinkButton
          buttonText="Next"
          onPress={handleNextPress}
          disabled={!isChecked || !isCompanyNameEntered}
          accessibilityLabel="nextButton"
          testID="nextButton"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.white,
    padding: 16,
  },
  contentContainer: {
    flex: 1,
  },
  input: {
    width: '100%',
    marginBottom: 16,
    color: Colours.black,
  },
  separator: {
    width: 327,
    borderBottomWidth: 1,
    borderBottomColor: Colours.black30,
    marginBottom: 16,
  },
  space: {
    marginBottom: 25,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingRight: 8,
  },
  checkboxText: {
    marginLeft: 8,
    color: Colours.black,
    flex: 1,
    width: '80%',
  },
});

export default CompanyDetailsScreen;
