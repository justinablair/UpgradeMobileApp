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
type UpgradeIntroProps = NavigationProps<'UpgradeIntro'>;

const UpgradeIntroScreen: React.FC<UpgradeIntroProps> = ({navigation}) => {
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
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar backgroundColor="#171B1B" translucent={false} />
        <View style={styles.padding}>
          <Image
            source={require('../assets/MettleLogo.png')}
            style={styles.largeImage}
            accessibilityLabel="Mettle Bank Account Logo"
          />
          <Text variant="headerMedium centerAlign" style={styles.padding}>
            Introducing the Mettle bank account
          </Text>

          <Text variant="bodyText centerAlign">
            We’ve built a new bank account, which will replace the
            <Pressable onPress={handleEmoneyPress}>
              <Text variant="bodyText" style={emoneyTextStyles}>
                e-money
              </Text>
            </Pressable>{' '}
            account you currently use.
          </Text>
        </View>
        <View style={styles.section}>
          <Text variant="headerSmall centerAlign">What’s new?</Text>
        </View>
        <View style={styles.box}>
          <Image
            source={require('../assets/FSCSLogo.png')}
            style={styles.fscsLogo}
            accessibilityLabel="FSCS Logo"
          />
          <Text variant="bodyText" style={styles.centeredText}>
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
    backgroundColor: Colours.black,
    padding: 25,
  },
  safeAreaContainer: {
    backgroundColor: Colours.black,
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
    backgroundColor: '#2e3232',
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
    color: 'white',
  },
  infoIcon: {
    width: 32,
    height: 32,
    alignSelf: 'flex-end',
  },
  emoneyText: {
    // Define your emoney text style here
    lineHeight: 90,
  },
});

export default UpgradeIntroScreen;
