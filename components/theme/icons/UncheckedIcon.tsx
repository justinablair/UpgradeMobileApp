import React from 'react';
import Svg, {Path} from 'react-native-svg';
import Colours from '../Colour'; // Update the path to Colour.js

interface UncheckedSvgProps {
  stroke?: string;
  fill?: string;
  accessibilityLabel?: string;
}

const UncheckedSvg: React.FC<UncheckedSvgProps> = ({
  stroke = Colours.black,
  fill = Colours.white,
  accessibilityLabel,
  ...props
}) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" {...props}>
    <Path
      d="M4 0.5H20C21.933 0.5 23.5 2.067 23.5 4V20C23.5 21.933 21.933 23.5 20 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4C0.5 2.067 2.067 0.5 4 0.5Z"
      stroke={stroke}
      fill={fill}
      accessibilityLabel={accessibilityLabel}
    />
  </Svg>
);

export const UncheckedIcon: React.FC<UncheckedSvgProps> = UncheckedSvg;
