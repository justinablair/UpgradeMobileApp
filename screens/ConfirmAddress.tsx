//ConfirmAddress.tsx

import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../components/Text';
// import InfoModal from '../components/InfoModal';

import {NavigationProps} from '../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../components/theme/Colour';
import InfoBox from '../components/InfoBox';
import PinkButton from '../components/PinkButton';
import WhiteButton from '../components/WhiteButton';
import {useUserContext} from '../components/UserContext';

type ConfirmAddressProps = NavigationProps<'ConfirmAddress'>;

const ConfirmAddressScreen: React.FC<ConfirmAddressProps> = ({navigation}) => {
  const {addressLine1, town, postcode} = useUserContext();

  const [displayedAddress, setDisplayedAddress] = useState({
    addressLine1: '',
    town: '',
    postcode: '',
  });

  useEffect(() => {
    setDisplayedAddress({addressLine1, town, postcode});
  }, [addressLine1, town, postcode]);

  const handleUpgradeAddressClick = () => {
    navigation.navigate('UpgradeNationality');
  };

  const handleConfirmAddressClick = () => {
    navigation.navigate('UpgradeNationality');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text variant="screenTitle leftAlign" style={{color: Colours.black}}>
          Confirm your address
        </Text>
        <Text variant="bodyText" style={{color: Colours.black}}>
          We’ll send your new card to this address. If your address has changed,
          you’ll need to update it before continuing.
        </Text>
        <InfoBox
          title="Your address"
          description={`${displayedAddress.addressLine1}\n${displayedAddress.town}\n${displayedAddress.postcode}`}
          titleStyle={styles.titleCustomisation}
          descriptionStyle={styles.descriptionCustomisation}
        />
        <WhiteButton
          buttonText="No thanks"
          onPress={handleUpgradeAddressClick}
        />
        <PinkButton
          buttonText="Yes to all"
          onPress={handleConfirmAddressClick}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.white,
    padding: 16,
  },
  spaceMedium: {
    marginBottom: 15,
  },
  titleCustomisation: {
    color: Colours.black30,
  },
  descriptionCustomisation: {
    color: Colours.black,
  },
});

export default ConfirmAddressScreen;
