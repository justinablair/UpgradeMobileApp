//Stepper3.tsx

import React from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import Text from '../../components/Text';
import PinkButton from '../../components/theme/buttons/PinkButton';
import Colours from '../../components/theme/Colour';
import stepsData from '../../components/StepsData';
import {NavigationProps} from '../../navigationTypes';
import {useUserContext} from '../../components/UserContext';
import {
  commonStepCircleStyles,
  commonStepNumberStyles,
  commonStepContentStyles,
} from './../Common/CommonStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {height} = Dimensions.get('window');

type UpgradeStepper3Props = NavigationProps<'StepperScreen3'>;

const StepperScreen3: React.FC<UpgradeStepper3Props> = ({navigation}) => {
  // Access isDarkMode from context
  const {isDarkMode} = useUserContext();

  const activeColor = isDarkMode ? Colours.white : Colours.black;

  const inactiveColor = isDarkMode ? Colours.black60 : Colours.black60;

  const activeCircle = isDarkMode ? Colours.black : Colours.white;

  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeTaxCompliant');
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
          <View style={styles.lineContainer}></View>
          <View style={styles.completeLine} />
          {/* Active line showing progress */}
          <View style={[styles.activeLine, {backgroundColor: activeColor}]} />
          {/* Mapping through stepsData to display the steps */}
          {stepsData.map((item, index) => (
            <View
              key={item.number}
              style={styles.stepContainer}
              testID={`step-${index + 1}`}>
              <View
                style={[
                  styles.stepCircle,
                  item.number === '1' || item.number === '2'
                    ? {
                        ...styles.stepCircle,
                        ...styles.marginLeft,
                        backgroundColor: Colours.green,
                        borderColor: Colours.green,
                      }
                    : item.number === '3'
                    ? {
                        ...styles.activeStepCircle,
                        borderColor: activeColor,
                        backgroundColor: activeCircle,
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
                    item.number === '1' || item.number === '2'
                      ? {color: Colours.green}
                      : item.number === '3'
                      ? {color: activeColor}
                      : {color: inactiveColor},
                  ]}>
                  {item.number}
                </Text>
              </View>
              <View style={styles.stepContent}>
                <Text
                  variant="headerSmall leftAlign"
                  style={[
                    item.number === '3'
                      ? {
                          ...styles.activeStepTitle,
                          color: activeColor,
                        }
                      : {
                          ...styles.inactiveStepTitle,
                          color: inactiveColor,
                        },
                  ]}>
                  {item.title}
                </Text>
                <Text
                  variant="bodyText leftAlign"
                  style={[
                    item.number === '3'
                      ? {color: activeColor}
                      : {
                          color: inactiveColor,
                        },
                  ]}>
                  {item.number === '1' || item.number === '2'
                    ? 'Completed'
                    : item.description}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.padding}>
        <PinkButton
          buttonText="Tax reporting"
          onPress={handleSwitchButtonPress}
          testID="taxReportingButton"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.black,
    flexDirection: 'column',
    padding: wp('4%'),
  },
  marginLeft: {
    marginLeft: wp('2.5%'),
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: Colours.black,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flex: 1,
    paddingRight: 20,
  },
  lineContainer: {
    position: 'absolute',
    width: wp('0.6%'),
    height: hp('15.5%'),
    backgroundColor: Colours.black60,
    left: wp('6%'),
    top: height > 700 ? 215 : 210,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('3%'),
  },
  completeLine: {
    position: 'absolute',
    width: wp('0.6%'),
    height: hp('15%'),
    left: wp('6%'),
    backgroundColor: Colours.green,
    top: hp('3%'),
  },
  activeLine: {
    position: 'absolute',
    width: wp('0.6%'),
    height: hp('15%'),
    left: wp('6%'),
    backgroundColor: Colours.white,
    top: height > 700 ? 105 : 125,
  },
  stepCircle: {
    ...commonStepCircleStyles.stepCircle,
  },
  stepNumber: {
    ...commonStepNumberStyles.stepNumber,
  },

  stepContent: {
    ...commonStepContentStyles.stepContent,
  },
  activeStepTitle: {
    marginTop: hp('1%'),
  },
  inactiveStepTitle: {
    marginTop: hp('2%'),
  },

  margin: {
    marginTop: 0,
  },
  activeStepCircle: {
    width: wp('12%'),
    height: wp('12%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -hp('5%'),
  },
  inactiveStepCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp('2.5%'),
  },
  padding: {
    paddingBottom: height > 800 ? hp('2%') : 0,
  },
});

export default StepperScreen3;
