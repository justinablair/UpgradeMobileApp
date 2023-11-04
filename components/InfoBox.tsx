//InfoBox.tsx

import React, {ReactNode} from 'react';
import {View, StyleSheet, TextStyle} from 'react-native';
import Text from '../components/Text';
import Colours from '../components/theme/Colour';
import {useUserContext} from './UserContext';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface InfoBoxProps {
  icon?: ReactNode; // Accept any icon component as a prop
  title: string;
  description: string;
  descriptionStyle?: TextStyle;
  titleStyle?: TextStyle;
  accessible?: boolean;
  accessibilityRole?: string;
  accessibilityLabel?: string;
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
    <View style={[styles.box, {backgroundColor: boxColor}]} testID="InfoBox">
      {/* Container for the icon */}
      <View
        style={styles.iconContainer}
        accessible={true}
        accessibilityRole={'image'}>
        {icon}
      </View>
      {/* Container for the text content */}
      <View style={styles.textContainer}>
        {/* Text component for the title */}
        <Text
          variant="bodyTextBold"
          style={[titleStyle, {color: colourMode}]}
          accessible={true}
          accessibilityRole="header">
          {title}
        </Text>
        {/* Text component for the description */}
        <Text
          variant="bodyText"
          style={[descriptionStyle, {color: colourMode}]}
          accessible={true}
          accessibilityRole="text"
          accessibilityLabel="description">
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
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
    marginBottom: hp('1.6%'),
    alignSelf: 'center',
    width: wp('87.2%'),
  },
  iconContainer: {
    marginRight: wp('4.9%'),
  },
  textContainer: {
    flex: 1,
  },
});

export default InfoBox;
