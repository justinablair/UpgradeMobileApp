import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  AccessibilityInfo,
  Dimensions,
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

const {height} = Dimensions.get('window');

type UpgradeCompleteProps = NavigationProps<'UpgradeComplete'>;

const UpgradeCompleteScreen: React.FC<UpgradeCompleteProps> = ({
  navigation,
}) => {
  // Get the current mode from the user context
  const {isDarkMode} = useUserContext();

  // Define container background and text colors based on the mode
  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  // Function to handle the login button press
  const handleLoginButtonPress = () => {
    navigation.navigate('Login');
  };

  // Define the title of the screen
  const title = 'Congratulations! Your switch is complete!';

  // Set accessibility focus on the title
  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(title);
  }, [title]);

  return (
    <SafeAreaView
      style={[
        styles.safeAreaContainer,
        {backgroundColor: containerBackgroundColor},
      ]}>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          {backgroundColor: containerBackgroundColor},
        ]}>
        <View style={styles.contentContainer}>
          {/* Display the success image */}
          <Image
            source={require('../../assets/Supertick.png')}
            style={styles.largeImage}
            accessible={true}
            accessibilityRole="image"
            accessibilityLabel="largeTick"
          />
          {/* Display the title */}
          <Text
            variant="screenTitle"
            style={{color: textColour}}
            accessible={true}
            accessibilityRole="header"
            accessibilityLabel={title}>
            {title}
          </Text>
          {/* Display the body text */}
          <Text
            variant="bodyText"
            style={{color: textColour, textAlign: 'center'}}
            accessible={true}
            accessibilityRole="text"
            accessibilityLabel="upgradeCompleteDescription">
            You can now log in to your new account, where you’ll find your
            account number and sort code.
            {'\n\n'}
            To help you get started, we’ll send you a couple of emails soon.
            Look out for your new account details and your old scheduled
            payments and Direct Debits.
          </Text>
        </View>
      </ScrollView>
      {/* Display the login button */}
      <View style={styles.bottomButtonContainer}>
        <PinkButton
          buttonText="Log in"
          onPress={handleLoginButtonPress}
          accessibilityLabel="login"
          testID="loginButton"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: wp('10%'),
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeAreaContainer: {
    flex: 1,
  },
  bottomButtonContainer: {
    paddingBottom: height > 700 ? 0 : hp('2%'),
  },
  largeImage: {
    width: wp('60%'),
    height: wp('60%'),
    alignSelf: 'center',
    marginBottom: hp('5%'),
  },
});

export default UpgradeCompleteScreen;
