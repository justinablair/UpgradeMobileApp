//Stepper1.tsx

import React from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import Text from '../../components/Text';
import PinkButton from '../../components/theme/buttons/PinkButton';
import stepsData from '../../components/StepsData';
import Colours from '../../components/theme/Colour';
import {NavigationProps} from '../../navigationTypes';
import {useUserContext} from '../../components/UserContext';
import {
  commonStepCircleStyles,
  commonStepNumberStyles,
  commonStepContentStyles,
} from '../Common/CommonStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {height} = Dimensions.get('window');

type UpgradeStepper1Props = NavigationProps<'StepperScreen1'>;

const StepperScreen1: React.FC<UpgradeStepper1Props> = ({navigation}) => {
  // Access isDarkMode from context
  const {isDarkMode} = useUserContext();

  const activeColor = isDarkMode ? Colours.white : Colours.black;

  const inactiveColor = isDarkMode ? Colours.black60 : Colours.black60;

  const activeCircle = isDarkMode ? Colours.black : Colours.white;

  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeChangesWeDo');
  };

  return (
    <View style={[styles.container, {backgroundColor: activeCircle}]}>
      <ScrollView
        contentContainerStyle={[
          styles.scrollContainer,
          {backgroundColor: activeCircle},
        ]}>
        {/* Indicator line for the steps */}
        <View style={styles.leftContainer}>
          <View style={styles.lineContainer} />
          {/* Active line showing progress */}
          <View style={[styles.activeLine, {backgroundColor: activeColor}]} />
          {/* Mapping through stepsData to display the steps */}
          {stepsData.map(item => (
            <View key={item.number} style={styles.stepContainer}>
              <View
                style={[
                  item.active
                    ? {
                        ...styles.activeStepCircle,
                        backgroundColor: activeCircle,
                        borderColor: activeColor,
                      }
                    : {
                        ...styles.inactiveStepCircle,
                        borderColor: inactiveColor,
                        backgroundColor: activeCircle,
                      },
                ]}>
                <Text
                  style={[
                    styles.stepNumber,
                    item.active ? {color: activeColor} : {color: inactiveColor},
                  ]}>
                  {item.number}
                </Text>
              </View>
              <View style={styles.stepContent}>
                <Text
                  variant="headerSmall leftAlign"
                  style={[
                    item.number === '1'
                      ? {...styles.activeStepTitle, color: activeColor}
                      : {...styles.inactiveStepTitle, color: inactiveColor},
                  ]}>
                  {item.title}
                </Text>
                <Text
                  variant="bodyText leftAlign"
                  style={[
                    item.number === '1'
                      ? {...styles.activeStepDescription, color: activeColor}
                      : {
                          ...styles.inactiveStepDescription,
                          color: inactiveColor,
                        },
                  ]}>
                  {item.description}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.padding}>
        <PinkButton
          buttonText="How it will work"
          onPress={handleSwitchButtonPress}
        />
      </View>
    </View>
  );
};
// Common styles used across components
const commonStyles = {
  stepCircle: {
    ...commonStepCircleStyles.stepCircle,
  },
  stepNumber: {
    ...commonStepNumberStyles.stepNumber,
  },
  stepContent: {
    ...commonStepContentStyles.stepContent,
  },
  inactiveStepTitle: {
    color: Colours.black60,
    marginTop: 10,
  },
  inactiveStepDescription: {
    color: Colours.black60,
  },
};

// Component-specific styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: wp('4%'),
  },
  scrollContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flex: 1,
    paddingRight: wp('5%'),
  },
  lineContainer: {
    position: 'absolute',
    width: 2,
    height: height > 700 ? hp('37%') : hp('48%'),
    backgroundColor: Colours.black60,
    left: wp('6%'),
    top: height > 700 ? hp('13%') : hp('13%'),
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: wp('1%'),

    marginBottom: wp('5%'),
  },
  activeLine: {
    position: 'absolute',
    width: 2,
    height: height > 700 ? hp('15%') : hp('20%'),
    left: wp('6%'),
    top: hp('5%'),
  },
  activeStepCircle: {
    ...commonStyles.stepCircle,
    width: wp('12%'),
    height: wp('12%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -hp('8%'),
  },
  inactiveStepCircle: {
    ...commonStyles.stepCircle,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp('2%'),
  },
  stepNumber: {
    fontSize: wp('4%'),
  },
  stepContent: {
    flex: 1,
    marginLeft: wp('5%'),
  },
  activeStepTitle: {
    marginTop: hp('1%'),
  },
  inactiveStepTitle: {
    marginTop: hp('2%'),
  },
  activeStepDescription: {
    color: Colours.white,
  },
  inactiveStepDescription: {
    color: Colours.black60,
  },
  margin: {
    marginTop: 0,
  },
  padding: {
    marginVertical: height > 700 ? hp('2%') : 0,
  },
});

export default StepperScreen1;
