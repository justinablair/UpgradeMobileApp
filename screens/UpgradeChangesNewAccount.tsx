import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  AccessibilityInfo,
} from 'react-native';
import PinkButton from '../components/theme/buttons/PinkButton';
import {NavigationProps} from '../navigationTypes';
import Colours from '../components/theme/Colour';
import WhiteButton from '../components/theme/buttons/WhiteButton';
import NewAccount from './Common/NewAccount';
import Text from '../components/Text';
import ExitModal from '../components/theme/modals/ExitModal';
import {useUserContext} from '../components/UserContext';

type UpgradeChangesNewAccountProps =
  NavigationProps<'UpgradeChangesNewAccount'>;

const UpgradeChangesNewAccountScreen: React.FC<
  UpgradeChangesNewAccountProps
> = ({navigation}) => {
  const {isDarkMode} = useUserContext();
  const [isExitModalVisible, setExitModalVisible] = useState(false);

  const backgroundColour = isDarkMode ? Colours.black : Colours.white;
  const titleColor = isDarkMode ? Colours.white : Colours.black;

  const handleSwitchButtonPress = () => {
    navigation.navigate('StepperScreen2');
  };

  const handleSwitchExitJourneyPress = () => {
    setExitModalVisible(true);
  };

  const title = 'How your new account will work';
  // Use AccessibilityInfo to set accessibility focus on the title
  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(title);
  }, [title]);

  return (
    <SafeAreaView
      style={[styles.safeAreaContainer, {backgroundColor: backgroundColour}]}
      accessible={true}
      accessibilityLabel="upgradeChangesNewAccountScreen"
      accessibilityRole="none">
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        accessibilityLabel="upgradeChangesScrollView">
        <View
          style={[styles.container, {backgroundColor: backgroundColour}]}
          accessible={true}
          accessibilityLabel="upgradeChangesContainer"
          accessibilityRole="none">
          <View style={styles.titleContainer}>
            <Text
              variant="screenTitle centreAlign"
              style={{color: titleColor}}
              accessible={true}
              accessibilityLabel="upgradeChangesTitle"
              accessibilityRole="header">
              {title}
            </Text>
          </View>
          <NewAccount />
          <WhiteButton
            buttonText="Maybe later"
            onPress={handleSwitchExitJourneyPress}
            accessibilityLabel="maybeLaterButton"
            testID="maybeLaterButton"
          />
          <PinkButton
            buttonText="Get started"
            onPress={handleSwitchButtonPress}
            accessibilityLabel="getStartedButton"
            testID="getStartedButton"
          />
          <ExitModal
            visible={isExitModalVisible}
            onPressClose={() => setExitModalVisible(false)}
            title="Are you sure you want to quit?"
            content="Your progress won't be saved"
            toggleExitModal={() => setExitModalVisible(!isExitModalVisible)}
            accessibilityLabel="exitModal"
            testID="exitModal"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  safeAreaContainer: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  titleContainer: {
    paddingLeft: 10,
  },
});

export default UpgradeChangesNewAccountScreen;
