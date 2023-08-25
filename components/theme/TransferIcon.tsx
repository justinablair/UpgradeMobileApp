import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import Colours from './Colour'; // Update the path to Colour.js

interface TransferSvgProps extends SvgProps {
  fill?: string;
}

const TransferSvg: React.FC<TransferSvgProps> = ({fill, ...props}) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" {...props}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M8.912 16.356a.697.697 0 0 1 .92.064l.064.073a.716.716 0 0 1-.063.93l-3.336 3.372h19.725l.118.008a.943.943 0 0 1 .819.939c0 .522-.42.946-.937.946H6.765l3.068 3.1.063.073a.716.716 0 0 1-.063.931.697.697 0 0 1-.993 0l-4.634-4.684-.063-.073a.716.716 0 0 1 .063-.93L8.84 16.42l.072-.064ZM23.088 5.144l.072.064 4.634 4.684a.716.716 0 0 1 .063.931l-.063.073-4.634 4.684a.697.697 0 0 1-.993 0 .716.716 0 0 1-.063-.931l.063-.073 3.109-3.144H5.15a.941.941 0 0 1-.936-.946c0-.482.357-.88.819-.939l.117-.007h20.31l-3.293-3.328a.716.716 0 0 1-.063-.931l.063-.073a.697.697 0 0 1 .921-.064Z"
      clipRule="evenodd"
    />
  </Svg>
);

TransferSvg.defaultProps = {
  fill: Colours.pink, // Use the updated variable name
};

export const TransferIcon: React.FC<TransferSvgProps> = TransferSvg;
