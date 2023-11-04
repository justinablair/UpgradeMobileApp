//OptionsWithChevron.tsx

import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  AccessibilityRole,
} from 'react-native';
import Text from '../components/Text';
import {ChevronRightIcon} from '../components/theme/icons/ChevronRight';
import Colours from '../components/theme/Colour';
import {useUserContext} from './UserContext';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface OptionsWithChevronProps {
  title: string;
  description?: string;
  onPress: () => void;
  accessible?: boolean;
  accessibilityRole?: AccessibilityRole | string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

const OptionsWithChevron: React.FC<OptionsWithChevronProps> = ({
  title,
  description,
  onPress,
  accessible = false,
  accessibilityRole,
  accessibilityLabel,
  accessibilityHint,
}) => {
  // Access isDarkMode from context
  const {isDarkMode} = useUserContext();
  // Setting text color based ron the dark mode
  const colourMode = isDarkMode ? Colours.white : Colours.black;

  const combinedAccessibilityValue = {
    text: `${title}. ${description}`,
  };

  return (
    <TouchableOpacity
      style={styles.optionContainer}
      onPress={onPress}
      testID="OptionsButton"
      accessible={accessible} // Set the accessible prop here
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityValue={combinedAccessibilityValue}>
      {/* Option Content */}
      <View style={styles.optionContent} testID="OptionContent">
        {/* Title Text */}
        <Text
          variant="bodyText"
          style={{color: colourMode}}
          accessibilityRole="text"
          accessible={true}>
          {title}
        </Text>
        {/* Description Text */}
        {description && (
          <Text
            variant="bodyText"
            style={{color: colourMode}}
            accessibilityRole="text"
            accessible={true}>
            {description}
          </Text>
        )}
      </View>
      {/* Chevron Icon */}
      <ChevronRightIcon stroke={Colours.pink} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('87.2%'),
    marginBottom: hp('2%'),
  },
  optionContent: {
    flex: 1,
  },
});

export default OptionsWithChevron;
