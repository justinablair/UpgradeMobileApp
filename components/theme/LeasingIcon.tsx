import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import Colours from './Colour'; // Update the path to Colour.js

interface SvgLeasingProps {
  stroke?: string;
}

const SvgLeasing: React.FC<SvgLeasingProps> = ({stroke}) => (
  <Svg width="32" height="32" viewBox="0 0 32 32">
    <G fill="none" fillRule="evenodd">
      <Path
        d="M24 4.25a.75.75 0 01.75.75v22a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V5A.75.75 0 016 4.25zm-.75 1.5H6.75v20.5h16.5V5.75zM21 23.25a.75.75 0 01.102 1.493L21 24.75h-5a.75.75 0 01-.102-1.493L16 23.25h5zm-8.719-3.853a.75.75 0 01.977 1.133l-1.334 1.333 1.334 1.334a.75.75 0 01-.977 1.133l-.084-.072-1.334-1.334-1.333 1.334-.084.072a.75.75 0 01-.976-1.133l1.332-1.334L8.47 20.53a.75.75 0 01.976-1.133l.084.073 1.333 1.332 1.334-1.332zM21 14.75a.75.75 0 01.102 1.493L21 16.25H9a.75.75 0 01-.102-1.493L9 14.75h12zm0-3a.75.75 0 01.102 1.493L21 13.25H9a.75.75 0 01-.102-1.493L9 11.75h12zm-6.429-3a.75.75 0 01.102 1.493l-.102.007H9a.75.75 0 01-.102-1.493L9 8.75h5.571z"
        stroke={stroke}
      />
    </G>
  </Svg>
);

SvgLeasing.defaultProps = {
  stroke: Colours.pink,
};

export const LeasingIcon: React.FC<SvgLeasingProps> = SvgLeasing;
