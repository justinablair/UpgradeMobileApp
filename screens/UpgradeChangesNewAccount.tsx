import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
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

  return (
    <SafeAreaView
      style={[styles.safeAreaContainer, {backgroundColor: backgroundColour}]}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={[styles.container, {backgroundColor: backgroundColour}]}>
          <View style={styles.titleContainer}>
            <Text variant="screenTitle centreAlign" style={{color: titleColor}}>
              How your new account will work
            </Text>
          </View>
          <NewAccount />
          <WhiteButton
            buttonText="Maybe later"
            onPress={handleSwitchExitJourneyPress}
          />
          <PinkButton
            buttonText="Get started"
            onPress={handleSwitchButtonPress}
          />
          <ExitModal
            visible={isExitModalVisible}
            onPressClose={() => setExitModalVisible(false)}
            title="Are you sure you want to quit?"
            content="Your progress won't be saved"
            toggleExitModal={() => setExitModalVisible(!isExitModalVisible)}
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
