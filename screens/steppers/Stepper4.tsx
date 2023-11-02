//Stepper4.tsx

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

type UpgradeStepper4Props = NavigationProps<'StepperScreen4'>;

const StepperScreen4: React.FC<UpgradeStepper4Props> = ({navigation}) => {
  // Access isDarkMode from context
  const {isDarkMode} = useUserContext();

  const activeColor = isDarkMode ? Colours.white : Colours.black;
  const inactiveColor = isDarkMode ? Colours.black60 : Colours.black60;

  const activeCircle = isDarkMode ? Colours.black : Colours.white;

  const handleSwitchButtonPress = () => {
    navigation.navigate('ConfirmAddress');
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
          <View style={styles.lineContainer}>
            {/* <View style={styles.line} /> */}
          </View>
          {/* <View style={styles.completeLine} /> */}
          <View style={styles.completeLine} />
          <View style={[styles.activeLine, {backgroundColor: activeColor}]} />
          {/* Mapping through stepsData to display the steps */}
          {stepsData.map(item => (
            <View key={item.number} style={styles.stepContainer}>
              <View
                style={[
                  styles.stepCircle,
                  (item.number === '1' ||
                    item.number === '2' ||
                    item.number === '3') && {
                    marginLeft: 10,
                    backgroundColor: Colours.green,
                    borderColor: Colours.green,
                  },
                  item.number === '4' && {
                    ...styles.activeStepCircle,
                    width: 48,
                    height: 48,
                    borderColor: activeColor,
                    backgroundColor: activeCircle,
                    marginTop: -30,
                  },
                ]}>
                <Text
                  style={[
                    styles.stepNumber,
                    item.number !== '4'
                      ? {color: Colours.green}
                      : {color: activeColor},
                  ]}>
                  {item.number}
                </Text>
              </View>
              <View style={styles.stepContent}>
                <Text
                  variant="headerSmall leftAlign"
                  style={
                    item.number === '4'
                      ? {
                          color: activeColor,
                        }
                      : {
                          color: inactiveColor,
                          marginTop: 10,
                        }
                  }>
                  {item.title}
                </Text>
                <Text
                  variant="bodyText leftAlign"
                  style={
                    item.number === '4'
                      ? {color: activeColor}
                      : {color: inactiveColor}
                  }>
                  {item.number === '4' ? item.description : 'Completed'}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.padding}>
        <PinkButton
          buttonText="Confirm details"
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
};

// Component-specific styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.black,
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
    paddingRight: wp('4%'),
  },
  lineContainer: {
    position: 'absolute',
    width: wp('0.5%'),
    height: hp('20%'),
    left: wp('6%'),
    top: hp('25%'),
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('3%'),
  },
  completeLine: {
    position: 'absolute',
    width: wp('0.6%'),
    height: hp('30%'),
    left: wp('6%'),
    backgroundColor: Colours.green,
    top: hp('3%'),
  },
  activeLine: {
    position: 'absolute',
    width: wp('0.5%'),
    height: hp('15%'),
    left: wp('6%'),
    backgroundColor: Colours.white,
    top: height > 700 ? 180 : 200,
  },
  stepCircle: {
    width: wp('8%'),
    height: wp('8%'),
    borderRadius: wp('6%'),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -hp('3%'),
  },
  stepNumber: {
    fontSize: wp('5%'),
  },

  stepContent: {
    flex: 1,
    marginLeft: wp('5%'),
  },
  activeStepTitle: {
    marginLeft: wp('1%'),
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
  inactiveStepCircle: {
    ...commonStyles.stepCircle,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp('2.5%'),
  },
  padding: {
    paddingBottom: height > 700 ? hp('2%') : 0,
  },
});

export default StepperScreen4;
