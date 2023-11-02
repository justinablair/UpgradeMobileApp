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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
      ]}>
      <ScrollView
        style={[styles.container, {backgroundColor: containerBackgroundColor}]}>
        <View>
          <View style={styles.largeImage}>
            <Image
              source={require('../../assets/Padlock.png')}
              style={styles.alignCenter}
              accessibilityRole="image"
              accessible={true}
              accessibilityLabel="padlock"
            />
          </View>
          <Text
            variant="screenTitle"
            style={{color: textColour}}
            accessible={true}
            accessibilityLabel={title}
            accessibilityRole="header">
            {title}
          </Text>
          <Text
            variant="bodyText"
            style={[styles.centeredText, {color: textColour}]}
            accessible={true}
            accessibilityLabel="Description"
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
    padding: wp('10%'),
    marginTop: hp('6%'),
    height: '100%',
  },
  safeAreaContainer: {
    flex: 1,
  },
  alignCenter: {
    alignSelf: 'center',
  },
  largeImage: {
    width: wp('30%'),
    height: wp('30%'),
    alignSelf: 'center',
    marginHorizontal: wp('15%'),
  },
  centeredText: {
    textAlign: 'center',
  },
});

export default UpgradeStartedScreen;
