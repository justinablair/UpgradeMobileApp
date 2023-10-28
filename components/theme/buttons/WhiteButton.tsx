import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colours from '../Colour';
import {useUserContext} from '../../UserContext';

interface WhiteButtonProps {
  buttonText: string;
  onPress: () => void;
  customWidth?: number;
  accessible?: boolean;
  accessibilityLabel?: string;
  testID?: string;
}

const WhiteButton: React.FC<WhiteButtonProps> = ({
  buttonText,
  onPress,
  customWidth,
  accessibilityLabel,
  testID,
}) => {
  const {isDarkMode} = useUserContext();

  const backgroundColour = isDarkMode ? Colours.black : Colours.white;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {width: customWidth || 327},
        {backgroundColor: backgroundColour},
      ]}
      onPress={onPress}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      testID={testID}>
      <Text
        style={styles.buttonText}
        accessible={true}
        testID="buttonText"
        accessibilityRole="text"
        accessibilityLabel={accessibilityLabel}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: Colours.pink,
    borderWidth: 1,
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    color: Colours.pink,
  },
});

export default WhiteButton;
