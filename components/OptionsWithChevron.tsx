import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Text from '../components/Text';
import {ChevronRightIcon} from '../components/theme/ChevronRight'; // Import ChevronRightIcon
import Colours from '../components/theme/Colour'; // Import Colours

interface OptionsWithChevronProps {
  title: string;
  description?: string; // Make description optional
  onPress: () => void;
}

const OptionsWithChevron: React.FC<OptionsWithChevronProps> = ({
  title,
  description,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.optionContainer} onPress={onPress}>
      <View style={styles.optionContent}>
        <Text variant="bodyText" style={{color: Colours.black}}>
          {title}
        </Text>
        {description && (
          <Text variant="bodyText" style={{color: Colours.black60}}>
            {description}
          </Text>
        )}
      </View>
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
