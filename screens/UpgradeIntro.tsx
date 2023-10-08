//UpgradeIntro.tsx

import React, {useState} from 'react';
import {
  View,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TextStyle,
} from 'react-native';
import PinkButton from '../components/theme/buttons/PinkButton';
import InfoModal from '../components/theme/modals/InfoModal';
import Text from '../components/Text';
import {NavigationProps} from '../navigationTypes';
import Colours from '../components/theme/Colour';
import {useUserContext} from '../components/UserContext';
type UpgradeIntroProps = NavigationProps<'UpgradeIntro'>;

const UpgradeIntroScreen: React.FC<UpgradeIntroProps> = ({navigation}) => {
  const {isDarkMode} = useUserContext(); // Access isDarkMode from context

  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;
  const boxColour = isDarkMode ? Colours.black90 : Colours.black05;
  // Define the source for the image based on the value of isoletrader
  const FSCSImageSource = isDarkMode
    ? require('../assets/FSCSLogo.png')
    : require('../assets/FSCSLightMode.png');

  const MettleLogoImageSource = isDarkMode
    ? require('../assets/MettleLogo.png')
    : require('../assets/MettleLogoLightMode.png');

  const [showEMoneyInfoModal, setShowEMoneyInfoModal] = useState(false);
  const [emoneyPressed, setEmoneyPressed] = useState(false);

  const handleSwitchButtonPress = () => {
    navigation.navigate('StepperScreen1');
  };

  const handleEmoneyPress = () => {
    setShowEMoneyInfoModal(true);
    setEmoneyPressed(true); // Set to true to keep it blue
  };

  const emoneyTextStyles: TextStyle = {
    ...styles.emoneyText,
    color: emoneyPressed ? Colours.blue : Colours.pink,
    textDecorationLine: 'underline',
  };

  return (
    <SafeAreaView
      style={[
        styles.safeAreaContainer,
        {backgroundColor: containerBackgroundColor},
      ]}>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar backgroundColor="#171B1B" translucent={false} />
        <View style={styles.padding}>
          <Image
            source={MettleLogoImageSource}
            style={styles.largeImage}
            accessibilityLabel="Mettle Bank Account Logo"
          />
          <Text
            variant="headerMedium centerAlign"
            style={[styles.padding, {color: textColour}]}>
            Introducing the Mettle bank account
          </Text>

          <Text variant="bodyText centerAlign" style={{color: textColour}}>
            We’ve built a new bank account, which will replace the
            <Pressable onPress={handleEmoneyPress}>
              <Text variant="bodyText" style={emoneyTextStyles}>
                {' '}
                e-money
              </Text>
            </Pressable>{' '}
            account you currently use.
          </Text>
        </View>
        <View style={styles.section}>
          <Text variant="headerSmall centerAlign" style={{color: textColour}}>
            What’s new?
          </Text>
        </View>
        <View style={[styles.box, {backgroundColor: boxColour}]}>
          <Image
            source={FSCSImageSource}
            style={styles.fscsLogo}
            accessibilityLabel="FSCS Logo"
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
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  bodyTextWithImage: {
    width: '90%',
    textAlign: 'left',
    fontSize: 16,
    lineHeight: 21,
  },
  infoIcon: {
    width: 32,
    height: 32,
    alignSelf: 'flex-end',
  },
  emoneyText: {
    lineHeight: 90,
    fontWeight: 'bold',
  },
});

export default UpgradeIntroScreen;
