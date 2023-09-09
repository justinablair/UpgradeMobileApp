//Address.tsx
import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Colours from '../components/theme/Colour';
import {NavigationProps} from '../navigationTypes';
import Text from '../components/Text';
import PinkButton from '../components/PinkButton';
import {useUserContext} from '../components/UserContext';

type EnterAddressScreenProps = NavigationProps<'Address'>;

const EnterAddressScreen: React.FC<EnterAddressScreenProps> = ({
  navigation,
}) => {
  const {setAddressLine1, setTown, setPostcode} = useUserContext();

  const [addressLine1Local, setAddressLine1Local] = useState(''); // Local state for addressLine1
  const [townLocal, setTownLocal] = useState(''); // Local state for town
  const [postcodeLocal, setPostcodeLocal] = useState(''); // Local state for postcode
  const [formError, setFormError] = useState('');

  // Trim the input values to remove leading and trailing spaces
  const trimmedAddressLine1 = addressLine1Local.trim();
  const trimmedTown = townLocal.trim();
  const trimmedPostcode = postcodeLocal.trim();

  setAddressLine1(trimmedAddressLine1); // Set trimmed value in UserContext
  setTown(trimmedTown); // Set trimmed value in UserContext
  setPostcode(trimmedPostcode); // Set trimmed value in UserContext

  const handleSwitchButtonPress = () => {
    if (!isFormValid()) {
      setFormError('Please complete all required fields.');
      return;
    }

    setAddressLine1(addressLine1Local); // Set value in UserContext
    setTown(townLocal); // Set value in UserContext
    setPostcode(postcodeLocal); // Set value in UserContext

    // Navigate to the desired screen
    navigation.navigate('UpgradeIntro');
  };

  const ukPostcodeRegex = /^[A-Za-z]{1,2}\d{1,2} ?\d[A-Za-z]{2}$/;
  const isFormValid = () => {
    if (!addressLine1Local || !townLocal || !postcodeLocal) {
      return false; // Return false if any required field is empty
    }

    if (!ukPostcodeRegex.test(postcodeLocal)) {
      setFormError('Please provide a valid UK postcode.');
      return false;
    }

    setFormError('');
    return true;
  };

  return (
    <View style={styles.container}>
      <Text variant="screenTitle leftAlign" style={{color: Colours.black}}>
        Tell us your address
      </Text>

      <Text variant="bodyText" style={styles.label}>
        First line of address
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter first line of address"
        value={addressLine1Local}
        onChangeText={setAddressLine1Local}
      />
      <Text variant="bodyText" style={styles.label}>
        Town
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter town"
        value={townLocal}
        onChangeText={setTownLocal}
      />
      <Text variant="bodyText" style={styles.label}>
        Postcode
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter postcode"
        value={postcodeLocal}
        onChangeText={setPostcodeLocal}
      />
      {formError ? (
        <Text variant="bodyText leftAlign" style={styles.errorText}>
          {formError}
        </Text>
      ) : null}
      <PinkButton buttonText="Confirm" onPress={handleSwitchButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.white,
    padding: 16,
  },
  label: {
    color: 'black',
    marginBottom: 4,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: Colours.black30,
    marginBottom: 16,
    paddingVertical: 8,
  },
  errorText: {
    color: Colours.red,
    marginBottom: 8,
  },
});

export default EnterAddressScreen;
