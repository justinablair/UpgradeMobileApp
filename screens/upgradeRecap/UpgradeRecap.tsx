//UpgradeRecap.tsx

import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  AccessibilityInfo,
} from 'react-native';
import PinkButton from '../../components/theme/buttons/PinkButton';
import {NavigationProps} from '../../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../../components/theme/Colour';
import ChangesYouDo from '../Common/ChangesYouDo';
import ChangesWeDo from '../Common/ChangesWeDo';
import NewAccount from '../Common/NewAccount';
import WhiteButton from '../../components/theme/buttons/WhiteButton';
import AuthModal from '../../components/theme/modals/AuthModal';
import Text from '../../components/Text';
import ChevronUpIcon from '../../components/theme/icons/ChevronUp';
import ChevronDownIcon from '../../components/theme/icons/ChevronDown';
import {useUserContext} from '../../components/UserContext';
import ExitModal from '../../components/theme/modals/ExitModal';

type UpgradeRecapProps = NavigationProps<'UpgradeRecap'>;

const UpgradeRecapScreen: React.FC<UpgradeRecapProps> = ({navigation}) => {
  const {isDarkMode} = useUserContext();
  const backgroundColour = isDarkMode ? Colours.black : Colours.white;

  const [isExitModalVisible, setExitModalVisible] = useState(false);

  const title = isDarkMode ? Colours.white : Colours.black;

  const [modalVisible, setModalVisible] = useState(false);
  const [changesWeDoVisible, setChangesWeDoVisible] = useState(true);
  const [changesYouDoVisible, setChangesYouDoVisible] = useState(true);
  const [newAccountVisible, setNewAccountVisible] = useState(true);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const exitModalVisible = () => {
    setExitModalVisible(true);
  };
  const onClose = () => {
    setModalVisible(false);
  };

  const handlePinkButtonPress = () => {
    toggleModal();
  };

  const closeAuthModal = () => {
    setModalVisible(false);
  };

  const mainTitle = 'Recap of changes';
  const weDoTitle = 'What we’ll do during the switch';
  const youDoTitle = 'What you’ll need to do after the switch';
  const newAccountTitle = 'How your new account will work';

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
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={[styles.container, {backgroundColor: backgroundColour}]}>
          <Text
            variant="screenTitle leftAlign"
            style={{color: title, marginRight: 13, paddingBottom: 10}}
            accessible={true}
            accessibilityRole="header"
            accessibilityLabel={mainTitle}>
            {mainTitle}
          </Text>
          <TouchableOpacity
            style={styles.titleContainer}
            onPress={() => setChangesWeDoVisible(!changesWeDoVisible)}>
            <View style={styles.titleIconContainer}>
              <Text
                variant="screenTitle leftAlign"
                style={{color: title, marginRight: 13}}
                accessible={true}
                accessibilityRole="button"
                accessibilityHint={`press to collapse ${weDoTitle} information`}
                accessibilityLabel={weDoTitle}>
                {weDoTitle}
              </Text>
              {changesWeDoVisible ? (
                <ChevronUpIcon
                  accessibilityLabel="Expanded"
                  accessibilityState={{expanded: true}}
                />
              ) : (
                <ChevronDownIcon
                  accessibilityLabel="Collapsed"
                  accessibilityState={{expanded: false}}
                />
              )}
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
                style={{color: title, marginRight: 10}}
                accessible={true}
                accessibilityRole="button"
                accessibilityHint={`press to collapse ${youDoTitle} information`}
                accessibilityLabel={youDoTitle}>
                {youDoTitle}
              </Text>
              {changesYouDoVisible ? (
                <ChevronUpIcon
                  accessibilityLabel="Expanded"
                  accessibilityState={{expanded: true}}
                />
              ) : (
                <ChevronDownIcon
                  accessibilityLabel="Collapsed"
                  accessibilityState={{expanded: false}}
                />
              )}
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
                style={{color: title, marginRight: 7}}
                accessible={true}
                accessibilityRole="button"
                accessibilityHint={`press to collapse ${newAccountTitle} information`}
                accessibilityLabel={newAccountTitle}>
                {newAccountTitle}
              </Text>
              {newAccountVisible ? (
                <ChevronUpIcon
                  accessibilityLabel="Expanded"
                  accessibilityState={{expanded: true}}
                />
              ) : (
                <ChevronDownIcon
                  accessibilityLabel="Collapsed"
                  accessibilityState={{expanded: false}}
                />
              )}
            </View>
            <View style={styles.space} />
          </TouchableOpacity>
          {newAccountVisible && <NewAccount />}
        </View>
        <View style={styles.buttonContainer}>
          <WhiteButton
            buttonText="I'm not sure"
            onPress={exitModalVisible}
            accessibilityLabel="notSure"
            testID="notSureButton"
          />
          <PinkButton
            buttonText="Switch now"
            onPress={handlePinkButtonPress}
            accessibilityLabel="switchNow"
            testID="switchNow"
          />
        </View>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          accessible={true}
          accessibilityRole="button"
        />
        <AuthModal
          visible={modalVisible}
          navigation={navigation}
          navigationTarget="UpgradeStarted"
          onClose={onClose}
        />
        <ExitModal
          visible={isExitModalVisible}
          onPressClose={() => setExitModalVisible(false)}
          title="Are you sure you want to quit?"
          content="Your progress won't be saved"
          toggleExitModal={() => setExitModalVisible(!isExitModalVisible)}
          accessibilityLabel="Exit Modal"
          testID="exitModal"
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
    justifyContent: 'space-between',
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
    alignItems: 'center',
    marginBottom: 16,
  },
});

export default UpgradeRecapScreen;
