import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
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
  const {setBusinessName} = useUserContext();
  const [companyName, setCompanyName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const {isDarkMode} = useUserContext(); // Access isDarkMode from context

  // Define the background color and borderBottomColor based on isDarkMode
  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const separatorBorderColor = isDarkMode ? Colours.black05 : Colours.black30;

  const handleNextPress = () => {
    if (isChecked && companyName.trim() !== '') {
      setBusinessName(companyName);
      navigation.navigate('Address');
    }
  };

  const isCompanyNameEntered = companyName.trim() !== '';

  return (
    <View
      style={[styles.container, {backgroundColor: containerBackgroundColor}]}>
      <View style={styles.contentContainer}>
        <Text
          variant="screenTitle leftAlign"
          style={{
            color: isDarkMode ? Colours.white : Colours.black,
          }}>
          Tell us about your company
        </Text>
        <Text
          variant="bodyText"
          style={[
            {
              color: isDarkMode ? Colours.white : Colours.black,
            },
            styles.space,
          ]}>
          Company name
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              color: isDarkMode ? Colours.white : Colours.black,
            },
          ]}
          placeholder="Enter your company name"
          placeholderTextColor={isDarkMode ? Colours.black30 : Colours.black60}
          value={companyName}
          onChangeText={setCompanyName}
        />
        <View
          style={[styles.separator, {borderBottomColor: separatorBorderColor}]}
        />
      </View>

      {/* Consent section */}
      <View style={styles.checkboxContainer}>
        <Text
          variant="bodyText"
          style={[
            styles.checkboxText,
            {color: isDarkMode ? Colours.white : Colours.black},
          ]}>
          I confirm{' '}
          {companyName !== '' ? companyName : 'the company name I entered'} is
          correct
        </Text>
        <CheckboxToggle
          checked={isChecked}
          onToggle={() => setIsChecked(!isChecked)}
          disabled={!isCompanyNameEntered}
        />
      </View>
      <View>
        <PinkButton
          buttonText="Next"
          onPress={handleNextPress}
          disabled={!isChecked || companyName.trim() === ''}
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
    flex: 1, // Content takes remaining space
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
    paddingRight: 8, // Add padding to the right side
  },

  checkboxText: {
    marginLeft: 8,
    color: Colours.black,
    flex: 1,
    width: '80%',
  },
});

export default CompanyDetailsScreen;
