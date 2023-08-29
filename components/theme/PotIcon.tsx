import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import Colours from './Colour'; // Update the path to Colour.js
import {StyleSheet, View} from 'react-native';

interface PotSvgProps {
  stroke?: string;
}

const PotSvg: React.FC<PotSvgProps> = ({stroke}) => (
  <Svg width="32" height="32" viewBox="0 0 32 32">
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h32v32H0z" />
      <Path
        d="M24.5 9.5a1.5 1.5 0 010 3h-.407C26.031 14.138 27 16.445 27 19c0 4.97-4.925 9-11 9S5 23.97 5 19c0-2.555.969-4.862 2.907-6.5H7.5a1.5 1.5 0 010-3h17z"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <Path
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 3.5v3M21.5 5.5L20 7.002M10.5 5.5L12 7.002"
      />
    </G>
  </Svg>
);

PotSvg.defaultProps = {
  stroke: Colours.pink,
};

export const PotIcon: React.FC<PotSvgProps> = PotSvg;

interface PotSmallSvgProps {
  stroke?: string;
  backgroundColor?: string;
}

const PotSmallSvg: React.FC<PotSmallSvgProps> = ({stroke, backgroundColor}) => (
  <Svg width="32" height="32" viewBox="0 0 24 24">
    <G fill="none" fillRule="evenodd">
      <Path
        d="M17.817 8.062a1.013 1.013 0 010 2.025h-.3c1.334 1.106 2.001 2.663 2.001 4.388 0 3.355-3.39 6.075-7.57 6.075-4.182 0-7.572-2.72-7.572-6.075 0-1.725.667-3.282 2.001-4.388h-.3a1.012 1.012 0 110-2.025h11.74z"
        stroke={stroke}
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <Path
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.5v2.2M15.803 5.148l-.75.834M8.197 5.148l.75.834"
      />
    </G>
  </Svg>
);

PotSmallSvg.defaultProps = {
  stroke: Colours.pink,
};

export const PotSmallIcon: React.FC<PotSmallSvgProps> = PotSmallSvg;

interface PotBoxProps {
  children: React.ReactNode;
  backgroundColor?: string;
  size?: number;
}

export const PotBox: React.FC<PotBoxProps> = ({
  children,
  backgroundColor,
  size = 24,
}) => (
  <View style={[styles.box, {backgroundColor, width: size, height: size}]}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  box: {
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
