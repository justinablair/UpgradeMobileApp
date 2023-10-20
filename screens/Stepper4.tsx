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

interface StepperScreenProps extends UpgradeStepper4Props {
  stepsData: {
    number: string;
    title: string;
    description: string;
    active: boolean;
  }[];
}

type UpgradeStepper4Props = NavigationProps<'StepperScreen4'>;

const StepperScreen4: React.FC<StepperScreenProps> = ({
  navigation,
  stepsData,
}) => {
  const {isDarkMode} = useUserContext(); // Access isDarkMode from context

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
      <PinkButton
        buttonText="Confirm details"
        onPress={handleSwitchButtonPress}
      />
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
    padding: 16,
  },
  scrollContainer: {
    flexGrow: 1,
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
    height: '30%',
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
    top: 200,
  },
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
  activeStepTitle: {
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
  inactiveStepCircle: {
    ...commonStyles.stepCircle,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default StepperScreen4;
