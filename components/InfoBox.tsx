//InfoBox.tsx
import React, {ReactNode} from 'react';
import {View, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import Text from '../components/Text';
import Colours from '../components/theme/Colour';
import {useUserContext} from './UserContext';

interface InfoBoxProps {
  icon?: ReactNode; // Accept any icon component as a prop
  title: string;
  description: string;
  descriptionStyle?: TextStyle;
  titleStyle?: TextStyle; // Allow custom title style to be passed
}

const InfoBox: React.FC<InfoBoxProps> = ({
  icon,
  title,
  description,
  descriptionStyle = {},
  titleStyle = {}, // Default to an empty object
}) => {
  const {isDarkMode} = useUserContext(); // Access isDarkMode from context
  const colourMode = isDarkMode ? Colours.white : Colours.black;

  const boxColor = isDarkMode ? Colours.black90 : Colours.black05;

  return (
    <View style={[styles.box, {backgroundColor: boxColor}]}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.textContainer}>
        <Text variant="bodyTextBold" style={[titleStyle, {color: colourMode}]}>
          {title}
        </Text>
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
    width: 327, // Set the width to take the available space
  },
  iconContainer: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
});

export default InfoBox;
