import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import Colours from './Colour'; // Update the path to Colour.js

interface ComputerSoftwareSvgProps {
  stroke?: string;
}

const ComputerSoftwareSvg: React.FC<ComputerSoftwareSvgProps> = ({stroke}) => (
  <Svg width="32" height="32" viewBox="0 0 32 32">
    <G fill="none" fillRule="evenodd">
      <Path d="M0 0h32v33H0z" />
      <Path
        d="M27.866 4a.75.75 0 01.75.75v23.116a.75.75 0 01-.75.75H4.75a.75.75 0 01-.75-.75V4.75A.75.75 0 014.75 4zm-.75 5.576H5.5v17.539h21.616V9.575zm-13.1 1.59a.75.75 0 01.971.239l.894 1.311.147-.011c.318-.017.636-.006.952.032l.146.021.985-1.243a.75.75 0 01.886-.223l.1.052 2.25 1.406a.75.75 0 01.278.961l-.687 1.429.04.058c.206.309.38.638.521.982l.024.062 1.57.23a.75.75 0 01.638.666l.003.103-.095 2.652a.75.75 0 01-.693.721l-1.578.12-.03.065a5.617 5.617 0 01-.129.247l-.141.238c-.099.158-.205.31-.319.457l-.044.054.584 1.47a.75.75 0 01-.249.878l-.095.06L18.6 25.45a.75.75 0 01-.972-.24l-.896-1.312-.146.013a5.586 5.586 0 01-.953-.033l-.145-.023-.984 1.246a.75.75 0 01-.886.223l-.1-.053-2.25-1.406a.75.75 0 01-.279-.96l.687-1.43-.04-.056a5.588 5.588 0 01-.52-.982l-.025-.063-1.57-.23a.75.75 0 01-.637-.666l-.003-.103.095-2.654a.75.75 0 01.693-.72l1.575-.119.03-.063c.165-.334.363-.65.591-.945l.043-.054-.583-1.469a.75.75 0 01.25-.879l.095-.06zm.11 1.639l-1.158.616.503 1.267a.75.75 0 01-.083.71l-.069.083c-.377.398-.67.866-.863 1.38a.75.75 0 01-.646.483l-1.359.102-.047 1.311 1.356.2a.75.75 0 01.572.427l.039.102c.154.521.412 1.008.758 1.43a.75.75 0 01.096.801l-.592 1.232 1.111.694.85-1.072a.75.75 0 01.655-.282l.107.018c.53.126 1.08.145 1.62.055a.75.75 0 01.742.318l.771 1.131 1.158-.617-.503-1.267a.75.75 0 01.084-.708l.068-.084a4.153 4.153 0 00.864-1.38.75.75 0 01.645-.483l1.358-.103.047-1.31-1.354-.199a.75.75 0 01-.573-.428l-.038-.101a4.087 4.087 0 00-.759-1.431.75.75 0 01-.096-.8l.592-1.233-1.112-.695-.848 1.072a.75.75 0 01-.654.281l-.107-.017a4.104 4.104 0 00-1.62-.055a.75.75 0 01-.743-.317l-.772-1.131zm.046 4.168a2.519 2.519 0 114.272 2.669 2.519 2.519 0 01-4.272-2.67zm2.676.471a1.019 1.019 0 10-1.081 1.726 1.019 1.019 0 001.081-1.726zM27.116 5.5H5.5v2.577h21.616V5.499zm-6.076.546a.729.729 0 11.001 1.457.729.729 0 010-1.457zm2.17 0a.73.73 0 110 1.459.73.73 0 010-1.459zm2.17 0a.729.729 0 110 1.457.729.729 0 010-1.457z"
        stroke={stroke}
      />
    </G>
  </Svg>
);

ComputerSoftwareSvg.defaultProps = {
  stroke: Colours.pink,
};

export const ComputerSoftwareIcon: React.FC<ComputerSoftwareSvgProps> =
  ComputerSoftwareSvg;
