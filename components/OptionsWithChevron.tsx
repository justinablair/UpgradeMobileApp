import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Text from '../components/Text';
import {ChevronRightIcon} from '../components/theme/ChevronRight';
import Colours from '../components/theme/Colour';
import {useUserContext} from './UserContext';

interface OptionsWithChevronProps {
  title: string;
  description?: string;
  onPress: () => void;
}

const OptionsWithChevron: React.FC<OptionsWithChevronProps> = ({
  title,
  description,
  onPress,
}) => {
  // Access isDarkMode from context
  const {isDarkMode} = useUserContext();
  // Setting text color based on the dark mode
  const colourMode = isDarkMode ? Colours.white : Colours.black;
  const blackShades = isDarkMode ? Colours.black05 : Colours.black60;

  return (
    <TouchableOpacity
      style={styles.optionContainer}
      onPress={onPress}
      testID="OptionsButton"
      accessible={true}
      accessibilityRole="button">
      {/* Option Content */}
      <View style={styles.optionContent} testID="OptionContent">
        {/* Title Text */}
        <Text
          variant="bodyText"
          style={{color: colourMode}}
          accessibilityRole="text">
          {title}
        </Text>
        {/* Description Text */}
        {description && (
          <Text
            variant="bodyText"
            style={{color: blackShades}}
            accessibilityRole="text">
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
    width: 327,
    marginBottom: 16,
  },
  optionContent: {
    flex: 1,
  },
});

export default OptionsWithChevron;
