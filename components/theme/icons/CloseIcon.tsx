import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import Colours from '../Colour'; // Update the path to Colour.js
import {StyleSheet, View} from 'react-native';

interface CloseSvgProps {
  fill?: string;
  accessibilityLabel?: string;
}

const CloseSvg: React.FC<CloseSvgProps> = ({fill, accessibilityLabel}) => (
  <Svg width="32" height="32" viewBox="0 0 32 32">
    <G stroke="none" strokeRule="evenodd">
      <Path
        d="M23.5303 9.53033C23.8232 9.23744 23.8232 8.76256 23.5303 8.46967C23.2374 8.17678 22.7626 8.17678 22.4697 8.46967L16 14.9393L9.53033 8.46967C9.23744 8.17678 8.76256 8.17678 8.46967 8.46967C8.17678 8.76256 8.17678 9.23744 8.46967 9.53033L14.9393 16L8.46967 22.4697C8.17678 22.7626 8.17678 23.2374 8.46967 23.5303C8.76256 23.8232 9.23744 23.8232 9.53033 23.5303L16 17.0607L22.4697 23.5303C22.7626 23.8232 23.2374 23.8232 23.5303 23.5303C23.8232 23.2374 23.8232 22.7626 23.5303 22.4697L17.0607 16L23.5303 9.53033Z"
        fill={fill}
        accessibilityLabel={accessibilityLabel}
      />
    </G>
  </Svg>
);

CloseSvg.defaultProps = {
  fill: Colours.pink,
};

const styles = StyleSheet.create({
  closeIconContainer: {
    marginRight: 16,
  },
});

export const CloseIcon: React.FC<CloseSvgProps> = ({fill}) => (
  <View style={styles.closeIconContainer}>
    <CloseSvg fill={fill} />
  </View>
);
