import React from 'react';
import {View, StyleSheet, TextStyle} from 'react-native';
import GreenTickSvg from '../components/theme/GreenTickIcon';
import Text from '../components/Text';
import Colours from './theme/Colour';

type ListItemProps = {
  text: string;
  fill?: string;
  description?: string;
  textStyle?: TextStyle; // Assign the TextStyle type for text styling
};

const ListItem: React.FC<ListItemProps> = ({
  text,
  fill,
  description,
  textStyle,
}) => (
  <View style={styles.container}>
    <View style={styles.tickContainer}>
      <GreenTickSvg fill={fill} />
    </View>
    <View>
      <Text variant="bodyText" style={textStyle}>
        {text}
      </Text>
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
