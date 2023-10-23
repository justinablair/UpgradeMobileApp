//UpgradeChangesYouDo.tsx

import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  AccessibilityInfo,
} from 'react-native';
import Text from '../../components/Text';
import PinkButton from '../../components/theme/buttons/PinkButton';
import {useUserContext} from '../../components/UserContext';
import {NavigationProps} from '../../navigationTypes';
import ChangesYouDo from '../Common/ChangesYouDo';
import Colours from '../../components/theme/Colour';

// Define type for the props
type UpgradeChangesYouDoProps = NavigationProps<'UpgradeChangesYouDo'>;

// Component definition
const UpgradeChangesYouDoScreen: React.FC<UpgradeChangesYouDoProps> = ({
  navigation,
}) => {
  // Extract isDarkMode from the context
  const {isDarkMode} = useUserContext();

  // Set background and title colors based on the isDarkMode value
  const backgroundColor = isDarkMode ? Colours.black : Colours.white;
  const titleColor = isDarkMode ? Colours.white : Colours.black;

  // Function to handle button press and navigate to the next screen
  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeChangesNewAccount');
  };

  // Use AccessibilityInfo to set accessibility focus on the title
  const title = 'What you’ll need to do after the switch';
  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(title);
  }, [title]);

  // Component JSX
  return (
    <SafeAreaView
      style={[styles.safeAreaContainer, {backgroundColor}]}
      accessibilityRole="summary">
      <ScrollView>
        <View
          style={[styles.container, {backgroundColor}]}
          accessible
          accessibilityRole="summary">
          {/* Title Section */}
          <View style={styles.titleContainer}>
            <Text
              variant="screenTitle centreAlign"
              style={{color: titleColor}}
              accessible
              accessibilityRole="header"
              accessibilityLabel="What you’ll need to do after the switch.">
              {title}
            </Text>
          </View>

          {/* Space */}
          <View style={styles.space} />

          {/* Changes You Do Component */}
          <ChangesYouDo />

          {/* Next Button */}
          <PinkButton
            buttonText="Next"
            onPress={handleSwitchButtonPress}
            accessibilityLabel="Proceed to the next step"
            testID="nextButton"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles for the components
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
