import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Text from '../components/Text';
import PinkButton from '../components/theme/buttons/PinkButton';
import Colours from '../components/theme/Colour';
import stepsData from '../components/StepsData';
import {NavigationProps} from '../navigationTypes';
import {useUserContext} from '../components/UserContext';
import {
  commonStepCircleStyles,
  commonStepNumberStyles,
  commonStepContentStyles,
} from './Common/CommonStyles';

type UpgradeStepper3Props = NavigationProps<'StepperScreen3'>;

const StepperScreen3: React.FC<UpgradeStepper3Props> = ({navigation}) => {
  // Access isDarkMode from context
  const {isDarkMode} = useUserContext();

  const activeColor = isDarkMode ? Colours.white : Colours.black;

  const inactiveColor = isDarkMode ? Colours.black60 : Colours.black60;

  const activeCircle = isDarkMode ? Colours.black : Colours.white;

  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeTaxReporting');
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
      <PinkButton
        buttonText="Tax reporting"
        onPress={handleSwitchButtonPress}
        testID="taxReportingButton"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.black,
    flexDirection: 'column',
    padding: 16,
  },
  marginLeft: {
    marginLeft: 10,
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
    width: 2,
    height: '20%',
    backgroundColor: Colours.black60,
    left: 24,
    top: 210,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  completeLine: {
    position: 'absolute',
    width: 2,
    height: '15%',
    left: 24,
    backgroundColor: Colours.green,
    top: 40,
  },
  activeLine: {
    position: 'absolute',
    width: 2,
    height: '15%',
    left: 24,
    backgroundColor: Colours.white,
    top: 130,
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
    marginTop: 10,
  },
  inactiveStepTitle: {
    marginTop: 10,
  },
  // activeStepDescription: {
  // },
  // inactiveStepDescription: {
  // },
  margin: {
    marginTop: 0,
  },
  activeStepCircle: {
    width: 48,
    height: 48,

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -60,
  },
  inactiveStepCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default StepperScreen3;
