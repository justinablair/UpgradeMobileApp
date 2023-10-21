import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  AccessibilityInfo,
} from 'react-native';

import Text from '../components/Text';
import {NavigationProps} from '../navigationTypes';
import Colours from '../components/theme/Colour';
import PinkButton from '../components/theme/buttons/PinkButton';
import AuthModal from '../components/theme/modals/AuthModal';
import {useUserContext} from '../components/UserContext';

type UpgradeCompleteProps = NavigationProps<'UpgradeComplete'>;

const UpgradeCompleteScreen: React.FC<UpgradeCompleteProps> = ({
  navigation,
}) => {
  const {isDarkMode} = useUserContext();

  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  const [authModalVisible, setAuthModalVisible] = useState(false);

  const onCloseAuthModal = () => {
    setAuthModalVisible(false); // Close the AuthModal
  };
  const handleLoginButtonPress = () => {
    setAuthModalVisible(true); // Open the AuthModal
  };
  const handleAuthModalNext = () => {
    const targetScreen = 'UpgradedWelcome'; // Define the target screen
    navigation.navigate(targetScreen); // Navigate to the target screen
    onCloseAuthModal(); // Close the AuthModal
  };

  const title = 'Congratulations your switch is complete!';
  // Use AccessibilityInfo to set accessibility focus on the title
  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(title);
  }, [title]);

  return (
    <SafeAreaView
      style={[
        styles.safeAreaContainer,
        {backgroundColor: containerBackgroundColor},
      ]}>
      <View style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={[
            styles.container,
            {backgroundColor: containerBackgroundColor},
          ]}>
          <View style={styles.contentContainer}>
            <Image
              source={require('../assets/Supertick.png')}
              style={styles.largeImage}
              accessibilityLabel="Rocket taking off image"
            />
            <Text variant="screenTitle" style={{color: textColour}}>
              {title}
            </Text>
            <Text variant="bodyText centerAlign" style={{color: textColour}}>
              You can now log in to your new account, where you’ll find your
              account number and sort code.{'\n\n'} To help you get started,
              we’ll send you a couple of emails soon. Look out for your new
              account details and your old scheduled payments and Direct Debits.
            </Text>
          </View>
        </ScrollView>
        <View style={styles.bottomButtonContainer}>
          <PinkButton buttonText="Log in" onPress={handleLoginButtonPress} />
        </View>
        <AuthModal
          visible={authModalVisible}
          onClose={onCloseAuthModal}
          // navigation={navigation}
          onNext={handleAuthModalNext}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  contentContainer: {
    flex: 1, // Content takes remaining space
  },
  safeAreaContainer: {
    height: '100%',
  },
  bottomButtonContainer: {
    padding: 16,
  },
  largeImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});

export default UpgradeCompleteScreen;
