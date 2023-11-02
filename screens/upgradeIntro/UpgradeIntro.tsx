//UpgradeIntro.tsx

import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TextStyle,
  AccessibilityInfo,
  Dimensions,
} from 'react-native';
import PinkButton from '../../components/theme/buttons/PinkButton';
import InfoModal from '../../components/theme/modals/InfoModal';
import Text from '../../components/Text';
import {NavigationProps} from '../../navigationTypes';
import Colours from '../../components/theme/Colour';
import {useUserContext} from '../../components/UserContext';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {height} = Dimensions.get('window');

type UpgradeIntroProps = NavigationProps<'UpgradeIntro'>;

const UpgradeIntroScreen: React.FC<UpgradeIntroProps> = ({navigation}) => {
  const {isDarkMode} = useUserContext();

  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;
  const boxColour = isDarkMode ? Colours.black90 : Colours.black05;

  const title = 'Introducing the Mettle bank account';

  const FSCSImageSource = isDarkMode
    ? require('../../assets/FSCSLogo.png')
    : require('../../assets/FSCSLightMode.png');

  const MettleLogoImageSource = isDarkMode
    ? require('../../assets/MettleLogo.png')
    : require('../../assets/MettleLogoLightMode.png');

  const [showEMoneyInfoModal, setShowEMoneyInfoModal] = useState(false);
  const [emoneyPressed, setEmoneyPressed] = useState(false);

  const handleSwitchButtonPress = () => {
    navigation.navigate('StepperScreen1');
  };

  const handleEmoneyPress = () => {
    setShowEMoneyInfoModal(true);
    setEmoneyPressed(true);
  };

  const emoneyTextStyles: TextStyle = {
    ...styles.emoneyText,
    color: emoneyPressed ? Colours.blue : Colours.pink,
    textDecorationLine: 'underline',
  };

  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(title);
  }, [title]);

  return (
    <SafeAreaView
      style={[
        styles.safeAreaContainer,
        {backgroundColor: containerBackgroundColor},
      ]}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.padding}>
          <Image
            source={MettleLogoImageSource}
            style={styles.largeImage}
            accessible={true}
            accessibilityLabel="Mettle Bank Logo"
            accessibilityRole="image"
          />
          <Text
            accessible={true}
            accessibilityLabel={title}
            accessibilityRole="header"
            variant="headerMedium centerAlign"
            style={[styles.padding, {color: textColour}]}>
            {title}
          </Text>

          <View>
            <Text
              accessible={true}
              accessibilityLabel="Upgrade Intro"
              accessibilityRole="text"
              accessibilityHint="Tap the phrase 'e-money' to learn more."
              variant="bodyText centerAlign"
              style={{color: textColour}}>
              We’ve built a new bank account, which will replace the{' '}
              <Pressable
                onPress={handleEmoneyPress}
                accessible={true}
                accessibilityHint="Pressing this opens pop-up with a definition"
                accessibilityLabel="E-money Pressable"
                accessibilityRole="button">
                <Text variant="bodyText" style={emoneyTextStyles}>
                  {' '}
                  e-money
                </Text>
              </Pressable>{' '}
              account you currently use.
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text
            accessible={true}
            accessibilityLabel="Upgrade Intro Section"
            accessibilityRole="header"
            variant="headerSmall centerAlign"
            style={{color: textColour}}>
            What’s new?
          </Text>
        </View>
        <View style={[styles.box, {backgroundColor: boxColour}]}>
          <Image
            source={FSCSImageSource}
            style={styles.fscsLogo}
            accessible={true}
            accessibilityLabel="FSCS Logo"
            accessibilityRole="image"
          />
          <Text
            variant="bodyText"
            style={[styles.centeredText, {color: textColour}]}
            accessibilityLabel="FSCS protection description"
            accessibilityRole="text">
            With the new Mettle bank account, your funds are protected by the
            Financial Services Compensation Scheme (FSCS) up to £85k.
          </Text>
        </View>
        <View style={styles.padding} />
        <PinkButton
          buttonText="Get started"
          onPress={handleSwitchButtonPress}
          accessible={true}
          accessibilityLabel="GetStarted"
          testID="getStartedButton"
        />
        {/* E-money Info Modal */}
        <InfoModal
          visible={showEMoneyInfoModal}
          onPressClose={() => setShowEMoneyInfoModal(false)}
          title="Your e-money account"
          content="Your existing e-money account, provided by Prepay Technologies Ltd (PPS), stores your money electronically for making payments and is regulated by the Financial Conduct Authority (FCA)."
          accessible={true}
          accessibilityLabel="E-money Definition Modal"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: wp('5%'),
  },
  safeAreaContainer: {
    height: '100%',
  },
  padding: {
    paddingBottom: hp('2%'),
  },
  largeImage: {
    margin: hp('5%'),
    alignSelf: 'center',
  },
  centeredText: {
    textAlign: 'center',
  },
  section: {
    marginTop: hp('2%'),
  },
  box: {
    borderRadius: 8,
    alignSelf: 'center',
    width: wp('85%'),
    padding: wp('5%'),
    paddingBottom: hp('7%'),
    marginTop: hp('1%'),
  },
  fscsLogo: {
    alignSelf: 'center',
    marginBottom: hp('5%'),
    marginTop: hp('5%'),
  },
  emoneyText: {
    lineHeight: height > 600 ? 90 : 60,
    fontWeight: 'bold',
  },
});

export default UpgradeIntroScreen;
