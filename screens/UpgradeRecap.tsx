import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  AccessibilityInfo,
} from 'react-native';
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
import ChevronUpIcon from '../components/theme/icons/ChevronUp';
import ChevronDownIcon from '../components/theme/icons/ChevronDown';
import {useUserContext} from '../components/UserContext';
import ExitModal from '../components/theme/modals/ExitModal';

type UpgradeRecapProps = NavigationProps<'UpgradeRecap'>;

const UpgradeRecapScreen: React.FC<UpgradeRecapProps> = ({navigation}) => {
  const {isDarkMode} = useUserContext(); // Access isDarkMode from context
  const backgroundColour = isDarkMode ? Colours.black : Colours.white;

  const [isExitModalVisible, setExitModalVisible] = React.useState(false); // Add state for controlling the visibility of the exit modal

  const title = isDarkMode ? Colours.white : Colours.black;

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

  const exitModalVisible = () => {
    setExitModalVisible(true);
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

  const mainTitle = 'Recap of changes';
  const weDoTitle = 'What we’ll do during the switch';
  const youDoTitle = 'What you’ll need to do after the switch';
  const newAccountTitle = 'How your new account will work';

  // Use AccessibilityInfo to set accessibility focus on the titles
  useEffect(() => {
    let titleToAnnounce = mainTitle;
    if (changesWeDoVisible) {
      titleToAnnounce = weDoTitle;
    } else if (changesYouDoVisible) {
      titleToAnnounce = youDoTitle;
    } else if (newAccountVisible) {
      titleToAnnounce = newAccountTitle;
    }
    AccessibilityInfo.announceForAccessibility(titleToAnnounce);
  }, [
    mainTitle,
    weDoTitle,
    youDoTitle,
    newAccountTitle,
    changesWeDoVisible,
    changesYouDoVisible,
    newAccountVisible,
  ]);

  return (
    <SafeAreaView
      style={[styles.safeAreaContainer, {backgroundColor: backgroundColour}]}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer} // Added contentContainerStyle
      >
        <View style={[styles.container, {backgroundColor: backgroundColour}]}>
          <TouchableOpacity
            style={styles.titleContainer}
            onPress={() => setChangesWeDoVisible(!changesWeDoVisible)}>
            <Text
              variant="screenTitle leftAlign"
              style={{color: title, marginRight: 13, paddingBottom: 10}}>
              {mainTitle}
            </Text>
            <View style={styles.titleIconContainer}>
              <Text
                variant="screenTitle leftAlign"
                style={{color: title, marginRight: 13}}>
                {weDoTitle}
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
                style={{color: title, marginRight: 10}}>
                {youDoTitle}
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
                style={{color: title, marginRight: 7}}>
                How your new account will work
              </Text>
              {newAccountVisible ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </View>
            <View style={styles.space} />
          </TouchableOpacity>
          {newAccountVisible && <NewAccount />}
        </View>
        <View style={styles.buttonContainer}>
          <WhiteButton buttonText="I'm not sure" onPress={exitModalVisible} />
          <PinkButton buttonText="Switch now" onPress={handlePinkButtonPress} />
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)} />
        {/* Render the authentication modal */}
        <AuthModal
          visible={modalVisible}
          navigation={navigation}
          onDigitsEntered={handleSwitchButtonExitJourney}
          onClose={onClose}
        />
        <ExitModal
          visible={isExitModalVisible} // Pass the visibility state
          onPressClose={() => setExitModalVisible(false)} // Close the modal
          title="Are you sure you want to quit?"
          content="Your progress won't be saved"
          toggleExitModal={() => setExitModalVisible(!isExitModalVisible)} // Pass the toggle function
        />
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
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between', // Arrange items vertically with space between
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
  buttonContainer: {
    alignItems: 'center', // Center the buttons horizontally
    marginBottom: 16, // Add some bottom margin for spacing
  },
});

export default UpgradeRecapScreen;
