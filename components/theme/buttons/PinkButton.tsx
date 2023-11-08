import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  AccessibilityState,
} from 'react-native';
import {useUserContext} from '../../UserContext';
import Colours from '../Colour';

interface PinkButtonProps {
  buttonText: string;
  onPress: () => void;
  disabled?: boolean;
  customWidth?: number;
  accessible?: boolean;
  accessibilityLabel?: string;
  accessibilityState?: AccessibilityState;
  accessibilityHint?: string;
  testID?: string;
}

const PinkButton: React.FC<PinkButtonProps> = ({
  buttonText,
  onPress,
  disabled = false,
  customWidth,
  accessibilityLabel,
  accessibilityHint,
  testID,
}) => {
  const {isDarkMode} = useUserContext();
  const disabledButton = isDarkMode
    ? Colours.disabledPinkDark
    : Colours.disabledPinkLight;
  const disabledText = isDarkMode ? Colours.disabledWhite : Colours.white;

  const buttonStyle: ViewStyle = {
    backgroundColor: disabled ? disabledButton : Colours.pink,
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    zIndex: 1,
    width: customWidth || 327,
  };

  const textStyle: TextStyle = {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    color: disabled ? disabledText : 'white',
  };

  const accessibilityState: AccessibilityState = {
    disabled: disabled,
  };
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
      disabled={disabled}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityState={accessibilityState}
      testID={testID}>
      <Text
        style={[styles.buttonText, textStyle]}
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
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default PinkButton;
