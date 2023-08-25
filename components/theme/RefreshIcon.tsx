import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import Colours from './Colour'; // Update the path to Colour.js

interface RefreshSvgProps {
  stroke?: string;
}

const RefreshSvg: React.FC<RefreshSvgProps> = ({stroke}) => (
  <Svg width="32" height="32" viewBox="0 0 32 32">
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h32v33H0z" />
      <Path
        d="M20.31 11h6V5"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <Path
        d="M25.928 10.693A11.486 11.486 0 0 0 16 5C9.649 5 4.5 10.149 4.5 16.5S9.649 28 16 28s11.5-5.149 11.5-11.5c0-.239-.007-.476-.022-.712"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);

RefreshSvg.defaultProps = {
  stroke: Colours.pink, // Use the updated variable name
};

export const RefreshIcon: React.FC<RefreshSvgProps> = RefreshSvg;
