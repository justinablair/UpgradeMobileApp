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
import Text from '../components/Text';
import ChevronUpIcon from '../components/theme/ChevronUp';
import ChevronDownIcon from '../components/theme/ChevronDown';

type UpgradeRecapProps = NavigationProps<'UpgradeRecap'>;

const UpgradeRecapScreen: React.FC<UpgradeRecapProps> = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [changesWeDoVisible, setChangesWeDoVisible] = useState(true);
  const [changesYouDoVisible, setChangesYouDoVisible] = useState(true);
  const [newAccountVisible, setNewAccountVisible] = useState(true);

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

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.titleContainer}
            onPress={() => setChangesWeDoVisible(!changesWeDoVisible)}>
            <View style={styles.titleIconContainer}>
              <Text
                variant="screenTitle"
                style={{color: Colours.black, marginRight: 13}}>
                What we’ll do during the switch
              </Text>
              {changesWeDoVisible ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </View>
            <View style={styles.space} />
          </TouchableOpacity>
          {changesWeDoVisible && <ChangesWeDo />}

          <TouchableOpacity
            style={styles.titleContainer}
            onPress={() => setChangesYouDoVisible(!changesYouDoVisible)}>
            <View style={styles.titleIconContainer}>
              <Text
                variant="screenTitle"
                style={{color: Colours.black, marginRight: 10}}>
                What you’ll need to do after the switch
              </Text>
              {changesYouDoVisible ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </View>
            <View style={styles.space} />
          </TouchableOpacity>
          {changesYouDoVisible && <ChangesYouDo />}

          <TouchableOpacity
            style={styles.titleContainer}
            onPress={() => setNewAccountVisible(!newAccountVisible)}>
            <View style={styles.titleIconContainer}>
              <Text
                variant="screenTitle"
                style={{color: Colours.black, marginRight: 7}}>
                How your new account will work
              </Text>
              {newAccountVisible ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </View>
            <View style={styles.space} />
          </TouchableOpacity>
          {newAccountVisible && <NewAccount />}

          <WhiteButton
            buttonText="I'm not sure"
            onPress={handleSwitchButtonExitJourney}
          />

          <PinkButton buttonText="Switch now" onPress={handlePinkButtonPress} />

          <TouchableOpacity onPress={() => setModalVisible(true)} />
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
  space: {
    marginVertical: 8,
  },
  titleContainer: {
    paddingLeft: 10,
  },
  titleIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default UpgradeRecapScreen;
