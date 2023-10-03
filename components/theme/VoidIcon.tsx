import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

type VoidIconSvgProps = {
  fill?: string;
};

const VoidIcon: React.FC<VoidIconSvgProps> = ({fill}) => (
  <Svg width="20" height="20" viewBox="0 0 20 20">
    <G fill="none" fillRule="evenodd">
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M1.5 10C1.5 5.30558 5.30558 1.5 10 1.5C14.6944 1.5 18.5 5.30558 18.5 10C18.5 14.6944 14.6944 18.5 10 18.5C5.30558 18.5 1.5 14.6944 1.5 10ZM10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM5.05023 9.25C4.63602 9.25 4.30023 9.58579 4.30023 10C4.30023 10.4142 4.63602 10.75 5.05023 10.75H14.9497C15.3639 10.75 15.6997 10.4142 15.6997 10C15.6997 9.58579 15.3639 9.25 14.9497 9.25H5.05023Z"
      />
    </G>
  </Svg>
);

export default VoidIcon;
