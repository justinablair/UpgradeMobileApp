//UpgradeConfirm.tsx

import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  AccessibilityInfo,
  ScrollView,
} from 'react-native';
import Text from '../../components/Text';
import {NavigationProps} from '../../navigationTypes';
import Colours from '../../components/theme/Colour';
import PinkButton from '../../components/theme/buttons/PinkButton';
import {useUserContext} from '../../components/UserContext';

type UpgradeConfirmProps = NavigationProps<'UpgradeConfirm'>;

const UpgradeConfirmScreen: React.FC<UpgradeConfirmProps> = ({navigation}) => {
  const {isDarkMode} = useUserContext();

  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeRecap');
  };

  const title = 'Ready to switch?';

  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(title);
  }, [title]);

  return (
    <SafeAreaView
      style={[
        styles.safeAreaContainer,
        {backgroundColor: containerBackgroundColor},
      ]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View
          style={[
            styles.container,
            {backgroundColor: containerBackgroundColor},
          ]}>
          <Image
            source={require('../../assets/SwitchArrows.png')}
            style={styles.largeImage}
            accessible={true}
            accessibilityLabel="Switch arrows"
            accessibilityRole="image"
          />
          <Text
            variant="screenTitle centerAlign"
            style={{color: textColour}}
            accessible={true}
            accessibilityLabel={title}
            accessibilityRole="header">
            {title}
          </Text>
          <Text
            variant="bodyText centerAlign"
            style={{color: textColour}}
            accessible={true}
            accessibilityRole="text"
            accessibilityLabel="Open New Account, Close Old Account">
            We’ll open your new account and move your money. We’ll also close
            your e-money account.{'\n'}
          </Text>
          <Text
            variant="bodyText centerAlign"
            style={{color: Colours.pink}}
            accessible={true}
            accessibilityRole="text"
            accessibilityLabel="You Can't Go Back Once Started">
            Only do this if you’re ready. We can’t undo it once we’ve started.
          </Text>
        </View>
      </ScrollView>
      <View
        style={styles.bottomButtonContainer}
        accessible={true}
        accessibilityRole="button">
        <PinkButton
          buttonText="View recap of changes"
          onPress={handleSwitchButtonPress}
          accessibilityLabel="View Recap"
          testID="ViewRecapButton"
        />
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
