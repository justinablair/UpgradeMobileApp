import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Text from '../components/Text';
import PinkButton from '../components/theme/buttons/PinkButton';
import CheckboxToggle from '../components/toggles/CheckboxToggle'; // Import the CheckboxToggle component

import {NavigationProps} from '../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../components/theme/Colour';

type UpgradeTaxCompliantProps = NavigationProps<'UpgradeTaxCompliant'>;

const UpgradeTaxCompliantScreen: React.FC<UpgradeTaxCompliantProps> = ({
  navigation,
}) => {
  const [isChecked, setIsChecked] = useState(false); // State to track the checkbox

  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeTaxReporting'); // Navigate to the desired screen
  };

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked); // Toggle the checkbox state
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Text variant="screenTitle leftAlign" style={{color: Colours.black}}>
            Are you tax compliant?
          </Text>
          <Text
            variant="bodyText leftAlign"
            style={[{color: Colours.black}, styles.space]}>
            This means that you've not previously evaded tax and are not engaged
            in any tax avoidance arrangements.
          </Text>

          <View style={styles.space} />
          {/* Place the CheckboxToggle component and text */}
          <View style={styles.checkboxContainer}>
            <Text variant="bodyText" style={styles.checkboxText}>
              I confirm that I am tax compliant
            </Text>
            <CheckboxToggle
              checked={isChecked}
              onToggle={handleCheckboxToggle}
            />
          </View>

          <View style={styles.space} />
          <PinkButton
            buttonText="Next"
            onPress={handleSwitchButtonPress}
            disabled={!isChecked}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.white,
    padding: 16,
  },

  space: {
    marginVertical: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 8,
  },
  checkboxText: {
    marginLeft: 8,
    color: Colours.black,
    flex: 1,
  },
  safeAreaContainer: {
    backgroundColor: Colours.white,
    height: '100%',
  },
});

export default UpgradeTaxCompliantScreen;
