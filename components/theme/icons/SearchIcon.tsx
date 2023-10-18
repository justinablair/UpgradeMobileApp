import React from 'react';
import Svg, {Path} from 'react-native-svg';
import Colours from '../Colour';

type Props = {
  stroke?: string;
};

const SearchIcon: React.FC<Props> = ({stroke = Colours.pink}) => (
  <Svg width="32" height="32" viewBox="0 0 32 32">
    <Path
      d="M21.24 19.902l4.288 4.287a.946.946 0 0 1-1.339 1.339l-4.287-4.288a8.043 8.043 0 1 1 1.338-1.338zm-1.908-.691a6.15 6.15 0 1 0-.121.121.958.958 0 0 1 .121-.121z"
      fill={stroke}
      fillRule="nonzero"
    />
  </Svg>
);

export default SearchIcon;
