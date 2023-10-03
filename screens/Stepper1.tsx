import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Text from '../components/Text';
import PinkButton from '../components/theme/buttons/PinkButton';
import stepsData from '../components/StepsData';
import Colours from '../components/theme/Colour';
import {NavigationProps} from '../navigationTypes';

type UpgradeIntroProps = NavigationProps<'StepperScreen1'>;

const StepperScreen1: React.FC<UpgradeIntroProps> = ({navigation}) => {
  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeChangesWeDo');
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.leftContainer}>
          <View style={styles.lineContainer} />
          <View style={styles.activeLine} />
          {stepsData.map(item => (
            <View key={item.number} style={styles.stepContainer}>
              <View
                style={[
                  item.active
                    ? styles.activeStepCircle
                    : styles.inactiveStepCircle,
                ]}>
                <Text
                  style={[
                    styles.stepNumber,
                    item.active
                      ? styles.activeStepNumber
                      : styles.inactiveStepNumber,
                  ]}>
                  {item.number}
                </Text>
              </View>
              <View style={styles.stepContent}>
                <Text
                  variant="headerSmall leftAlign"
                  style={[
                    item.number === '1'
                      ? styles.activeStepTitle
                      : styles.inactiveStepTitle,
                  ]}>
                  {item.title}
                </Text>
                <Text
                  variant="bodyText leftAlign"
                  style={[
                    item.number === '1'
                      ? styles.activeStepDescription
                      : styles.inactiveStepDescription,
                  ]}>
                  {item.description}
                </Text>
              </View>
            </View>
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

export default StepperScreen1;
