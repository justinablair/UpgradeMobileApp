//LockedIcon.tsx

import React from 'react';
import Svg, {G, Circle, Line, Path} from 'react-native-svg';
import Colours from '../Colour'; // Update the path to Colour.js

interface LockedSvgProps {
  stroke?: string;
}

const LockedSvg: React.FC<LockedSvgProps> = ({stroke}) => (
  <Svg width="32" height="32" viewBox="0 0 32 32">
    <G stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <G
        transform="translate(10.000000, 2.000000)"
        stroke={stroke}
        strokeWidth="1.5">
        <G transform="translate(0.750000, 0.000000)">
          <G transform="translate(2.750000, 14.000000)">
            <Circle cx="2.5" cy="2.5" r="1.75" />
            <Line
              x1="2.5"
              y1="5"
              x2="2.5"
              y2="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </G>
          <Path
            d="M0.25,8.94466875 L0.25,6.07287388 C0.25,3.24064439 2.35689529,0.94466875 4.9558824,0.94466875 L5.5441176,0.94466875 C8.1431047,0.94466875 10.25,3.24064439 10.25,6.07287388 L10.25,8.94466875"
            strokeLinecap="round"
          />
        </G>
      </G>
      <Circle
        stroke={stroke}
        strokeWidth="1.5"
        cx="16"
        cy="19.4526188"
        r="9.25"
      />
    </G>
  </Svg>
);

LockedSvg.defaultProps = {
  stroke: Colours.pink,
};

export const LockedIcon: React.FC<LockedSvgProps> = LockedSvg;
