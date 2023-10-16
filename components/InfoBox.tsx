//InfoBox.tsx
import React, {ReactNode} from 'react';
import {View, StyleSheet, TextStyle} from 'react-native';
import Text from '../components/Text';
import Colours from '../components/theme/Colour';
import {useUserContext} from './UserContext';

interface InfoBoxProps {
  icon?: ReactNode; // Accept any icon component as a prop
  title: string;
  description: string;
  descriptionStyle?: TextStyle;
  titleStyle?: TextStyle;
}

const InfoBox: React.FC<InfoBoxProps> = ({
  icon,
  title,
  description,
  descriptionStyle = {}, // Default to an empty object
  titleStyle = {},
}) => {
  // Accessing isDarkMode from context
  const {isDarkMode} = useUserContext();
  // Setting text color based on the dark mode
  const colourMode = isDarkMode ? Colours.white : Colours.black;
  // Setting the background color based on the dark mode
  const boxColor = isDarkMode ? Colours.black90 : Colours.black05;

  return (
    <View
      style={[styles.box, {backgroundColor: boxColor}]}
      testID="InfoBox"
      accessible={true}
      accessibilityRole="text">
      {/* Container for the icon */}
      <View style={styles.iconContainer}>{icon}</View>
      {/* Container for the text content */}
      <View style={styles.textContainer}>
        {/* Text component for the title */}
        <Text variant="bodyTextBold" style={[titleStyle, {color: colourMode}]}>
          {title}
        </Text>
        {/* Text component for the description */}
        <Text
          variant="bodyText"
          style={[descriptionStyle, {color: colourMode}]}>
          {description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 8,
    alignSelf: 'center',
    width: 327,
  },
  iconContainer: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
});

export default InfoBox;
