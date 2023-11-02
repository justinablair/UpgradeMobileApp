//ConfirmAddress.tsx

import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  SafeAreaView,
  Image,
  TextStyle,
  AccessibilityInfo,
  Dimensions,
} from 'react-native';
import Text from '../../components/Text';
import {NavigationProps} from '../../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../../components/theme/Colour';
import InfoBox from '../../components/InfoBox';
import PinkButton from '../../components/theme/buttons/PinkButton';
import WhiteButton from '../../components/theme/buttons/WhiteButton';
import {useUserContext} from '../../components/UserContext';
import InfoModal from '../../components/theme/modals/InfoModal';
import InteractiveModal from '../../components/theme/modals/InteractiveModal';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {height} = Dimensions.get('window');

type ConfirmAddressProps = NavigationProps<'ConfirmAddress'>;

const ConfirmAddressScreen: React.FC<ConfirmAddressProps> = ({navigation}) => {
  const {isDarkMode} = useUserContext(); // Access isDarkMode from context
  const {addressLine1, town, postcode} = useUserContext();

  const [showSendingCardInfoModal, setShowSendingCardInfoModal] =
    useState(false);
  const [showInteractiveModal, setShowInteractiveModal] = useState(false);
  const [newCardPressed, setNewCardPressed] = useState(false);
  const [displayedAddress, setDisplayedAddress] = useState({
    addressLine1: '',
    town: '',
    postcode: '',
  });

  useEffect(() => {
    setDisplayedAddress({addressLine1, town, postcode});
  }, [addressLine1, town, postcode]);

  const handleOpenInteractiveModal = () => {
    setShowInteractiveModal(true);
    setNewCardPressed(true);
  };

  const handleCloseInteractiveModal = () => {
    setShowInteractiveModal(false);
  };

  const handleNewCardTextPress = () => {
    setNewCardPressed(true);
    setShowSendingCardInfoModal(true);
  };

  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const text60 = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  const newCardTextStyles: TextStyle = {
    ...styles.newCardText,
    color: newCardPressed ? Colours.blue : Colours.pink,
    textDecorationLine: 'underline',
  };

  const handleChangeAddressClick = () => {
    navigation.navigate('PersonalDetails');
    setShowInteractiveModal(false);
  };

  const handleConfirmAddressClick = () => {
    navigation.navigate('StepperComplete');
  };

  const title = 'Confirm your address';

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
      <View
        style={[styles.container, {backgroundColor: containerBackgroundColor}]}>
        <ScrollView>
          <View>
            <Image
              source={require('../../assets/Envelope.png')}
              style={[styles.centerText, styles.spaceMedium]}
              accessible={true}
              accessibilityLabel="Mettle Card In A Envelope"
              accessibilityRole="image"
            />
            <Text
              accessible={true}
              accessibilityRole="header"
              accessibilityLabel={title}
              style={{color: textColour}}>
              {title}
            </Text>
            <Text
              variant="bodyText centerAlign"
              accessible={true}
              accessibilityLabel="We'll Send Your Card"
              accessibilityRole="text"
              style={[{color: textColour}, styles.spaceMedium]}>
              We’ll send your new card to this address. If your address has
              changed, you’ll need to update it before continuing.
            </Text>

            <View>
              <InfoBox
                title="Your address"
                description={`${displayedAddress.addressLine1}\n${displayedAddress.town}\n${displayedAddress.postcode}`}
                titleStyle={{color: text60}}
                descriptionStyle={{color: textColour}}
                accessible={true}
                accessibilityLabel="Your Address"
              />
            </View>
            <Pressable
              onPress={handleNewCardTextPress}
              accessibilityRole="button">
              <Text
                variant="bodyText bodyTextBold"
                accessible={true}
                accessibilityRole="button"
                accessibilityLabel="Why New Card"
                accessibilityHint="Press to learn why we're sending a new card"
                style={[
                  {color: Colours.pink},
                  styles.centerText,
                  newCardTextStyles,
                ]}
                testID="newCardPressable">
                Why we're sending a new card
              </Text>
            </Pressable>
            <InfoModal
              visible={showSendingCardInfoModal}
              onPressClose={() => setShowSendingCardInfoModal(false)}
              title="You’ll get a new card"
              content="Because we’re closing your e-money account, your current card 
              will no longer work. We’ll send you a new card that’s connected to your 
              new bank account."
              accessible={true}
              accessibilityLabel="Close US Person Info Modal"
              contentStyle={[
                {backgroundColor: containerBackgroundColor},
                styles.InfoModalCustomisation,
              ]}
              titleStyle={{color: textColour}}
              bodyTextStyle={{color: textColour}}
            />
            <InteractiveModal
              modalVisible={showInteractiveModal}
              closeModal={handleCloseInteractiveModal}
              modalTitle="Need to update your address?"
              modalContent="Updating your address will also change the address in the Personal details section of the app."
              pinkButtonText="Update address"
              onPinkButtonClick={handleChangeAddressClick}
              whiteButtonText="Cancel"
              onWhiteButtonClick={handleCloseInteractiveModal}
            />
          </View>
        </ScrollView>
      </View>
      <View style={styles.padding}>
        <WhiteButton
          buttonText="Update address"
          onPress={handleOpenInteractiveModal}
          accessibilityLabel="Update Address"
        />
        <PinkButton
          buttonText="Confirm address"
          onPress={handleConfirmAddressClick}
          accessibilityLabel="Confirm Address"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('4%'),
  },
  spaceMedium: {
    marginBottom: hp('3%'),
  },
  InfoModalCustomisation: {
    margin: hp('5%'),
  },
  centerText: {
    alignSelf: 'center',
  },
  safeAreaContainer: {
    height: '100%',
  },

  newCardText: {
    fontWeight: 'bold',
  },
  padding: {
    paddingBottom: height > 700 ? 0 : hp('2%'),
  },
});

export default ConfirmAddressScreen;
