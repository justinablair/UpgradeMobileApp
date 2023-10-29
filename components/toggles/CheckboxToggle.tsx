import React from 'react';
import {
  TouchableOpacity,
  AccessibilityRole,
  AccessibilityState,
} from 'react-native';
import {UncheckedIcon} from '../theme/icons/UncheckedIcon';
import {CheckmarkIcon} from '../theme/icons/CheckboxIcon';
import Colours from '../theme/Colour';

interface CheckboxProps {
  checked: boolean;
  onToggle: () => void;
  disabled?: boolean;
  testID?: string;
  accessible?: boolean;
  accessibilityLabel?: string;
  accessibilityRole?: AccessibilityRole;
  accessibilityState?: AccessibilityState;
}

const CheckboxToggle: React.FC<CheckboxProps> = ({
  checked,
  onToggle,
  disabled = false,
  testID,
  accessible = false, // Default to false if not provided
  accessibilityLabel,
  accessibilityRole = 'checkbox',
}) => {
  const accessibilityState: AccessibilityState = {
    disabled: disabled,
    checked: checked,
  };

  const handleToggle = () => {
    if (!disabled) {
      onToggle();
    }
  };

  return (
    <TouchableOpacity
      testID={testID}
      onPress={handleToggle}
      disabled={disabled}
      accessible={accessible} // Set the accessible prop here
      accessibilityRole={accessibilityRole || 'checkbox'}
      accessibilityState={accessibilityState}
      accessibilityLiveRegion="polite"
      accessibilityLabel={accessibilityLabel}>
      {checked ? (
        <CheckmarkIcon accessibilityLabel="Checked" />
      ) : (
        <UncheckedIcon
          stroke={disabled ? Colours.black30 : Colours.black}
          accessibilityLabel="Unchecked"
        />
      )}
    </TouchableOpacity>
  );
};

export default CheckboxToggle;
