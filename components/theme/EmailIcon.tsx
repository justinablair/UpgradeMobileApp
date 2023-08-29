import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import Colours from './Colour'; // Update the path to Colour.js

interface EmailSvgProps {
  stroke?: string;
}

const EmailSvg: React.FC<EmailSvgProps> = ({stroke}) => (
  <Svg width="32" height="32" viewBox="0 0 32 32">
    <G fill="none" fillRule="evenodd" stroke={stroke}>
      <G
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}>
        <Path
          d="M22.621 17.519H2.88c-1.176 0-2.129-.953-2.129-2.13V2.88c0-1.175.953-2.13 2.13-2.13H22.62c1.176 0 2.13.955 2.13 2.13v12.51c0 1.177-.954 2.13-2.13 2.13z"
          transform="translate(-993 -1244) translate(975 90) translate(18 1154) translate(3.5 7)"
        />
        <Path
          d="M.75 2.879l9.566 5.682c1.5.89 3.368.89 4.868 0l9.566-5.682"
          transform="translate(-993 -1244) translate(975 90) translate(18 1154) translate(3.5 7)"
        />
      </G>
    </G>
  </Svg>
);

EmailSvg.defaultProps = {
  stroke: Colours.pink,
};

export const EmailIcon: React.FC<EmailSvgProps> = EmailSvg;
