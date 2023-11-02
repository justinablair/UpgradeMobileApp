import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const commonStepCircleStyles = StyleSheet.create({
  stepCircle: {
    width: wp('8%'),
    height: wp('8%'),
    borderRadius: wp('6%'),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -hp('3%'),
  },
});

export const commonStepNumberStyles = StyleSheet.create({
  stepNumber: {
    fontSize: wp('5%'),
  },
});

export const commonStepContentStyles = StyleSheet.create({
  stepContent: {
    flex: 1,
    marginLeft: wp('5%'),
  },
});
export const commonSpaceStyles = StyleSheet.create({
  spacing: {
    paddingLeft: wp('2%'),
  },
});
