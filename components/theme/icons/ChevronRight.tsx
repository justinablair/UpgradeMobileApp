import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import Colours from '../Colour'; // Update the path to Colour.js

type SvgChevronRightProps = {
  stroke?: string;
};

const ChevronRightSvg: React.FC<SvgChevronRightProps> = ({stroke}) => (
  <Svg width="32" height="32" viewBox="0 0 32 32">
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h32v32H0z" />
      <Path
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 9l6.904 6.904L13 22.807"
      />
    </G>
  </Svg>
);

ChevronRightSvg.defaultProps = {
  stroke: Colours.pink,
};

export const ChevronRightIcon: React.FC<SvgChevronRightProps> = ChevronRightSvg;
