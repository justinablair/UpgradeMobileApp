import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import Colours from './Colour'; // Update the path to Colour.js

interface ExportSvgProps {
  stroke?: string;
}

const ExportSvg: React.FC<ExportSvgProps> = ({
  stroke = Colours.pink,
  ...props
}) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path
        d="M6 20v6h20v-6m-10 1V6m6 6l-6-6-6 6"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </G>
  </Svg>
);

export const ExportIcon: React.FC<ExportSvgProps> = ExportSvg;
