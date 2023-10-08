//Address.tsx
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Colours from '../components/theme/Colour';
import {NavigationProps} from '../navigationTypes';
import Text from '../components/Text';
import PinkButton from '../components/theme/buttons/PinkButton';
import {useUserContext} from '../components/UserContext';

type EnterAddressScreenProps = NavigationProps<'Address'>;

const EnterAddressScreen: React.FC<EnterAddressScreenProps> = ({
  navigation,
}) => {
  const {isDarkMode} = useUserContext(); // Access isDarkMode from context
  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  const {setAddressLine1, setTown, setPostcode} = useUserContext();
  const [addressLine1Local, setAddressLine1Local] = useState(''); // Local state for addressLine1
  const [townLocal, setTownLocal] = useState(''); // Local state for town
  const [postcodeLocal, setPostcodeLocal] = useState(''); // Local state for postcode
  const [formError, setFormError] = useState('');

  useEffect(() => {
    // Trim the input values to remove leading and trailing spaces
    const trimmedAddressLine1 = addressLine1Local.trim();
    const trimmedTown = townLocal.trim();
    const trimmedPostcode = postcodeLocal.trim();

    // This effect will run after the initial render and whenever any of the local state variables change.
    // It updates the context values when the local state changes.
    setAddressLine1(trimmedAddressLine1);
    setTown(trimmedTown);
    setPostcode(trimmedPostcode);
  }, [
    addressLine1Local,
    townLocal,
    postcodeLocal,
    setAddressLine1,
    setTown,
    setPostcode,
  ]);

  const handleSwitchButtonPress = () => {
    if (!isFormValid()) {
      setFormError('Please complete all required fields.');
      return;
    }

    // No need to call setAddressLine1, setTown, and setPostcode here since they are handled by the useEffect.

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
    <View
      style={[styles.container, {backgroundColor: containerBackgroundColor}]}>
      <View style={styles.contentContainer}>
        <Text
          variant="screenTitle leftAlign"
          style={{color: isDarkMode ? Colours.white : Colours.black}}>
          Tell us your address
        </Text>

        <Text variant="bodyText" style={[styles.label, {color: textColour}]}>
          First line of address
        </Text>
        <TextInput
          style={[styles.input, {color: textColour}]}
          placeholder="Enter first line of address"
          placeholderTextColor={isDarkMode ? Colours.black30 : Colours.black60}
          value={addressLine1Local}
          onChangeText={setAddressLine1Local}
        />
        <Text variant="bodyText" style={[styles.label, {color: textColour}]}>
          Town
        </Text>
        <TextInput
          style={[styles.input, {color: textColour}]}
          placeholder="Enter town"
          placeholderTextColor={isDarkMode ? Colours.black30 : Colours.black60}
          value={townLocal}
          onChangeText={setTownLocal}
        />
        <Text variant="bodyText" style={[styles.label, {color: textColour}]}>
          Postcode
        </Text>
        <TextInput
          style={[styles.input, {color: textColour}]}
          placeholder="Enter postcode"
          placeholderTextColor={isDarkMode ? Colours.black30 : Colours.black60}
          value={postcodeLocal}
          onChangeText={setPostcodeLocal}
        />
      </View>

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
    padding: 16,
  },
  contentContainer: {
    flex: 1, // Content takes remaining space
  },
  label: {
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
