// DotsComponent.tsx

import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface DotsComponentProps {
  selectedCount: number;
  totalCount: number;
  color: string;
}

const DotsComponent: React.FC<DotsComponentProps> = ({
  selectedCount,
  totalCount,
  color,
}) => {
  return (
    <View style={styles.dotsContainer}>
      {Array.from({length: totalCount}).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            selectedCount > index && styles.selectedDot,
            {backgroundColor: color},
          ]}
          testID={`dot-${index}`}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    marginBottom: hp('1.3%'),
    height: hp('1.8%'),
  },
  dot: {
    width: wp('2.5%'),
    height: wp('2.5%'),
    borderRadius: 10,
    marginHorizontal: wp('2.1%'),
  },
  selectedDot: {
    width: wp('3.3%'),
    height: wp('3.3%'),
    borderRadius: 13,
  },
});

export default DotsComponent;
