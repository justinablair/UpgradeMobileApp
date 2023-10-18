//Toggle.tsx
import React, {useMemo} from 'react';
import {Platform, StyleSheet, Switch, SwitchProps} from 'react-native';
import Colours from '../theme/Colour';

type ToggleProps = Omit<SwitchProps, 'trackColor' | 'thumbColor'> & {
  label?: string;
  accessibilityLabel?: string;
  testID?: string;
  onValueChange: (value: boolean) => void; // Make sure to include the onValueChange prop
};

const Toggle: React.FC<ToggleProps> = props => {
  const {testID, onValueChange} = props;

  const isNotIOS = Platform.OS !== 'ios';
  const disabledStyle = props.disabled && isNotIOS ? {opacity: 0.5} : undefined;

  const thumbColor = useMemo(() => {
    if (isNotIOS) {
      return props.value ? Colours.blue : Colours.white;
    }
    return Colours.white;
  }, [props.value]);

  const handleValueChange = (value: boolean) => {
    onValueChange(value); // Ensure that the onValueChange prop is being triggered correctly
  };

  return (
    <Switch
      testID={testID}
      {...props}
      trackColor={{
        true: isNotIOS ? Colours.blue40 : Colours.blue,
        false: Colours.black20,
      }}
      thumbColor={thumbColor}
      style={StyleSheet.compose(props.style, disabledStyle)}
      onValueChange={handleValueChange} // Call the handleValueChange function when the switch value changes
    />
  );
};

export default Toggle;
