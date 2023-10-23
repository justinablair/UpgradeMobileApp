import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  AccessibilityInfo,
} from 'react-native';

import Text from '../../components/Text';
import {NavigationProps} from '../../navigationTypes';
import Colours from '../../components/theme/Colour';
import PinkButton from '../../components/theme/buttons/PinkButton';
import AuthModal from '../../components/theme/modals/AuthModal';
import {useUserContext} from '../../components/UserContext';

type UpgradeCompleteProps = NavigationProps<'UpgradeComplete'>;

const UpgradeCompleteScreen: React.FC<UpgradeCompleteProps> = ({
  navigation,
}) => {
  // Get the current mode from the user context
  const {isDarkMode} = useUserContext();

  // Define container background and text colors based on the mode
  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  // State to manage the visibility of the authentication modal
  const [authModalVisible, setAuthModalVisible] = useState(false);

  // Function to handle closing the authentication modal
  const onCloseAuthModal = () => {
    setAuthModalVisible(false);
  };

  // Function to handle the login button press
  const handleLoginButtonPress = () => {
    setAuthModalVisible(true); // Open the AuthModal
  };

  // Function to handle the navigation action in the authentication modal
  const handleAuthModalNext = () => {
    const targetScreen = 'UpgradedWelcome';
    navigation.navigate(targetScreen);
    onCloseAuthModal();
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
      ]}
      accessible={true}
      accessibilityLabel="upgrade-complete-screen">
      <ScrollView
        contentContainerStyle={[
          styles.container,
          {backgroundColor: containerBackgroundColor},
        ]}>
        <View
          style={styles.contentContainer}
          accessible={true}
          accessibilityLabel="upgrade-complete-content">
          {/* Display the success image */}
          <Image
            source={require('../../assets/Supertick.png')}
            style={styles.largeImage}
            accessible={true}
            accessibilityLabel="rocketTakingOffImage"
          />
          {/* Display the title */}
          <Text
            variant="screenTitle"
            style={{color: textColour}}
            accessible={true}
            accessibilityLabel="upgradeCompleteTitle">
            {title}
          </Text>
          {/* Display the body text */}
          <Text
            variant="bodyText"
            style={{color: textColour, textAlign: 'center'}}
            accessible={true}
            accessibilityLabel="upgradeCompleteBody">
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
          accessibilityLabel="loginButton"
          testID="loginButton"
        />
      </View>
      {/* Display the authentication modal */}
      <AuthModal
        visible={authModalVisible}
        onClose={onCloseAuthModal}
        navigation={navigation}
        onNext={handleAuthModalNext}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
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
    padding: 16,
  },
  largeImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default UpgradeCompleteScreen;
