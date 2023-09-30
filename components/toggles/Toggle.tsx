import React, {useMemo} from 'react';
import {Platform, StyleSheet, Switch, SwitchProps} from 'react-native';
import Colours from '../theme/Colour';

type Props = Omit<SwitchProps, 'trackColor' | 'thumbColor'>;

const notIOS = Platform.OS !== 'ios';

export const Toggle = (props: Props) => {
  const style = props.disabled && notIOS ? {opacity: 0.5} : undefined;

  const thumbColor = useMemo(() => {
    if (notIOS) {
      return props.value ? Colours.blue : Colours.white;
    }
    return Colours.white;
  }, [props.value]);

  return (
    <Switch
      {...props}
      trackColor={{
        true: notIOS ? Colours.blue40 : Colours.blue,
        false: Colours.black20,
      }}
      thumbColor={thumbColor}
      style={StyleSheet.compose(props.style, style)}
    />
  );
};
