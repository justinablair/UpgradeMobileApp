//ThemeScreen.tsx

import React, {useEffect} from 'react';
import {View, StyleSheet, AccessibilityInfo} from 'react-native';
import Colours from '../../components/theme/Colour';
import {NavigationProps} from '../../navigationTypes';
import {useUserContext} from '../../components/UserContext';
import PinkButton from '../../components/theme/buttons/PinkButton';
import CheckboxToggle from '../../components/toggles/CheckboxToggle';
import Text from '../../components/Text';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type ThemeScreenProps = NavigationProps<'ThemeScreen'>;

const ThemeScreen: React.FC<ThemeScreenProps> = ({navigation}) => {
  const {isDarkMode, toggleDarkMode} = useUserContext();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? Colours.black : Colours.white,
      padding: wp('4%'),
    },
    title: {
      color: isDarkMode ? Colours.white : Colours.black,
    },
    contentContainer: {
      flex: 1,
    },
    space: {
      marginBottom: hp('4%'),
    },
    optionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: isDarkMode ? Colours.black : Colours.white,
      padding: wp('4%'),
      marginBottom: hp('2%'),
    },
    optionText: {
      fontSize: wp('4%'),
      color: isDarkMode ? Colours.white : Colours.black,
    },
    separator: {
      width: 327,
      borderBottomWidth: 1,
      borderBottomColor: isDarkMode ? Colours.white : Colours.black30,
    },
  });

  const handleSwitchButtonPress = () => {
    navigation.navigate('UserSelection');
  };

  const title = 'Select App Theme';
  // Use AccessibilityInfo to set accessibility focus on the title
  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(title);
  }, [title]);

  return (
    <View style={styles.container} accessibilityLabel="settingsScreen">
      <View style={styles.contentContainer}>
        <Text
          variant="screenTitle leftAlign"
          style={[styles.title, styles.space]}
          accessible={true}
          accessibilityRole="header"
          testID="title">
          {title}
        </Text>
        <View style={styles.optionContainer}>
          <Text
            style={styles.optionText}
            accessible={true}
            accessibilityLabel="lightModeText">
            Light Mode
          </Text>
          <CheckboxToggle
            checked={!isDarkMode}
            onToggle={toggleDarkMode}
            accessible={true}
            accessibilityLabel="lightModeCheckbox"
            testID="lightModeCheckbox"
            accessibilityRole="checkbox"
            accessibilityState={{checked: !isDarkMode}}
          />
        </View>
        <View
          style={styles.separator}
          accessible={true}
          accessibilityLabel="separator"
        />
        <View style={styles.optionContainer}>
          <Text
            style={styles.optionText}
            accessible={true}
            accessibilityLabel="darkModeText">
            Dark Mode
          </Text>
          <CheckboxToggle
            checked={isDarkMode}
            onToggle={toggleDarkMode}
            accessible={true} // Added accessible prop
            accessibilityLabel="darkModeCheckbox"
            testID="darkModeCheckbox"
            accessibilityRole="checkbox"
            accessibilityState={{checked: isDarkMode}}
          />
        </View>
      </View>
      <PinkButton
        buttonText="Confirm"
        onPress={handleSwitchButtonPress}
        accessibilityLabel="confirm"
        testID="confirmButton"
      />
    </View>
  );
};

export default ThemeScreen;
