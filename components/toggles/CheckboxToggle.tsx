//CheckboxToggle.tsx
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
      accessibilityRole="checkbox" // Defines accessibility role as checkbox
      accessibilityState={{checked: !!checked}} // Indicates the checked state for accessibility
      accessibilityLiveRegion="polite" // Adds live region for accessibility
      accessibilityLabel={checked ? 'Checked' : 'Unchecked'} // Provides appropriate accessibility label
    >
      {checked ? (
        <CheckmarkIcon accessibilityLabel="Checked" /> // Displays the checkmark icon for checked state
      ) : (
        <UncheckedIcon
          stroke={disabled ? Colours.black30 : Colours.black} // Adjusts stroke color based on the disabled state
          accessibilityLabel="Unchecked"
        />
      )}
    </TouchableOpacity>
  );
};

export default CheckboxToggle;
