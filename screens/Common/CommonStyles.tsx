import {StyleSheet} from 'react-native';

export const commonStepCircleStyles = StyleSheet.create({
  stepCircle: {
    width: 32,
    height: 32,
    borderRadius: 24,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
  },
});

export const commonStepNumberStyles = StyleSheet.create({
  stepNumber: {
    fontSize: 18,
  },
});

export const commonStepContentStyles = StyleSheet.create({
  stepContent: {
    flex: 1,
    marginLeft: 20,
  },
});
