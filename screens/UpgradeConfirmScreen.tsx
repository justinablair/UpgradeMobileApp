import React from 'react';
import {View, StyleSheet, Image, SafeAreaView} from 'react-native';
import Text from '../components/Text';

import {NavigationProps} from '../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../components/theme/Colour';
import PinkButton from '../components/theme/buttons/PinkButton';
import Colour from '../components/theme/Colour';
import {useUserContext} from '../components/UserContext'; // Import the user context

type UpgradeConfirmProps = NavigationProps<'UpgradeConfirm'>;

const UpgradeConfirmScreen: React.FC<UpgradeConfirmProps> = ({navigation}) => {
  const {isDarkMode} = useUserContext();

  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeRecap');
  };

  return (
    <SafeAreaView
      style={[
        styles.safeAreaContainer,
        {backgroundColor: containerBackgroundColor},
      ]}>
      <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View
            style={[
              styles.container,
              {backgroundColor: containerBackgroundColor},
            ]}>
            <Image
              source={require('../assets/SwitchArrows.png')}
              style={styles.largeImage}
              accessibilityLabel="Switch arrows image"
            />
            <Text variant="screenTitle centerAlign" style={{color: textColour}}>
              Ready to switch?
            </Text>
            <Text variant="bodyText centerAlign" style={{color: textColour}}>
              We’ll open your new account and move your money. We’ll also close
              your e-money account.{'\n'}
            </Text>
            <Text variant="bodyText centerAlign" style={{color: Colour.pink}}>
              Only do this if you’re ready. We can’t undo it once we’ve started.
            </Text>
          </View>
        </ScrollView>
        <View style={styles.bottomButtonContainer}>
          <PinkButton
            buttonText="View recap of changes"
            onPress={handleSwitchButtonPress}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  container: {
    padding: 16,
    marginTop: 50,
  },
  modal: {
    backgroundColor: Colours.white,
    color: Colours.black,
  },
  spaceMedium: {
    marginBottom: 15,
  },
  InfoModalCustomisation: {
    margin: 50,
  },
  largeImage: {
    width: 210,
    height: 210,
    alignSelf: 'center',
  },
  safeAreaContainer: {
    flex: 1,
  },
  bottomButtonContainer: {
    padding: 16,
  },
});

export default UpgradeConfirmScreen;
