import React from 'react';
import Svg, {Circle, G, Path, Rect} from 'react-native-svg';
import Colours from './Colour';

interface CardSvgProps {
  stroke?: string;
  fill?: string;
}

const CardSvg: React.FC<CardSvgProps> = ({stroke, fill}) => (
  <Svg width="32" height="32" viewBox="0 0 32 32">
    <G fill="none" fillRule="evenodd">
      <Rect width="32" height="32" />
      <G transform="translate(2 5)">
        <Path
          stroke={stroke}
          strokeWidth="1.5"
          d="M3.8458278,0.75 C2.73982639,0.75 2.32052939,0.830969986 1.88843059,1.06205895 C1.53024305,1.25361974 1.25361974,1.53024305 1.06205895,1.88843059 C0.830969986,2.32052939 0.75,2.73982639 0.75,3.8458278 L0.75,18.1541722 C0.75,19.2601736 0.830969986,19.6794706 1.06205895,20.1115694 C1.25361974,20.4697569 1.53024305,20.7463803 1.88843059,20.937941 C2.32052939,21.16903 2.73982639,21.25 3.8458278,21.25 L24.1541722,21.25 C25.2601736,21.25 25.6794706,21.16903 26.1115694,20.937941 C26.4697569,20.7463803 26.7463803,20.4697569 26.937941,20.1115694 C27.16903,19.6794706 27.25,19.2601736 27.25,18.1541722 L27.25,3.8458278 C27.25,2.73982639 27.16903,2.32052939 26.937941,1.88843059 C26.7463803,1.53024305 26.4697569,1.25361974 26.1115694,1.06205895 C25.6794706,0.830969986 25.2601736,0.75 24.1541722,0.75 L3.8458278,0.75 Z"
        />
        <Rect width="28" height="2" y="6" fill={fill} />
        <Circle cx="21.5" cy="15.5" r="2.5" fill={fill} />
      </G>
    </G>
  </Svg>
);

CardSvg.defaultProps = {
  stroke: Colours.blue,
  fill: Colours.blue,
};

export default CardSvg;
