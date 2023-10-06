import React from 'react';
import Svg, {Path} from 'react-native-svg';
import Colours from './Colour';

interface ChevronUpIconProps {
  fill?: string;
}

const ChevronUpIcon: React.FC<ChevronUpIconProps> = ({
  fill = Colours.pink,
  ...props
}) => (
  <Svg width="16" height="9" viewBox="0 0 16 9" {...props}>
    <Path
      d="M0.21967 8.18365C-0.0732233 7.89076 -0.0732233 7.41588 0.21967 7.12299L7.12341 0.219253C7.4163 -0.0736408 7.89118 -0.0736408 8.18407 0.219253L15.0878 7.12299C15.3807 7.41588 15.3807 7.89076 15.0878 8.18365C14.7949 8.47654 14.32 8.47654 14.0271 8.18365L7.65374 1.81024L1.28033 8.18365C0.987437 8.47654 0.512563 8.47654 0.21967 8.18365Z"
      fill={fill}
    />
  </Svg>
);

export default ChevronUpIcon;
