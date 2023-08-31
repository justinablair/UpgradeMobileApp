//InfoBox.tsx
import React, {ReactNode} from 'react';
import {View, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import Text from '../components/Text';
import Colour from './theme/Colour';

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
  titleStyle,
}) => {
  return (
    <View style={styles.box}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.textContainer}>
        <Text variant="bodyTextBold" style={titleStyle}>
          {title}
        </Text>
        <Text variant="bodyText" style={[styles.description, descriptionStyle]}>
          {description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: Colour.black03,
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
  description: {
    color: Colour.black,
  },
});

export default InfoBox;
