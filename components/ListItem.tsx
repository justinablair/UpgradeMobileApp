import React from 'react';
import {View, StyleSheet, TextStyle, AccessibilityRole} from 'react-native';
import GreenTickSvg from '../components/theme/icons/GreenTickIcon';
import Text from '../components/Text';
import Colours from './theme/Colour';

type ListItemProps = {
  text: string;
  fill?: string;
  description?: string;
  textStyle?: TextStyle;
  accessibilityLabel?: string;
  accessibilityRole?: AccessibilityRole;
  accessible?: boolean;
};

// ListItem component renders a single list item with a green tick and text
const ListItem: React.FC<ListItemProps> = ({
  text,
  fill,
  description,
  textStyle,
  accessibilityLabel,
  accessibilityRole,
  accessible,
}) => (
  // Outer container for the list item
  <View
    style={styles.container}
    testID="ListItem"
    accessible={accessible}
    accessibilityLabel={accessibilityLabel}
    accessibilityRole={accessibilityRole}>
    {/* Container for the green tick icon */}
    <View
      style={styles.tickContainer}
      testID="TickContainer"
      accessibilityRole="image">
      <GreenTickSvg fill={fill} />
    </View>
    {/* Container for the text content */}
    <View testID="ListItemContainer" accessibilityRole="list">
      {/* Main text of the list item */}
      <Text variant="bodyText" style={textStyle}>
        {text}
      </Text>
      {/* Additional description text if available */}
      <Text variant="bodyTextDescription" style={{color: Colours.black60}}>
        {description}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tickContainer: {
    marginRight: 10,
  },
});

export default ListItem;
