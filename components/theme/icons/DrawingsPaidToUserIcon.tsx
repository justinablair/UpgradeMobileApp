import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import Colours from '../Colour'; // Update the path to Colour.js

interface SvgDrawingsPaidToUserProps {
  stroke?: string;
}

const SvgDrawingsPaidToUser: React.FC<SvgDrawingsPaidToUserProps> = ({
  stroke,
}) => (
  <Svg width="32" height="32" viewBox="-6 -2 32 28">
    <G fill="none" fillRule="evenodd">
      <Path
        d="M12.758 11.94c3.228 0 5.512 2.049 6.574 5.237.580 1.743.555 3.560-.066 5.425l-.123.350-.182.489H1.039l-.182-.489C.118 20.963.052 19.030.668 17.177c1.036-3.110 3.191-5.116 6.290-5.230l.284-.006h5.516zm0 1.500H7.242c-2.530 0-4.270 1.568-5.150 4.211-.443 1.329-.457 2.707-.036 4.154l.042.135h15.803l.043-.135c.420-1.447.407-2.825-.036-4.154-.844-2.538-2.524-4.103-4.901-4.205l-.249-.005zM10 .500a5 5 0 110 10 5 5 0 010-10zm12.496.827c2.143 0 2.810 1.330 2.866 2.416L24 3.973c-.014-1.004-.627-1.479-1.476-1.479-.737 0-1.419.475-1.419 1.358 0 .570.223 1.072.460 1.602h2.699V6.620h-2.338c.014.122.028.244.028.366 0 .950-.487 1.738-1.322 2.159h2.825c.946 0 1.336-.692 1.336-1.440l1.308.191c0 1.412-.863 2.430-2.310 2.430H19.1v-1.290c.946-.380 1.530-1.140 1.530-1.900 0-.177-.013-.353-.055-.516h-1.392V5.454h.975c-.210-.462-.418-.964-.418-1.602 0-1.453 1.210-2.525 2.756-2.525zM10 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
        fill={stroke || Colours.pink}
      />
    </G>
  </Svg>
);

export const DrawingsPaidToUserIcon: React.FC<SvgDrawingsPaidToUserProps> =
  SvgDrawingsPaidToUser;
