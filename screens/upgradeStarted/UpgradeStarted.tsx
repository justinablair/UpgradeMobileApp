import React, {useEffect} from 'react';
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
import {useUserContext} from '../../components/UserContext';

type UpgradeStartedProps = NavigationProps<'UpgradeStarted'>;

const UpgradeStartedScreen: React.FC<UpgradeStartedProps> = ({navigation}) => {
  const {isDarkMode} = useUserContext();

  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;
  const title = 'We’ve started your switch';

  //Timer simulates a switch taking place
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate('UpgradeComplete');
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, [navigation]);

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
      accessibilityLabel="Upgrade Started Screen">
      <ScrollView
        style={[styles.container, {backgroundColor: containerBackgroundColor}]}
        accessibilityRole="scrollbar">
        <View>
          <View
            style={styles.largeImage}
            accessibilityRole="image"
            accessible={true}
            accessibilityLabel="Image of a padlock">
            <Image
              source={require('../assets/Padlock.png')}
              style={styles.alignCenter}
              accessibilityLabel="Image of a padlock"
            />
          </View>
          <Text
            variant="screenTitle"
            style={{color: textColour}}
            accessibilityRole="header">
            {title}
          </Text>
          <Text
            variant="bodyText"
            style={[styles.centeredText, {color: textColour}]}
            accessible={true}
            accessibilityRole="text">
            This usually takes less than a couple of minutes, but it can
            sometimes take up to 2 hours.{'\n\n'}If you need anything during
            this time, message us via in-app chat.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    marginTop: 50,
    height: '100%',
  },
  safeAreaContainer: {
    flex: 1,
  },
  alignCenter: {
    alignSelf: 'center',
  },
  largeImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginHorizontal: 50,
  },
  centeredText: {
    textAlign: 'center',
  },
});

export default UpgradeStartedScreen;
