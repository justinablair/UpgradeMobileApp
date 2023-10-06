import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Text from '../components/Text';
import PinkButton from '../components/theme/buttons/PinkButton';
import Colours from '../components/theme/Colour';
import stepsData from '../components/StepsData';
import {NavigationProps} from '../navigationTypes';

type StepItem = {
  number: string;
  title: string;
  description: string;
  active: boolean;
};
const Step = ({item}: {item: StepItem}) => {
  const isActive = item.active;
  let stepCircleStyles = styles.inactiveStepCircle;
  let stepNumberStyles = styles.inactiveStepNumber;
  let stepTitleStyles = styles.inactiveStepTitle;
  let stepDescriptionStyles = styles.inactiveStepDescription;

  if (item.number === '1' || item.number === '2') {
    stepCircleStyles = {
      ...styles.stepCircle,
      width: 32,
      height: 32,
      marginLeft: 10,
      backgroundColor: Colours.green,
      borderColor: Colours.green,
    };
    stepNumberStyles = {
      ...styles.stepNumber,
      color: Colours.green, // Set the color to green when active and number is '1' or '2'
    };
  } else if (item.number === '3') {
    stepCircleStyles = {
      ...styles.activeStepCircle,
      width: 48,
      height: 48,
      borderColor: 'white',
      backgroundColor: Colours.black,
      marginTop: -30,
    };
    stepNumberStyles = {
      ...styles.activeStepNumber,
      color: 'white',
    };
    stepTitleStyles = {
      ...styles.activeStepTitle,
      color: 'white',
    };
    stepDescriptionStyles = {
      ...styles.activeStepDescription,
      color: 'white',
    };
  }
  return (
    <View key={item.number} style={styles.stepContainer}>
      <View style={[styles.stepCircle, stepCircleStyles]}>
        <Text style={[styles.stepNumber, stepNumberStyles]}>{item.number}</Text>
      </View>
      <View style={styles.stepContent}>
        <Text variant="headerSmall leftAlign" style={stepTitleStyles}>
          {item.title}
        </Text>
        <Text variant="bodyText leftAlign" style={stepDescriptionStyles}>
          <Text variant="bodyText leftAlign" style={stepDescriptionStyles}>
            {item.number === '1' || item.number === '2'
              ? 'Completed'
              : item.description}
          </Text>
        </Text>
      </View>
    </View>
  );
};
type UpgradeStepper3Props = NavigationProps<'StepperScreen3'>;

const StepperScreen3: React.FC<UpgradeStepper3Props> = ({navigation}) => {
  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeTaxReporting');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.leftContainer}>
          <View style={styles.lineContainer}>
            <View style={styles.line} />
          </View>
          <View style={styles.completeLine} />
          <View style={styles.activeLine} />
          {stepsData.map(item => (
            <Step key={item.number} item={item} />
          ))}
        </View>
      </ScrollView>
      <PinkButton
        buttonText="Tax reporting"
        onPress={handleSwitchButtonPress}
      />
    </View>
  );
};
const commonStyles = {
  stepCircle: {
    width: 32,
    height: 32,
    borderRadius: 24,
    borderColor: '#747676',
    borderWidth: 1,
    backgroundColor: '#171B1B',
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
  inactiveStepTitle: {
    color: Colours.black60,
    marginTop: 10,
  },
  inactiveStepDescription: {
    color: Colours.black60,
  },
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.black,
    flexDirection: 'column',
    padding: 16,
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
    width: 32,
    height: 32,
    borderRadius: 24,
    borderColor: Colours.black60,
    borderWidth: 1,
    backgroundColor: Colours.black,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
  },
  stepNumber: {
    fontSize: 18,
  },
  activeStepNumber: {
    color: Colours.white,
  },
  inactiveStepNumber: {
    color: Colours.black60,
  },
  stepContent: {
    flex: 1,
    marginLeft: 20,
  },
  activeStepTitle: {
    color: Colours.white,
    marginTop: 10,
  },
  inactiveStepTitle: {
    color: Colours.black60,
    marginTop: 10,
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
  activeStepCircle: {
    ...commonStyles.stepCircle,
    width: 48,
    height: 48,
    borderColor: Colours.white,
    justifyContent: 'center',
    backgroundColor: Colours.black,
    alignItems: 'center',
    marginTop: -60,
  },
  inactiveStepCircle: {
    ...commonStyles.stepCircle,
    borderColor: Colours.black60,
    backgroundColor: Colours.black,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default StepperScreen3;
