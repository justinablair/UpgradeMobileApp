//UpgradeChangesWeDo.tsx

import React, {FC, useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  AccessibilityInfo,
  ViewStyle,
  Dimensions,
} from 'react-native';
import {NavigationProps} from '../../navigationTypes';
import {useUserContext} from '../../components/UserContext';
import ChangesWeDo from '../Common/ChangesWeDo';
import Text from '../../components/Text';
import PinkButton from '../../components/theme/buttons/PinkButton';
import Colours from '../../components/theme/Colour';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const {height} = Dimensions.get('window');

type UpgradeChangesWeDoProps = NavigationProps<'UpgradeChangesWeDo'>;

const UpgradeChangesWeDoScreen: FC<UpgradeChangesWeDoProps> = ({
  navigation,
}) => {
  // Access isDarkMode from context
  const {isDarkMode} = useUserContext();

  // Set background color based on isDarkMode
  const backgroundColour = isDarkMode ? Colours.black : Colours.white;

  // Set title color based on isDarkMode
  const title = isDarkMode ? Colours.white : Colours.black;

  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeChangesYouDo');
  };

  const titleText = 'What we’ll do during the switch';
  // Use AccessibilityInfo to set accessibility focus on the title
  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(titleText);
  }, [titleText]);

  return (
    <SafeAreaView
      style={[styles.safeAreaContainer, {backgroundColor: backgroundColour}]}>
      <ScrollView>
        <View style={[styles.container, {backgroundColor: backgroundColour}]}>
          <View style={styles.titleContainer}>
            <Text
              variant="screenTitle centreAlign"
              accessible={true}
              accessibilityRole="header"
              accessibilityLabel="Upgrade Changes We Do"
              style={{color: title}}>
              {titleText}
            </Text>
            <View style={styles.space} />
          </View>
          {/* Changes We Do component */}
          <ChangesWeDo />
        </View>
      </ScrollView>
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
interface Styles {
  container: ViewStyle;
  safeAreaContainer: ViewStyle;
  space: ViewStyle;
  titleContainer: ViewStyle;
}
const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: Colours.white,
    padding: wp('4%'),
  },
  safeAreaContainer: {
    backgroundColor: Colours.white,
    height: '100%',
  },
  space: {
    marginVertical: height > 800 ? 0 : hp('1%'),
  },
  titleContainer: {
    paddingLeft: wp('2%'),
  },
});

export default UpgradeChangesWeDoScreen;
