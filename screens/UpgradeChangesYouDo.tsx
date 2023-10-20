import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  AccessibilityInfo,
} from 'react-native';
import Text from '../components/Text';
import PinkButton from '../components/theme/buttons/PinkButton';
import {useUserContext} from '../components/UserContext';
import {NavigationProps} from '../navigationTypes';
import ChangesYouDo from './Common/ChangesYouDo';
import Colours from '../components/theme/Colour';

type UpgradeChangesYouDoProps = NavigationProps<'UpgradeChangesYouDo'>;

const UpgradeChangesYouDoScreen: React.FC<UpgradeChangesYouDoProps> = ({
  navigation,
}) => {
  // Extract isDarkMode from the context
  const {isDarkMode} = useUserContext();

  // Set background and title colors based on the isDarkMode value
  const backgroundColor = isDarkMode ? Colours.black : Colours.white;
  const titleColor = isDarkMode ? Colours.white : Colours.black;

  // Function to handle button press
  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeChangesNewAccount');
  };

  // Use AccessibilityInfo to set accessibility focus on the title
  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(
      'What you’ll need to do after the switch',
    );
  }, []);

  return (
    <SafeAreaView
      style={[styles.safeAreaContainer, {backgroundColor}]}
      accessibilityRole="none">
      <ScrollView>
        <View
          style={[styles.container, {backgroundColor}]}
          accessible
          accessibilityRole="text">
          <View style={styles.titleContainer}>
            <Text
              variant="screenTitle centreAlign"
              style={{color: titleColor}}
              accessible
              accessibilityRole="header"
              accessibilityLabel="Changes You Need to Make After the Switch">
              What you’ll need to do after the switch
            </Text>
          </View>
          <View style={styles.space} />
          <ChangesYouDo />
          <PinkButton
            buttonText="Next"
            onPress={handleSwitchButtonPress}
            accessibilityLabel="Proceed to the next step"
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
    height: '100%',
  },
  titleContainer: {
    paddingLeft: 10,
  },
  space: {
    marginVertical: 8,
  },
});

export default UpgradeChangesYouDoScreen;
