//MobilePhone.tsx

import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import Colours from '../Colour'; // Update the path to Colour.js

interface MobilePhoneSvgProps {
  fill?: string;
}

const MobilePhoneSvg: React.FC<MobilePhoneSvgProps> = ({fill}) => (
  <Svg width="32" height="32" viewBox="0 0 32 32">
    <G stroke="none" strokeRule="evenodd">
      <Path
        d="M21.604 3.25C23.442 3.25 25 4.474 25 6.106v3.506a.75.75 0 01-.009.114l-.024.099v.66l.024.1.009.114v14.819c0 1.633-1.558 2.857-3.396 2.857H11.398C9.558 28.375 8 27.151 8 25.518V6.106C8 4.473 9.558 3.25 11.398 3.25zm0 1.5H11.398c-1.08 0-1.898.642-1.898 1.356v19.412c0 .714.818 1.357 1.898 1.357h10.206c1.078 0 1.896-.642 1.896-1.357l-.001-14.625-.023-.1-.008-.113V9.63a.75.75 0 01.008-.113l.023-.1v-3.31c0-.677-.733-1.29-1.727-1.352l-.168-.005zM16.5 24.464c.598 0 1.08.446 1.08.997 0 .552-.482 1-1.08 1-.597 0-1.081-.448-1.081-1 0-.55.484-.997 1.08-.997zm4.917-18.467c.368 0 .67.274.67.616v16.07c0 .342-.302.616-.67.616h-9.834c-.368 0-.67-.274-.67-.617V6.613c0-.342.302-.616.67-.616zm-.83 1.384h-8.174v14.533h8.174V7.381z"
        fill={fill}
      />
    </G>
  </Svg>
);

MobilePhoneSvg.defaultProps = {
  stroke: Colours.pink,
};

export const MobilePhoneIcon: React.FC<MobilePhoneSvgProps> = MobilePhoneSvg;
