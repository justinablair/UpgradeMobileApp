import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Text as RNText} from 'react-native';
import Text from '../components/Text';
import {NavigationProps} from '../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../components/theme/Colour';
import PinkButton from '../components/PinkButton';
import {useUserContext} from '../components/UserContext';

type PersonalDetailsProps = NavigationProps<'PersonalDetails'>;

const PersonalDetailsScreen: React.FC<PersonalDetailsProps> = ({
  navigation,
}) => {
  const {addressLine1, town, postcode, setAddressLine1, setTown, setPostcode} =
    useUserContext();
  const [isEditing, setIsEditing] = useState(false);
  const [newAddressLine1, setNewAddressLine1] = useState(addressLine1);
  const [newTown, setNewTown] = useState(town);
  const [newPostcode, setNewPostcode] = useState(postcode);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const handleEditAddress = () => {
    setIsEditing(true);
    setUpdateSuccess(false); // Reset the success message
  };

  const handleUpdateAddress = () => {
    setAddressLine1(newAddressLine1);
    setTown(newTown);
    setPostcode(newPostcode);
    setIsEditing(false);
    setUpdateSuccess(true); // Set the success message
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text
          variant="bodyText bodyTextBold"
          style={[{color: Colours.black30}, styles.titlePadding]}>
          Home address
        </Text>
        <View style={styles.addressContainer}>
          <Text variant="bodyText" style={{color: Colours.black}}>
            Address Line 1:
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter address"
            value={isEditing ? newAddressLine1 : addressLine1}
            onChangeText={setNewAddressLine1}
            editable={isEditing}
          />
          <Text variant="bodyText" style={{color: Colours.black}}>
            Town:
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter town"
            value={isEditing ? newTown : town}
            onChangeText={setNewTown}
            editable={isEditing}
          />
          <Text variant="bodyText" style={{color: Colours.black}}>
            Postcode:
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter postcode"
            value={isEditing ? newPostcode : postcode}
            onChangeText={setNewPostcode}
            editable={isEditing}
          />
        </View>
        {updateSuccess && (
          <Text variant="bodyText leftAlign" style={styles.successMessage}>
            Address updated successfully!
          </Text>
        )}
        {isEditing ? (
          <PinkButton buttonText="Save" onPress={handleUpdateAddress} />
        ) : (
          <PinkButton buttonText="Edit Address" onPress={handleEditAddress} />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titlePadding: {
    padding: 16,
  },

  addressContainer: {
    padding: 16,
    backgroundColor: Colours.white,
    width: '100%',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: Colours.black30,
    marginBottom: 16,
    paddingVertical: 8,
  },
  successMessage: {
    color: Colours.green, // You can use a color that indicates success
    padding: 16,
  },
});

export default PersonalDetailsScreen;
