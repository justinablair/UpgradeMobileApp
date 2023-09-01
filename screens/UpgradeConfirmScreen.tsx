//UpgradeConfirmScreen.tsx

import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Text from '../components/Text';

import {NavigationProps} from '../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../components/theme/Colour';
import PinkButton from '../components/PinkButton';
import Colour from '../components/theme/Colour';

type UpgradeConfirmProps = NavigationProps<'UpgradeConfirm'>;

const UpgradeConfirmScreen: React.FC<UpgradeConfirmProps> = ({navigation}) => {
  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeRecap');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require('../assets/RocketTakeoff.png')}
          style={styles.largeImage}
          accessibilityLabel="Mettle Bank Account Logo"
        />
        <Text variant="screenTitle" style={{color: Colour.black}}>
          Ready to switch?
        </Text>
        <Text variant="bodyText centerAlign" style={{color: Colour.black}}>
          We’ll open your new account and move your money. We’ll also close your
          e-money account.{'\n\n'}Only do this if you’re ready. We can’t undo it
          once we’ve started.
        </Text>
        <View style={styles.spaceMedium} />
        <PinkButton
          buttonText="View recap of changes"
          onPress={handleSwitchButtonPress}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.white,
    padding: 16,
  },
  modal: {
    backgroundColor: Colours.white,
    color: Colours.black,
  },
  spaceMedium: {
    marginBottom: 15,
  },
  InfoModalCustomisation: {
    margin: 50,
  },
  largeImage: {
    width: 210,
    height: 210,
    alignSelf: 'center',
  },
});

export default UpgradeConfirmScreen;
