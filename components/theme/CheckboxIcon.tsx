import React from 'react';
import Svg, {Path} from 'react-native-svg';
import Colours from './Colour'; // Update the path to Colour.js

type SvgCheckmarkProps = {
  fill?: string;
};

const CheckmarkSvg: React.FC<SvgCheckmarkProps> = ({fill}) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z"
      fill={fill}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.7695 5.67728C20.0858 5.94471 20.1254 6.41793 19.858 6.73424L10.5727 17.7167C10.4395 17.8742 10.2474 17.9699 10.0414 17.9813C9.83546 17.9927 9.63391 17.9188 9.48417 17.7769L4.73419 13.2769C4.43349 12.9921 4.42066 12.5174 4.70554 12.2167C4.99041 11.916 5.46511 11.9031 5.76581 12.188L9.93964 16.1422L18.7125 5.76579C18.9799 5.44948 19.4531 5.40985 19.7695 5.67728Z"
      fill="white"
    />
  </Svg>
);

CheckmarkSvg.defaultProps = {
  fill: Colours.blue,
};

export const CheckmarkIcon: React.FC<SvgCheckmarkProps> = CheckmarkSvg;
