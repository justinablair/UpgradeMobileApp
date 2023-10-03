import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Text from '../components/Text';
import PinkButton from '../components/theme/buttons/PinkButton';
import Colours from '../components/theme/Colour';

const Step = ({item}) => {
  const isActive = item.active;
  let stepCircleStyles = styles.inactiveStepCircle;
  let stepNumberStyles = styles.inactiveStepNumber;
  let stepTitleStyles = styles.inactiveStepTitle;
  let stepDescriptionStyles = styles.inactiveStepDescription;

  if (isActive) {
    if (item.number === '1') {
      stepCircleStyles = {
        ...styles.stepCircle,
        width: 32,
        height: 32,
        backgroundColor: Colours.green,
        borderColor: Colours.black60,
      };
      stepNumberStyles = styles.inactiveStepNumber; // or styles.activeStepNumber if you want it to be white
      stepTitleStyles = styles.inactiveStepTitle; // or styles.activeStepTitle if you want it to be white
      stepDescriptionStyles = styles.inactiveStepDescription; // or styles.activeStepDescription if you want it to be white
    } else if (item.number === '2') {
      stepCircleStyles = {
        ...styles.activeStepCircle,
        width: 48,
        height: 48,
        borderColor: Colours.white,
        backgroundColor: Colours.black, // Background color for active step
      };
      stepNumberStyles = styles.activeStepNumber;
      stepTitleStyles = styles.activeStepTitle;
      stepDescriptionStyles = styles.activeStepDescription;
    }
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
          {isActive && item.number === '1' ? 'Completed' : item.description}
        </Text>
      </View>
    </View>
  );
};

const StepperScreen2 = () => {
  const handleSwitchButtonPress = () => {
    console.log('hello');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.leftContainer}>
          <View style={styles.lineContainer}>
            <View style={styles.line} />
          </View>
          <View style={styles.activeLine} />
          {stepsData.map(item => (
            <Step key={item.number} item={item} />
          ))}
        </View>
      </ScrollView>
      <PinkButton
        buttonText="How it will work"
        onPress={handleSwitchButtonPress}
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
    height: '40%',
    backgroundColor: Colours.black60,
    left: 24,
    top: 180,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  activeLine: {
    position: 'absolute',
    width: 2,
    height: '25%',
    left: 24,
    backgroundColor: Colours.white,
    top: 40,
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
});

export default StepperScreen2;
