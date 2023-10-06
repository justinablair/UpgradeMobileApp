//UpgradeIntro.tsx

import React, {useState} from 'react';
import {View, Image, ScrollView, StyleSheet, SafeAreaView} from 'react-native';

import Text from '../components/Text';
import {NavigationProps} from '../navigationTypes';
import Colours from '../components/theme/Colour';
import PinkButton from '../components/theme/buttons/PinkButton';
import AuthModal from '../components/theme/modals/AuthModal';

type UpgradeCompleteProps = NavigationProps<'UpgradeComplete'>;

const UpgradeCompleteScreen: React.FC<UpgradeCompleteProps> = ({
  navigation,
}) => {
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

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Image
            source={require('../assets/Supertick.png')}
            style={styles.largeImage}
            accessibilityLabel="Rocket taking off image"
          />
          <Text variant="screenTitle">
            Congratulations your switch is complete!
          </Text>
          <Text variant="bodyText centerAlign">
            You can now log in to your new account, where you’ll find your
            account number and sort code.{'/n/n'} To help you get started we’ll
            send you a couple of emails soon. Look out for your new account
            details and your old scheduled payments and Direct Debits.
          </Text>
          <PinkButton buttonText="Log in" onPress={handleLoginButtonPress} />
        </View>
        <AuthModal
          visible={authModalVisible}
          onClose={onCloseAuthModal}
          navigation={navigation}
          onNext={handleAuthModalNext}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colours.black,
    padding: 25,
    height: '100%',
  },
  safeAreaContainer: {
    backgroundColor: Colours.black,
    height: '100%',
  },

  largeImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },

  centeredText: {
    textAlign: 'center',
  },
});

export default UpgradeCompleteScreen;
