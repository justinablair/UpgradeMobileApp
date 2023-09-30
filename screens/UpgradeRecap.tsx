//UpgradeRecap.tsx
import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import PinkButton from '../components/theme/buttons/PinkButton';

import {NavigationProps} from '../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../components/theme/Colour';
import ChangesYouDo from './Common/ChangesYouDo';
import ChangesWeDo from './Common/ChangesWeDo';
import NewAccount from './Common/NewAccount';
import WhiteButton from '../components/theme/buttons/WhiteButton';
import AuthModal from '../components/theme/modals/AuthModal';

type UpgradeRecapProps = NavigationProps<'UpgradeRecap'>;

const UpgradeRecapScreen: React.FC<UpgradeRecapProps> = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const handleSwitchButtonExitJourney = () => {
    navigation.navigate('UpgradeStarted');
  };

  const onClose = () => {
    setModalVisible(false);
  };

  const handlePinkButtonPress = () => {
    toggleModal(); // Open the AuthModal
  };

  const closeAuthModal = () => {
    setModalVisible(false);
  };

  const handleNext = (code: string) => {
    console.log('Authentication code:', code);
    // Close the modal
    closeAuthModal();
    navigation.navigate('UpgradeRecap');
    toggleModal();
  };
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.container}>
          <ChangesWeDo />
          <ChangesYouDo />
          <NewAccount />
          <WhiteButton
            buttonText="I'm not sure"
            onPress={handleSwitchButtonExitJourney}
          />

          <PinkButton
            buttonText="I understand"
            onPress={handlePinkButtonPress}
          />

          <TouchableOpacity onPress={() => setModalVisible(true)}>
            {/* <Text variant="bodyText" style={{color: Colours.black}}>
            Open Authentication Modal
          </Text> */}
          </TouchableOpacity>
          {/* Render the authentication modal */}
          <AuthModal
            visible={modalVisible}
            navigation={navigation}
            onDigitsEntered={handleSwitchButtonExitJourney}
            onClose={onClose}
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
  safeAreaContainer: {
    backgroundColor: Colours.white,
    height: '100%',
  },
});

export default UpgradeRecapScreen;
