import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import Colours from './Colour'; // Update the path to Colour.js

interface SvgPostageProps {
  stroke?: string;
}

const SvgPostage: React.FC<SvgPostageProps> = ({stroke}) => (
  <Svg width="32" height="32" viewBox="0 0 32 32">
    <G fill="none" fillRule="evenodd">
      <Path
        d="M29 6.25a.75.75 0 01.75.75v18a.75.75 0 01-.75.75H3a.75.75 0 01-.75-.75V7A.75.75 0 013 6.25zm-.75 1.5H3.75v16.5h24.5V7.75zM16.5 20a.5.5 0 01.09.992L16.5 21h-10a.5.5 0 01-.09-.992L6.5 20h10zm-1-2a.5.5 0 01.09.992L15.5 19h-9a.5.5 0 01-.09-.992L6.5 18h9zm-2-2a.5.5 0 01.09.992L13.5 17h-7a.5.5 0 01-.09-.992L6.5 16h7zM27 9v7h-5v-1.671a7.973 7.973 0 01-1.329-.277l-.316-.1c-1.464-.493-2.836-.432-4.143.179a.5.5 0 01-.424-.906c1.453-.68 2.99-.784 4.586-.316l.3.095c.452.152.894.257 1.327.317v-.992a7.973 7.973 0 01-1.33-.277l-.316-.1c-1.464-.493-2.836-.432-4.143.179a.5.5 0 01-.424-.906c1.453-.68 2.99-.784 4.586-.316l.3.095c.452.152.894.257 1.327.317L22 9h5zm-1 1h-3v1.375a5.586 5.586 0 001.823-.365.5.5 0 11.354.935 6.582 6.582 0 01-2.176.43v1a5.586 5.586 0 001.822-.365.5.5 0 11.354.935 6.582 6.582 0 01-2.176.43L23 15h3v-5z"
        fill={stroke}
      />
    </G>
  </Svg>
);

SvgPostage.defaultProps = {
  stroke: Colours.pink, // Use the updated variable name
};

export const PostageIcon: React.FC<SvgPostageProps> = SvgPostage;
