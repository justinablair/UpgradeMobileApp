//ConfirmAddress.tsx

import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Pressable, SafeAreaView} from 'react-native';
import Text from '../components/Text';
// import InfoModal from '../components/InfoModal';

import {NavigationProps} from '../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../components/theme/Colour';
import InfoBox from '../components/InfoBox';
import PinkButton from '../components/theme/buttons/PinkButton';
import WhiteButton from '../components/theme/buttons/WhiteButton';
import {useUserContext} from '../components/UserContext';
import InfoModal from '../components/theme/modals/InfoModal';
import InteractiveModal from '../components/theme/modals/InteractiveModal';

type ConfirmAddressProps = NavigationProps<'ConfirmAddress'>;

const ConfirmAddressScreen: React.FC<ConfirmAddressProps> = ({navigation}) => {
  const [showSendingCardInfoModal, setShowSendingCardInfoModal] =
    useState(false);

  const [showInteractiveModal, setShowInteractiveModal] = useState(false);

  const handleOpenInteractivenModal = () => {
    setShowInteractiveModal(true);
  };

  const handleCloseInteractiveModalModal = () => {
    setShowInteractiveModal(false);
  };

  const {addressLine1, town, postcode} = useUserContext();

  const [displayedAddress, setDisplayedAddress] = useState({
    addressLine1: '',
    town: '',
    postcode: '',
  });

  useEffect(() => {
    setDisplayedAddress({addressLine1, town, postcode});
  }, [addressLine1, town, postcode]);

  const handleChangeAddressClick = () => {
    navigation.navigate('PersonalDetails');
    setShowInteractiveModal(false);
  };

  const handleConfirmAddressClick = () => {
    navigation.navigate('UpgradeConfirm');
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Text variant="screenTitle leftAlign" style={{color: Colours.black}}>
            Confirm your address
          </Text>
          <Text
            variant="bodyText"
            style={[{color: Colours.black}, styles.spaceMedium]}>
            We’ll send your new card to this address. If your address has
            changed, you’ll need to update it before continuing.
          </Text>
          <View>
            <InfoBox
              title="Your address"
              description={`${displayedAddress.addressLine1}\n${displayedAddress.town}\n${displayedAddress.postcode}`}
              titleStyle={styles.titleCustomisation}
              descriptionStyle={styles.descriptionCustomisation}
            />
          </View>
          <Pressable onPress={() => setShowSendingCardInfoModal(true)}>
            <Text
              variant="bodyText bodyTextBold"
              style={[{color: Colours.pink}, styles.centerText]}>
              Why we're sending a new card
            </Text>
          </Pressable>
          <InfoModal
            visible={showSendingCardInfoModal}
            onPressClose={() => setShowSendingCardInfoModal(false)}
            title="You’ll get a new card"
            content="Because we’re closing your e-money account, your current card will no longer work. We’ll send you a new card that’s connected to your new bank account."
            accessibilityLabel="Close US Person Info Modal"
            contentStyle={[
              {backgroundColor: Colours.white},
              styles.InfoModalCustomisation,
            ]}
            titleStyle={{color: Colours.black}} // Customize title text color
            bodyTextStyle={{color: Colours.black}}
          />
          <InteractiveModal
            modalVisible={showInteractiveModal}
            closeModal={handleCloseInteractiveModalModal}
            modalTitle="Need to update your address?"
            modalContent="Updating your address will also change the address in the Personal details section of the app."
            pinkButtonText="Update address"
            onPinkButtonClick={handleChangeAddressClick}
            whiteButtonText="Cancel"
            onWhiteButtonClick={handleCloseInteractiveModalModal}
          />

          <WhiteButton
            buttonText="Update address"
            onPress={handleOpenInteractivenModal}
          />
          <PinkButton
            buttonText="Confirm address"
            onPress={handleConfirmAddressClick}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.white,
    padding: 16,
  },
  spaceMedium: {
    marginBottom: 30,
  },
  titleCustomisation: {
    color: Colours.black30,
  },
  descriptionCustomisation: {
    color: Colours.black,
  },
  InfoModalCustomisation: {
    margin: 50,
  },
  centerText: {
    alignSelf: 'center',
  },
  safeAreaContainer: {
    backgroundColor: Colours.white,
    height: '100%',
  },
});

export default ConfirmAddressScreen;
