import React from 'react';
import {G, Path, Svg} from 'react-native-svg';
import Colours from './Colour';

interface ChevronDownIconProps {
  fill?: string;
}

const ChevronDownIcon: React.FC<ChevronDownIconProps> = ({
  fill = Colours.pink,
  ...props
}) => (
  <Svg width="16" height="9" viewBox="0 0 16 9" {...props}>
    <G fill={fill} fillRule="evenodd">
      <Path
        d="M15.0878 0.21967C15.3807 0.512563 15.3807 0.987437 15.0878 1.28033L8.18406 8.18407C7.89116 8.47696 7.41629 8.47696 7.1234 8.18407L0.219657 1.28033C-0.0732365 0.987437 -0.0732365 0.512563 0.219657 0.21967C0.512549 -0.0732233 0.987424 -0.0732233 1.28032 0.21967L7.65373 6.59308L14.0271 0.21967C14.32 -0.0732233 14.7949 -0.0732233 15.0878 0.21967Z"
        fill={fill}
      />
    </G>
  </Svg>
);

export default ChevronDownIcon;
