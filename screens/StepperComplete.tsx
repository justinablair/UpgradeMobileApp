import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Text from '../components/Text';
import PinkButton from '../components/theme/buttons/PinkButton';
import Colours from '../components/theme/Colour';
import stepsData from '../components/StepsData';
import {NavigationProps} from '../navigationTypes';
import {useUserContext} from '../components/UserContext';

interface StepperScreenProps extends UpgradeStepperCompleteProps {
  stepsData: {
    number: string;
    title: string;
    description: string;
    active: boolean;
  }[];
}

type UpgradeStepperCompleteProps = NavigationProps<'StepperComplete'>;

const StepperCompleteScreen: React.FC<StepperScreenProps> = ({
  navigation,
  stepsData,
}) => {
  const {isDarkMode} = useUserContext(); // Access isDarkMode from context

  const inactiveColor = isDarkMode ? Colours.black60 : Colours.black60;

  const activeCircle = isDarkMode ? Colours.black : Colours.white;
  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeConfirm');
  };

  return (
    <View style={[styles.container, {backgroundColor: activeCircle}]}>
      <ScrollView
        contentContainerStyle={[
          styles.scrollContainer,
          {backgroundColor: activeCircle},
        ]}>
        <View style={styles.leftContainer}>
          <View style={styles.lineContainer} />
          <View style={styles.completeLine} />
          {stepsData.map(item => (
            <View key={item.number} style={styles.stepContainer}>
              <View
                style={[
                  styles.stepCircle,
                  {
                    marginLeft: 10,
                    backgroundColor: Colours.green,
                    borderColor: Colours.green,
                  },
                ]}>
                <Text
                  style={[
                    styles.stepNumber,
                    {
                      color: Colours.green,
                    },
                  ]}>
                  {item.number}
                </Text>
              </View>
              <View style={styles.stepContent}>
                <Text
                  variant="headerSmall leftAlign"
                  style={{
                    color: inactiveColor,
                    marginTop: 10,
                  }}>
                  {item.title}
                </Text>
                <Text
                  variant="bodyText leftAlign"
                  style={{
                    color: inactiveColor,
                  }}>
                  Completed
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <PinkButton buttonText="Continue" onPress={handleSwitchButtonPress} />
    </View>
  );
};

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
  },
  leftContainer: {
    flex: 1,
    paddingRight: 20,
  },
  lineContainer: {
    position: 'absolute',
    width: 2,
    height: '10%',
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
    height: '50%',
    left: 24,
    backgroundColor: Colours.green,
    top: 40,
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
});

export default StepperCompleteScreen;
