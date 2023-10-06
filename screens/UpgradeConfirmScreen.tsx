//UpgradeConfirmScreen.tsx

import React from 'react';
import {View, StyleSheet, Image, SafeAreaView} from 'react-native';
import Text from '../components/Text';

import {NavigationProps} from '../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../components/theme/Colour';
import PinkButton from '../components/theme/buttons/PinkButton';
import Colour from '../components/theme/Colour';

type UpgradeConfirmProps = NavigationProps<'UpgradeConfirm'>;

const UpgradeConfirmScreen: React.FC<UpgradeConfirmProps> = ({navigation}) => {
  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeRecap');
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={require('../assets/SwitchArrows.png')}
            style={styles.largeImage}
            accessibilityLabel="Mettle Bank Account Logo"
          />
          <Text variant="screenTitle centerAlign" style={{color: Colour.white}}>
            Ready to switch?
          </Text>
          <Text variant="bodyText centerAlign" style={{color: Colour.white}}>
            We’ll open your new account and move your money. We’ll also close
            your e-money account.{'\n\n'}
          </Text>
          <Text variant="bodyText centerAlign" style={{color: Colour.pink}}>
            Only do this if you’re ready. We can’t undo it once we’ve started.
          </Text>
          <View style={styles.spaceMedium} />
          <PinkButton
            buttonText="View recap of changes"
            onPress={handleSwitchButtonPress}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.black,
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
  safeAreaContainer: {
    backgroundColor: Colours.black,
    height: '100%',
  },
});

export default UpgradeConfirmScreen;
