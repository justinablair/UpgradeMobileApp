//StepperComplete.tsx

import React from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import Text from '../../components/Text';
import PinkButton from '../../components/theme/buttons/PinkButton';
import Colours from '../../components/theme/Colour';
import {NavigationProps} from '../../navigationTypes';
import {useUserContext} from '../../components/UserContext';
import stepsData from '../../components/StepsData';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {height} = Dimensions.get('window');

type UpgradeStepperCompleteProps = NavigationProps<'StepperComplete'>;

const StepperCompleteScreen: React.FC<UpgradeStepperCompleteProps> = ({
  navigation,
}) => {
  // Access isDarkMode from context
  const {isDarkMode} = useUserContext();

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
        {/* Indicator line for the steps */}
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
      <View style={styles.padding}>
        <PinkButton buttonText="Continue" onPress={handleSwitchButtonPress} />
      </View>
    </View>
  );
};

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
  },
  leftContainer: {
    flex: 1,
    paddingRight: wp('4%'),
  },
  lineContainer: {
    position: 'absolute',
    width: wp('0.6%'),
    height: hp('10%'),
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
    height: height > 700 ? hp('32%') : hp('40%'),
    left: wp('7%'),
    backgroundColor: Colours.green,
    top: hp('3%'),
  },
  stepCircle: {
    width: wp('9%'),
    height: wp('9%'),
    borderRadius: wp('6%'),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -hp('3%'),
  },
  stepNumber: {
    fontSize: wp('4%'),
  },
  stepContent: {
    flex: 1,
    marginLeft: wp('5%'),
  },
  padding: {
    paddingBottom: height > 800 ? hp('2%') : 0,
  },
});

export default StepperCompleteScreen;
