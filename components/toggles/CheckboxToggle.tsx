// CheckboxToggle.tsx
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {UncheckedIcon} from '../theme/icons/UncheckedIcon';
import {CheckmarkIcon} from '../theme/icons/CheckboxIcon';
import Colours from '../theme/Colour';

interface CheckboxProps {
  checked: boolean;
  onToggle: () => void;
  disabled?: boolean; // Optional disabled prop
}

const CheckboxToggle: React.FC<CheckboxProps> = ({
  checked,
  onToggle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={disabled ? undefined : onToggle}
      disabled={disabled}
      accessibilityRole="checkbox"
      accessibilityState={{checked: !!checked}} // Indicated the checked state for accessibility
      accessibilityLiveRegion="polite" // Added live region for accessibility
      accessibilityLabel={checked ? 'Checked' : 'Unchecked'}>
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
