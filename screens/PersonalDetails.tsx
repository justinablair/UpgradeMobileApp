// PersonalDetails.tsx
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Text from '../components/Text';
import {NavigationProps} from '../navigationTypes';
import Colours from '../components/theme/Colour';
import PinkButton from '../components/theme/buttons/PinkButton';
import {useUserContext} from '../components/UserContext';

type PersonalDetailsProps = NavigationProps<'PersonalDetails'>;

const PersonalDetailsScreen: React.FC<PersonalDetailsProps> = ({
  navigation,
}) => {
  // Access user context and initialize necessary states
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

  // Initialize state variables
  const [isEditing, setIsEditing] = useState(false);
  const [newAddressLine1, setNewAddressLine1] = useState(addressLine1);
  const [newTown, setNewTown] = useState(town);
  const [newPostcode, setNewPostcode] = useState(postcode);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  // Event handler to enable editing mode
  const handleEditAddress = () => {
    setIsEditing(true);
    setUpdateSuccess(false);
  };

  // Event handler to update the address
  const handleUpdateAddress = () => {
    setAddressLine1(newAddressLine1);
    setTown(newTown);
    setPostcode(newPostcode);
    setIsEditing(false);
    setUpdateSuccess(true);
  };

  // Render the component
  return (
    <KeyboardAvoidingView style={[styles.container, {backgroundColor}]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Display the title */}
        <Text
          variant="bodyText bodyTextBold"
          style={[{color: Colours.black60}, styles.titlePadding]}>
          Home address
        </Text>
        {/* Input fields for address details */}
        <View style={styles.addressContainer}>
          <Text variant="bodyText" style={{color: titleColor}}>
            Address Line 1:
          </Text>
          <TextInput
            style={[styles.input, {color: titleColor}]}
            placeholder="Enter address"
            value={isEditing ? newAddressLine1 : addressLine1}
            onChangeText={setNewAddressLine1}
            editable={isEditing}
            accessibilityLabel="Address Line 1"
            testID="addressLine1Input"
          />
          <Text variant="bodyText" style={{color: titleColor}}>
            Town:
          </Text>
          <TextInput
            style={[styles.input, {color: titleColor}]}
            placeholder="Enter town"
            value={isEditing ? newTown : town}
            onChangeText={setNewTown}
            editable={isEditing}
            accessibilityLabel="Town"
            testID="townInput"
          />
          <Text variant="bodyText" style={{color: titleColor}}>
            Postcode:
          </Text>
          <TextInput
            style={[styles.input, {color: titleColor}]}
            placeholder="Enter postcode"
            value={isEditing ? newPostcode : postcode}
            onChangeText={setNewPostcode}
            editable={isEditing}
            accessibilityLabel="Postcode"
            testID="postcodeInput"
          />
        </View>
        {/* Display success message on address update */}
        {updateSuccess && (
          <Text
            variant="bodyText leftAlign"
            style={styles.successMessage}
            accessibilityLabel="Success Message">
            Address updated successfully!
          </Text>
        )}
      </ScrollView>
      {/* Render the edit/save button */}
      <View style={styles.buttonContainer}>
        <PinkButton
          buttonText={isEditing ? 'Save' : 'Edit Address'}
          onPress={isEditing ? handleUpdateAddress : handleEditAddress}
          accessibilityLabel={isEditing ? 'Save Button' : 'Edit Address Button'}
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
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  titlePadding: {
    padding: 16,
  },
  addressContainer: {
    padding: 16,
    width: '100%',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: Colours.black30,
    marginBottom: 16,
    paddingVertical: 8,
  },
  successMessage: {
    color: Colours.green,
    padding: 16,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});

export default PersonalDetailsScreen;
