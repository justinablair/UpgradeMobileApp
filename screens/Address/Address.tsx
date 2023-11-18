import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  AccessibilityInfo,
} from 'react-native';
import Text from '../../components/Text';
import PinkButton from '../../components/theme/buttons/PinkButton';
import Colours from '../../components/theme/Colour';
import {useUserContext} from '../../components/UserContext';
import {NavigationProps} from '../../navigationTypes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useAddressValidation} from '../../components/AddressValidation';

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
    const validationResult = isFormValid(
      addressLine1Local,
      townLocal,
      postcodeLocal,
    );
    if (validationResult) {
      setFormError(validationResult);
      return;
    }

    navigation.navigate('UpgradeIntro');
  };

  // Custom hook for address validation
  const {isFormValid} = useAddressValidation();

  const title = 'Tell us your address';

  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(title);
  }, [title]);

  return (
    <View
      style={[styles.container, {backgroundColor: containerBackgroundColor}]}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.contentContainer}>
          <Text variant="screenTitle leftAlign" style={{color: textColour}}>
            {title}
          </Text>

          <Text variant="bodyText" style={[styles.label, {color: textColour}]}>
            First line of address
          </Text>
          <TextInput
            style={[styles.input, {color: textColour}]}
            placeholder="Enter first line of address"
            placeholderTextColor={
              isDarkMode ? Colours.black30 : Colours.black60
            }
            value={addressLine1Local}
            onChangeText={setAddressLine1Local}
            accessibilityLabel="First line of address input"
            accessibilityRole="text"
          />
          <Text variant="bodyText" style={[styles.label, {color: textColour}]}>
            Town
          </Text>
          <TextInput
            style={[styles.input, {color: textColour}]}
            placeholder="Enter town"
            placeholderTextColor={
              isDarkMode ? Colours.black30 : Colours.black60
            }
            value={townLocal}
            onChangeText={setTownLocal}
            accessibilityLabel="Town input"
            accessibilityRole="text"
          />
          <Text variant="bodyText" style={[styles.label, {color: textColour}]}>
            Postcode
          </Text>
          <TextInput
            style={[styles.input, {color: textColour}]}
            placeholder="Enter postcode"
            placeholderTextColor={
              isDarkMode ? Colours.black30 : Colours.black60
            }
            value={postcodeLocal}
            onChangeText={setPostcodeLocal}
            accessibilityLabel="Postcode input"
            accessibilityRole="text"
          />
        </View>
      </ScrollView>
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
    padding: wp('4%'),
  },
  contentContainer: {
    flex: 1,
  },
  label: {
    marginBottom: hp('1%'),
  },
  input: {
    borderBottomWidth: 1,
    borderColor: Colours.black30,
    marginBottom: hp('2%'),
    paddingVertical: hp('1%'),
  },

  errorText: {
    padding: wp('4%'),
    color: Colours.red,
    marginBottom: hp('1%'),
  },
});

export default EnterAddressScreen;
