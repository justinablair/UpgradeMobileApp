//Settings.tsx;

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colours from '../components/theme/Colour';
import {NavigationProps} from '../navigationTypes';
import {useUserContext} from '../components/UserContext';
import PinkButton from '../components/theme/buttons/PinkButton';
import CheckboxToggle from '../components/toggles/CheckboxToggle';
import Text from '../components/Text';

type SettingsScreenProps = NavigationProps<'Settings'>;

const SettingsScreen: React.FC<SettingsScreenProps> = ({navigation}) => {
  const {isDarkMode, toggleDarkMode} = useUserContext(); // Access isDarkMode and toggleDarkMode from context
  console.log('isDarkMode:', isDarkMode);

  const handleSwitchButtonPress = () => {
    navigation.navigate('UserSelection');
  };

  // Define styles based on isDarkMode inside the component function
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? Colours.black : Colours.white, // Change background color
      padding: 16,
    },
    title: {
      color: isDarkMode ? Colours.white : Colours.black, // Change text color
    },
    contentContainer: {
      flex: 1, // Content takes remaining space
    },
    optionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: isDarkMode ? Colours.black : Colours.white, // Change background color
      padding: 16,
      marginBottom: 16,
    },
    optionText: {
      fontSize: 16,
      color: isDarkMode ? Colours.white : Colours.black, // Change text color
    },
    separator: {
      width: 327,
      borderBottomWidth: 1,
      borderBottomColor: isDarkMode ? Colours.white : Colours.black30, // Change border color
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text variant="screenTitle leftAlign" style={styles.title}>
          Select App Theme
        </Text>
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>Light Mode</Text>
          <CheckboxToggle checked={!isDarkMode} onToggle={toggleDarkMode} />
        </View>
        <View style={styles.separator} />
        <View style={styles.optionContainer}>
          <Text style={styles.optionText}>Dark Mode</Text>
          <CheckboxToggle checked={isDarkMode} onToggle={toggleDarkMode} />
        </View>
      </View>
      <PinkButton buttonText="Confirm" onPress={handleSwitchButtonPress} />
    </View>
  );
};

export default SettingsScreen;
