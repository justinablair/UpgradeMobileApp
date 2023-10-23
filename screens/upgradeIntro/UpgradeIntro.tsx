//UpgradeIntro.tsx

import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TextStyle,
  AccessibilityInfo,
} from 'react-native';
import PinkButton from '../../components/theme/buttons/PinkButton';
import InfoModal from '../../components/theme/modals/InfoModal';
import Text from '../../components/Text';
import {NavigationProps} from '../../navigationTypes';
import Colours from '../../components/theme/Colour';
import {useUserContext} from '../../components/UserContext';

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
      accessible={true}
      accessibilityLabel="Upgrade Intro Screen"
      style={[
        styles.safeAreaContainer,
        {backgroundColor: containerBackgroundColor},
      ]}>
      <ScrollView
        contentContainerStyle={styles.container}
        accessible={true}
        accessibilityLabel="Upgrade Intro Content">
        <StatusBar backgroundColor="#171B1B" translucent={false} />
        <View style={styles.padding}>
          <Image
            source={MettleLogoImageSource}
            style={styles.largeImage}
            accessibilityLabel="Mettle Bank Account Logo"
            accessibilityRole="image"
          />
          <Text
            accessible={true}
            accessibilityLabel="Upgrade Intro Title"
            variant="headerMedium centerAlign"
            style={[styles.padding, {color: textColour}]}>
            {title}
          </Text>

          <Text
            accessible={true}
            accessibilityLabel="Upgrade Intro Text"
            variant="bodyText centerAlign"
            style={{color: textColour}}>
            We’ve built a new bank account, which will replace the
            <Pressable
              onPress={handleEmoneyPress}
              accessible={true}
              accessibilityLabel="E-money Pressable">
              <Text variant="bodyText" style={emoneyTextStyles}>
                {' '}
                e-money
              </Text>
            </Pressable>{' '}
            account you currently use.
          </Text>
        </View>
        <View style={styles.section}>
          <Text
            accessible={true}
            accessibilityLabel="Upgrade Intro Section Header"
            variant="headerSmall centerAlign"
            style={{color: textColour}}>
            What’s new?
          </Text>
        </View>
        <View
          style={[styles.box, {backgroundColor: boxColour}]}
          accessible={true}
          accessibilityLabel="Upgrade Intro Box">
          <Image
            source={FSCSImageSource}
            style={styles.fscsLogo}
            accessibilityLabel="FSCS Logo"
            accessibilityRole="image"
          />
          <Text
            variant="bodyText"
            style={[styles.centeredText, {color: textColour}]}>
            With the new Mettle bank account, your funds are protected by the
            Financial Services Compensation Scheme (FSCS) up to £85k.
          </Text>
        </View>

        <PinkButton
          buttonText="Get started"
          onPress={handleSwitchButtonPress}
          accessibilityLabel="Get Started Button"
          testID="getStartedButton"
        />
        {/* E-money Info Modal */}
        <InfoModal
          visible={showEMoneyInfoModal}
          onPressClose={() => setShowEMoneyInfoModal(false)}
          title="Your e-money account"
          content="Your existing e-money account, provided by Prepay Technologies Ltd (PPS), stores your money electronically for making payments and is regulated by the Financial Conduct Authority (FCA)."
          accessibilityLabel="e-money account Info Modal"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  safeAreaContainer: {
    height: '100%',
  },
  padding: {
    paddingBottom: 20,
  },
  largeImage: {
    margin: 50,
    alignSelf: 'center',
  },
  centeredText: {
    textAlign: 'center',
  },
  section: {
    marginTop: 20,
  },
  box: {
    borderRadius: 8,
    width: 327,
    padding: 20,
    paddingBottom: 45,
    marginTop: 10,
  },
  fscsLogo: {
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 30,
  },
  emoneyText: {
    lineHeight: 90,
    fontWeight: 'bold',
  },
});

export default UpgradeIntroScreen;
