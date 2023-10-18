import React, {useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';
import Colours from '../Colour';

interface TickSvgProps {
  stroke?: string;
  animated: boolean;
  show: boolean;
  delayInit?: number;
  delay?: number;
}

const AnimatedPath = Animated.createAnimatedComponent(Path);

const TickSvg: React.FC<TickSvgProps> = ({
  stroke,
  animated,
  show,
  delayInit,
  delay,
}) => {
  const value = useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = useState(animated ? show : true);
  const isInit = useRef(true);

  useEffect(() => {
    if (!animated) {
      return;
    }
    if (show) {
      setVisible(true);
    }
    Animated.timing(value, {
      toValue: show ? 1 : 2,
      duration: 250,
      delay: isInit.current && delayInit !== undefined ? delayInit : delay ?? 0,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished && !show) {
        value.setValue(0);
        setVisible(false);
      }
    });
    isInit.current = false;
  }, [value, animated, show, delayInit, delay]);

  const commonProps = {
    d: 'M7 17.643l6.333 6L25.713 9',
    stroke,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 2,
  } as const;

  return visible ? (
    <Svg width="32" height="32" viewBox="0 0 32 32">
      <G fill="none" fillRule="evenodd">
        {animated ? (
          <AnimatedPath
            {...commonProps}
            strokeDasharray={28}
            strokeDashoffset={value.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [28, 0, -28],
            })}
          />
        ) : (
          <Path {...commonProps} />
        )}
      </G>
    </Svg>
  ) : null;
};

TickSvg.defaultProps = {
  stroke: Colours.pink,
};

export default TickSvg;
