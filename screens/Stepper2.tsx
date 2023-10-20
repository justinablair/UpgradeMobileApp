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
          <View style={styles.lineContainer}>
            {/* <View style={styles.line} /> */}
          </View>
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
      <PinkButton
        buttonText="Your consents"
        onPress={handleSwitchButtonPress}
      />
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
    padding: 16,
  },
  scrollContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 20,
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
    top: 250,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  completeLine: {
    position: 'absolute',
    width: 2,
    height: '25%',
    left: 24,
    backgroundColor: Colours.green,
    top: 30,
  },
  activeLine: {
    position: 'absolute',
    width: 2,
    height: '15%',
    left: 24,
    top: 145,
  },
  stepCircle: {
    ...commonStepCircleStyles.stepCircle,
  },
  stepNumber: {
    ...commonStepNumberStyles.stepNumber,
  },
  activeStepNumber: {
    fontSize: 18,
    // color: Colours.white,
  },
  inactiveStepCircle: {
    ...commonStyles.stepCircle,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  stepContent: {
    ...commonStepContentStyles.stepContent,
  },
  activeStepTitle: {
    // color: Colours.white,
    marginTop: 10,
  },
  inactiveStepTitle: {
    marginTop: 10,
  },

  margin: {
    marginTop: 0,
  },
  activeStepCircle: {
    ...commonStyles.stepCircle,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -60,
  },
});

export default StepperScreen2;
