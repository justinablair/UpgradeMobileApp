//UserSelection.tsx
import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  AccessibilityInfo,
} from 'react-native';
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
  const {isDarkMode} = useUserContext(); // Access isDarkMode from context

  const handleUserTypeSelect = (userType: UserType) => {
    setUserType(userType);
    navigation.navigate(
      userType === 'soleTrader' ? 'Address' : 'CompanyDetails',
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? Colours.black : Colours.white, // Change background color
      padding: 16,
    },
    separator: {
      width: 327,
      borderBottomWidth: 1,
      borderBottomColor: isDarkMode ? Colours.black05 : Colours.black05,
      marginBottom: 16,
    },
    space: {
      marginBottom: 40,
    },
    title: {
      color: isDarkMode ? Colours.white : Colours.black,
    },
  });

  const title = 'What type of business are you?';
  // Use AccessibilityInfo to set accessibility focus on the title
  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(title);
  }, [title]);

  return (
    <View style={styles.container}>
      <Text
        variant="screenTitle leftAlign"
        style={[styles.title, styles.space]}>
        {title}
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
    </View>
  );
};

export default UserSelectionScreen;
