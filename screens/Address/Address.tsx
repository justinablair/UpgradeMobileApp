//Address.tsx

import React, {useEffect, useState} from 'react';
import {View, StyleSheet, TextInput, AccessibilityInfo} from 'react-native';
import {useUserContext} from '../../components/UserContext';
import Text from '../../components/Text';
import PinkButton from '../../components/theme/buttons/PinkButton';
import Colours from '../../components/theme/Colour';
import {NavigationProps} from '../../navigationTypes';

type EnterAddressScreenProps = NavigationProps<'Address'>;

const EnterAddressScreen: React.FC<EnterAddressScreenProps> = ({
  navigation,
}) => {
  const {isDarkMode} = useUserContext();
  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  const {setAddressLine1, setTown, setPostcode} = useUserContext();
  const [addressLine1Local, setAddressLine1Local] = useState('');
  const [townLocal, setTownLocal] = useState('');
  const [postcodeLocal, setPostcodeLocal] = useState('');
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    const trimmedAddressLine1 = addressLine1Local.trim();
    const trimmedTown = townLocal.trim();
    const trimmedPostcode = postcodeLocal.trim();

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
      return;
    }

    navigation.navigate('UpgradeIntro');
  };

  const ukPostcodeRegex = /^[A-Za-z]{1,2}\d{1,2} ?\d[A-Za-z]{2}$/;
  const isFormValid = () => {
    if (!addressLine1Local || !townLocal || !postcodeLocal) {
      setFormError('Please complete all required fields.');
      return false;
    }

    if (!ukPostcodeRegex.test(postcodeLocal)) {
      setFormError('Please provide a valid UK postcode.');
      return false;
    }

    setFormError(null);
    return true;
  };

  const title = 'What you’ll need to do after the switch';

  // Use AccessibilityInfo to set accessibility focus on the title
  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(title);
  }, [title]);

  return (
    <View
      style={[styles.container, {backgroundColor: containerBackgroundColor}]}>
      <View style={styles.contentContainer}>
        <Text variant="screenTitle leftAlign" style={{color: textColour}}>
          {title}
        </Text>

        <Text variant="bodyText" style={[styles.label, {color: textColour}]}>
          First line of address
        </Text>
        <TextInput
          style={[
            styles.input,
            {
              color: textColour,
            },
          ]}
          placeholder="Enter first line of address"
          placeholderTextColor={isDarkMode ? Colours.black30 : Colours.black60}
          value={addressLine1Local}
          onChangeText={setAddressLine1Local}
          accessibilityLabel="First line of address"
          accessibilityRole="text"
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
          accessibilityLabel="Town"
          accessibilityRole="text"
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
          accessibilityLabel="Postcode"
          accessibilityRole="text"
        />
      </View>

      {formError && (
        <Text variant="bodyText" style={styles.errorText}>
          {formError}
        </Text>
      )}
      <PinkButton
        buttonText="Confirm"
        onPress={handleSwitchButtonPress}
        accessibilityLabel="Confirm Button"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contentContainer: {
    flex: 1,
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
