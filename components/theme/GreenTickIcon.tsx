import React from 'react';
import {Path, G, Svg} from 'react-native-svg';
import Colours from './Colour'; // Update the path to Colour.js

type SvgGreenTickProps = {
  fill?: string;
};

const GreenTickSvg: React.FC<SvgGreenTickProps> = ({fill}) => (
  <Svg width="21" height="17" viewBox="0 0 21 17">
    <G fill="none" fillRule="evenodd">
      <Path
        fill={fill || Colours.green}
        fillRule="evenodd"
        d="M20.3593 0.23636C20.781 0.592934 20.8339 1.22389 20.4773 1.64564L8.09695 16.2889C7.91938 16.4989 7.66316 16.6265 7.38856 16.6417C7.11395 16.6569 6.84521 16.5584 6.64556 16.3692L0.312256 10.3692C-0.0886758 9.98939 -0.105781 9.35645 0.274051 8.95552C0.653883 8.55459 1.28682 8.53749 1.68775 8.91732L7.25286 14.1896L18.95 0.354371C19.3066 -0.0673789 19.9375 -0.120214 20.3593 0.23636Z"
      />
    </G>
  </Svg>
);

export default GreenTickSvg;
