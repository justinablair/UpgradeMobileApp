//Stepper2.tsx

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

type UpgradeStepper2Props = NavigationProps<'StepperScreen2'>;

const StepperScreen2: React.FC<UpgradeStepper2Props> = ({navigation}) => {
  // Access isDarkMode from context
  const {isDarkMode} = useUserContext();

  const activeColor = isDarkMode ? Colours.white : Colours.black;

  const inactiveColor = isDarkMode ? Colours.black60 : Colours.black60;

  const activeCircle = isDarkMode ? Colours.black : Colours.white;

  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeTerms');
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
          <View style={[styles.activeLine, {backgroundColor: activeColor}]} />
          {/* Mapping through stepsData to display the steps */}
          {stepsData.map(item => (
            <View key={item.number} style={styles.stepContainer}>
              <View
                style={[
                  item.number === '1'
                    ? {
                        ...styles.activeStepCircle,
                        backgroundColor: Colours.green,
                        borderColor: Colours.green,
                      }
                    : item.number === '2'
                    ? {
                        ...styles.inactiveStepCircle,
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
                    item.active && item.number === '1'
                      ? {color: Colours.green}
                      : item.number === '2'
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
                    item.number === '2'
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
                    item.number === '2'
                      ? {color: activeColor}
                      : {
                          color: inactiveColor,
                        },
                  ]}>
                  {item.active && item.number === '1'
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
          buttonText="Your consents"
          onPress={handleSwitchButtonPress}
        />
      </View>
    </View>
  );
};

// Common styles used across components
const commonStyles = {
  stepCircle: {
    width: 32,
    height: 32,
    borderRadius: 24,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
  },
  stepNumber: {
    fontSize: 18,
  },
  stepContent: {
    flex: 1,
    marginLeft: 20,
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
    paddingTop: hp('2%'),
  },
  leftContainer: {
    flex: 1,
    paddingRight: wp('4%'),
  },
  lineContainer: {
    position: 'absolute',
    width: wp('0.5%'),
    height: hp('12%'),
    backgroundColor: Colours.black60,
    left: wp('6%'),
    top: height > 700 ? 230 : 250,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  completeLine: {
    position: 'absolute',
    width: wp('0.5%'),
    height: hp('14%'),
    left: wp('6%'),
    backgroundColor: Colours.green,
    top: hp('4%'),
  },
  activeLine: {
    position: 'absolute',
    width: wp('0.5%'),
    height: hp('15%'),
    left: wp('6%'),
    top: height > 700 ? 110 : 120,
  },
  stepCircle: {
    ...commonStepCircleStyles.stepCircle,
  },
  stepNumber: {
    ...commonStepNumberStyles.stepNumber,
  },
  activeStepNumber: {
    fontSize: hp('2.5%'),
  },
  inactiveStepCircle: {
    ...commonStyles.stepCircle,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp('2.5%'),
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
    ...commonStyles.stepCircle,
    width: wp('12%'),
    height: wp('12%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -hp('5%'),
  },
  padding: {
    paddingBottom: height > 700 ? hp('2%') : 0,
  },
});

export default StepperScreen2;
