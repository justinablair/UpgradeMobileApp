// CheckboxToggle.tsx
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {UncheckedIcon} from '../components/theme/UncheckedIcon';
import {CheckmarkIcon} from '../components/theme/CheckboxIcon';
import Colours from '../components/theme/Colour';

interface CheckboxProps {
  checked: boolean;
  onToggle: () => void;
  disabled?: boolean; // Make the disabled prop optional
}

const CheckboxToggle: React.FC<CheckboxProps> = ({
  checked,
  onToggle,
  disabled = false, // Provide a default value of false
}) => {
  return (
    <TouchableOpacity onPress={onToggle} disabled={disabled}>
      {checked ? (
        <CheckmarkIcon />
      ) : (
        <UncheckedIcon stroke={disabled ? Colours.black30 : Colours.black} />
      )}
    </TouchableOpacity>
  );
};

export default CheckboxToggle;
