import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Text from '../components/Text';
import Colours from '../components/theme/Colour';
import {NavigationProps} from '../navigationTypes';
import {useUserContext} from '../components/UserContext';
import PinkButton from '../components/PinkButton';
import {UncheckedIcon} from '../components/theme/UncheckedIcon';
import {CheckmarkIcon} from '../components/theme/checkbox';

type CompanyDetailsScreenProps = NavigationProps<'CompanyDetails'>;

const CompanyDetailsScreen: React.FC<CompanyDetailsScreenProps> = ({
  navigation,
}) => {
  const {setBusinessName} = useUserContext();
  const [companyName, setCompanyName] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleNextPress = () => {
    if (isChecked && companyName.trim() !== '') {
      setBusinessName(companyName);
      navigation.navigate('UpgradeIntro');
    }
  };

  const isCompanyNameEntered = companyName.trim() !== '';

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text variant="screenTitle leftAlign" style={{color: Colours.black}}>
          Tell us about your company
        </Text>
        <Text variant="bodyText" style={[{color: Colours.black}, styles.space]}>
          Company name
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your company name"
          placeholderTextColor={Colours.black60}
          value={companyName}
          onChangeText={setCompanyName}
        />
        <View style={styles.separator} />
      </View>

      {/* Consent section */}

      <View style={styles.checkboxContainer}>
        <Text variant="bodyText" style={styles.checkboxText}>
          I confirm{' '}
          {companyName !== '' ? companyName : 'the company name I entered'} is
          correct
        </Text>
        <TouchableOpacity
          onPress={() => setIsChecked(!isChecked)}
          disabled={!isCompanyNameEntered} // Disable if company name is not entered
        >
          {isChecked ? (
            <CheckmarkIcon />
          ) : (
            <UncheckedIcon
              stroke={isCompanyNameEntered ? Colours.black : Colours.black30}
            />
          )}
        </TouchableOpacity>
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
    justifyContent: 'flex-end', // Aligns content to the right
    width: '95%',

    marginBottom: 16,
  },
  checkboxText: {
    marginRight: 8,
    color: Colours.black,
    flex: 1,
  },
});

export default CompanyDetailsScreen;
