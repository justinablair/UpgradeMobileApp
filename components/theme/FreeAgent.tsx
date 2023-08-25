import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import Colours from './Colour'; // Update the path to Colour.js

interface FreeAgentSvgProps {
  stroke?: string;
}

const FreeAgentSvg: React.FC<FreeAgentSvgProps> = ({stroke}) => (
  <Svg width="32" height="32" viewBox="0 -1 32 30">
    <G fill={stroke} fillRule="nonzero">
      <Path d="M19.78 7.375l-2.37 5.658 2.287 5.078h-4.41l-1.661 3.907h7.799l1.547 3.357h4.904" />
      <Path d="M22.056.791c-4.188-.782-6.26 1.358-6.97 3.114-.14.339-.325.796-1.299 3.246-.788-8.264-8.995-.487-13.06-4.825-.634 3.748.773 4.19.773 4.19-.31 1.21.927 2.539 1.947 2.361.912 4.044 9.815-1.785 7.713 4.811-2.01 5.017-4.668 11.687-4.668 11.687H11.5s6.955-17.796 7.357-18.622c.541-1.107 2.272-1.535 3.663-.605l1.793-4.737a15.512 15.512 0 00-2.257-.62" />
    </G>
  </Svg>
);

FreeAgentSvg.defaultProps = {
  stroke: Colours.pink, // Use the updated variable name
};

export const FreeAgentIcon: React.FC<FreeAgentSvgProps> = FreeAgentSvg;
