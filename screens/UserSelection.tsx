//UserSelection.tsx
import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from '../components/Text';
import {useUserContext, UserType} from '../components/UserContext';
import Colours from '../components/theme/Colour'; // Import Colours
import {NavigationProps} from '../navigationTypes';
import OptionsWithChevron from '../components/OptionsWithChevron';
// import AuthModal from '../components/AuthModal';

type UserSelectionScreenProps = NavigationProps<'UserSelection'>;

const UserSelectionScreen: React.FC<UserSelectionScreenProps> = ({
  navigation,
}) => {
  const {setUserType} = useUserContext();

  const handleUserTypeSelect = (userType: UserType) => {
    setUserType(userType);
    navigation.navigate(
      userType === 'soleTrader' ? 'Address' : 'CompanyDetails',
    ); // Navigate based on userType
  };

  return (
    <View style={styles.container}>
      <Text
        variant="screenTitle leftAlign"
        style={[{color: Colours.black}, styles.space]}>
        What type of business are you?
      </Text>

      <OptionsWithChevron
        title="Sole trader or side business"
        description="Maybe you’re self-employed, work as a freelancer, or make money independently"
        onPress={() => handleUserTypeSelect('soleTrader')}
      />
      <View style={styles.separator} />

      <OptionsWithChevron
        title="Private Limited Company"
        description="Your business is registered with Companies House and will have at least one director"
        onPress={() => handleUserTypeSelect('limitedCompany')}
      />
      <View style={styles.separator} />
      {/* <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text variant="bodyText" style={{color: Colours.black}}>
          Open Authentication Modal
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.white,
    padding: 16,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  optionContent: {
    flex: 1,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: Colours.black30,
    marginBottom: 16,
  },
  space: {
    marginBottom: 25,
  },
});

export default UserSelectionScreen;
