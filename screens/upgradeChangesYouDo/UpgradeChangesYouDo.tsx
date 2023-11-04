//UpgradeChangesYouDo.tsx

import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  AccessibilityInfo,
  Dimensions,
} from 'react-native';
import Text from '../../components/Text';
import PinkButton from '../../components/theme/buttons/PinkButton';
import {useUserContext} from '../../components/UserContext';
import {NavigationProps} from '../../navigationTypes';
import ChangesYouDo from '../Common/ChangesYouDo';
import Colours from '../../components/theme/Colour';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {height} = Dimensions.get('window');

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

  return (
    <SafeAreaView style={[styles.safeAreaContainer, {backgroundColor}]}>
      <ScrollView>
        <View style={[styles.container, {backgroundColor}]}>
          {/* Title Section */}
          <View style={styles.titleContainer}>
            <Text
              variant="screenTitle centreAlign"
              style={{color: titleColor}}
              accessible={true}
              accessibilityRole="header"
              accessibilityLabel="Upgrade Changes You'll Do">
              {title}
            </Text>
          </View>

          {/* Space */}
          <View style={styles.space} />

          {/* Changes You Do Component */}
          <ChangesYouDo />
        </View>
      </ScrollView>
      {/* Next Button */}
      <PinkButton
        buttonText="Next"
        onPress={handleSwitchButtonPress}
        accessible={true}
        accessibilityLabel="next"
        testID="nextButton"
      />
      <View style={styles.space} />
    </SafeAreaView>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('4%'),
  },
  safeAreaContainer: {
    height: '100%',
  },
  titleContainer: {
    paddingLeft: wp('2%'),
  },
  space: {
    marginVertical: height > 800 ? 0 : hp('1%'),
  },
});

export default UpgradeChangesYouDoScreen;
