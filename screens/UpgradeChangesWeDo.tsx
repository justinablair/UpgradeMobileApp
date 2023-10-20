import React, {FC} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  AccessibilityInfo,
  ViewStyle,
} from 'react-native';
import {NavigationProps} from '../navigationTypes';
import {useUserContext} from '../components/UserContext';
import ChangesWeDo from './Common/ChangesWeDo';
import Text from '../components/Text';
import PinkButton from '../components/theme/buttons/PinkButton';
import Colours from '../components/theme/Colour';

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

  // Use AccessibilityInfo to set accessibility focus on the title
  React.useEffect(() => {
    AccessibilityInfo.announceForAccessibility(
      'What we’ll do during the switch',
    );
  }, []);

  return (
    <SafeAreaView
      style={[styles.safeAreaContainer, {backgroundColor: backgroundColour}]}>
      <ScrollView>
        <View style={[styles.container, {backgroundColor: backgroundColour}]}>
          <View style={styles.titleContainer}>
            <Text
              variant="screenTitle"
              accessibilityRole="header"
              accessibilityLabel="Changes During Switch"
              style={{color: title}}>
              What we’ll do during the switch
            </Text>
            <View style={styles.space} />
          </View>
          {/* Render ChangesWeDo component */}
          <ChangesWeDo />
          <PinkButton
            buttonText="Next"
            onPress={handleSwitchButtonPress}
            accessibilityLabel="Next Button"
            testID="nextButton"
          />
        </View>
      </ScrollView>
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
});

export default UpgradeChangesWeDoScreen;
