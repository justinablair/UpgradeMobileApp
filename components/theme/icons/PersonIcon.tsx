//PersonIcon.tsx
import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import Colours from '../Colour';

type SvgPersonProps = {
  fill?: string;
};

const PersonalSvg: React.FC<SvgPersonProps> = ({fill}) => (
  <Svg width="32" height="32" viewBox="0 0 32 32">
    <G fill="none" fillRule="evenodd">
      <Path
        d="M18.508 15.94c3.228 0 5.512 2.049 6.574 5.237.58 1.743.555 3.56-.066 5.425l-.123.35-.182.489H6.789l-.182-.489c-.739-1.989-.805-3.923-.189-5.775 1.036-3.11 3.191-5.116 6.29-5.23l.284-.006h5.516zm0 1.5h-5.516c-2.53 0-4.27 1.568-5.15 4.211-.443 1.329-.457 2.707-.036 4.154l.042.135h15.803l.043-.135c.42-1.447.407-2.825-.036-4.154-.845-2.538-2.524-4.103-4.901-4.205l-.249-.005zM15.75 4.5a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
        fill={fill}
      />
    </G>
  </Svg>
);

PersonalSvg.defaultProps = {
  fill: Colours.pink,
};

export const PersonIcon: React.FC<SvgPersonProps> = PersonalSvg;
