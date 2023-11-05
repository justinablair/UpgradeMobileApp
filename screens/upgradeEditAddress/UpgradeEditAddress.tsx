// UpgradeEditAddress.tsx

import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  AccessibilityInfo,
} from 'react-native';
import Text from '../../components/Text';
import {NavigationProps} from '../../navigationTypes';
import Colours from '../../components/theme/Colour';
import PinkButton from '../../components/theme/buttons/PinkButton';
import {useUserContext} from '../../components/UserContext';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useAddressValidation} from '../../components/AddressValidation';

type UpgradeEditAddressProps = NavigationProps<'UpgradeEditAddress'>;

const UpgradeEditAddressScreen: React.FC<UpgradeEditAddressProps> = ({
  navigation,
}) => {
  // Access user context and initialise necessary states
  const {
    isDarkMode,
    addressLine1,
    town,
    postcode,
    setAddressLine1,
    setTown,
    setPostcode,
  } = useUserContext();

  // Define colors based on dark mode
  const backgroundColor = isDarkMode ? Colours.black : Colours.white;
  const titleColor = isDarkMode ? Colours.white : Colours.black;

  // Initialise state variables
  const [isEditing, setIsEditing] = useState(false);
  const [newAddressLine1, setNewAddressLine1] = useState(addressLine1);
  const [newTown, setNewTown] = useState(town);
  const [newPostcode, setNewPostcode] = useState(postcode);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Custom hook for address validation
  const {isFormValid} = useAddressValidation();

  // Event handler to update the address
  const handleUpdateAddress = () => {
    const validationResult = isFormValid(newAddressLine1, newTown, newPostcode);
    if (validationResult) {
      setFormError(validationResult);
      setUpdateSuccess(false);
      return;
    }

    setAddressLine1(newAddressLine1);
    setTown(newTown);
    setPostcode(newPostcode);
    setIsEditing(false);
    setUpdateSuccess(true);
    setIsButtonEnabled(false);
    setFormError(null); // Clear the form error when the address is successfully updated
  };

  // Check if any of the inputs have changed
  useEffect(() => {
    if (
      newAddressLine1 !== addressLine1 ||
      newTown !== town ||
      newPostcode !== postcode
    ) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
    setFormError(null); // Clear the form error when inputs change
  }, [newAddressLine1, newTown, newPostcode, addressLine1, town, postcode]);

  const title = 'Home address';

  // Use AccessibilityInfo to set accessibility focus on the title
  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(title);
  }, [title]);

  // Render the component
  return (
    <KeyboardAvoidingView style={[styles.container, {backgroundColor}]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Display the title */}
        <Text
          variant="bodyText bodyTextBold"
          style={[{color: Colours.black60}, styles.titlePadding]}
          accessible={true}
          accessibilityLabel={title}
          accessibilityRole="header">
          {title}
        </Text>
        {/* Input fields for address details */}
        <View style={styles.addressContainer}>
          <Text
            variant="bodyText"
            style={{color: titleColor}}
            accessible={true}
            accessibilityRole="text"
            accessibilityLabel="Address Line 1">
            Address Line 1:
          </Text>
          <TextInput
            style={[styles.input, {color: titleColor}]}
            placeholder="Enter address"
            value={newAddressLine1}
            onChangeText={setNewAddressLine1}
            accessible={true}
            accessibilityLabel="Address Line 1 Input"
            testID="addressLine1Input"
          />
          <Text
            variant="bodyText"
            style={{color: titleColor}}
            accessible={true}
            accessibilityRole="text"
            accessibilityLabel="Town">
            Town:
          </Text>
          <TextInput
            style={[styles.input, {color: titleColor}]}
            placeholder="Enter town"
            value={newTown}
            onChangeText={setNewTown}
            accessible={true}
            accessibilityLabel="Town Input"
            testID="townInput"
          />
          <Text
            variant="bodyText"
            style={{color: titleColor}}
            accessible={true}
            accessibilityRole="text"
            accessibilityLabel="Postcode">
            Postcode:
          </Text>
          <TextInput
            style={[styles.input, {color: titleColor}]}
            placeholder="Enter postcode"
            value={newPostcode}
            onChangeText={setNewPostcode}
            accessible={true}
            accessibilityLabel="Postcode Input"
            testID="postcodeInput"
          />
        </View>
        {/* Display success message on address update */}
        {updateSuccess && (
          <Text
            variant="bodyText leftAlign"
            style={styles.successMessage}
            accessible={true}
            accessibilityRole="text"
            accessibilityLabel="Success Message">
            Address updated successfully!
          </Text>
        )}
      </ScrollView>
      {/* Render the edit/save button */}

      <View style={styles.buttonContainer}>
        {/* Display form error message */}
        {formError && (
          <Text variant="bodyText" style={styles.errorText}>
            {formError}
          </Text>
        )}
        <PinkButton
          buttonText="Save"
          onPress={handleUpdateAddress}
          disabled={!isButtonEnabled}
          accessible={true}
          accessibilityLabel="Save Button"
          testID="saveEditButton"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('4%'),
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: hp('10%'),
  },
  titlePadding: {
    padding: wp('4%'),
  },
  addressContainer: {
    padding: wp('4%'),
    width: '100%',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: Colours.black30,
    marginBottom: hp('2%'),
    paddingVertical: hp('1%'),
  },
  successMessage: {
    color: Colours.green,
    padding: wp('4%'),
  },
  buttonContainer: {
    padding: wp('4%'),
    bottom: 0,
    width: '100%',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  errorText: {
    color: Colours.red,
  },
});

export default UpgradeEditAddressScreen;
