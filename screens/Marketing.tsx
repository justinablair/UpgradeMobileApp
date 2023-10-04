//Marketing.tsx
import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Text from '../components/Text';
import PinkButton from '../components/theme/buttons/PinkButton';
import WhiteButton from '../components/theme/buttons/WhiteButton';
import PreferenceToggle from '../components/toggles/PreferenceToggle';

import {NavigationProps} from '../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../components/theme/Colour';

type MarketingProps = NavigationProps<'Marketing'>;

const MarketingScreen: React.FC<MarketingProps> = ({navigation}) => {
  const [toggleStates, setToggleStates] = useState({
    email: false,
    pushNotifications: false,
    textMessages: false,
    onlineAdvertising: false,
  });

  const handleToggleChange = (preference: string) => {
    setToggleStates(prevState => ({
      ...prevState,
      [preference]: !prevState[preference as keyof typeof toggleStates],
    }));
  };

  const handleButtonClick = () => {
    navigation.navigate('StepperScreen3'); // Navigate to the desired screen
  };

  const handleYesToAllClick = () => {
    const allToggledOn = Object.keys(toggleStates).reduce((acc, preference) => {
      acc[preference] = true;
      return acc;
    }, {} as typeof toggleStates);
    setToggleStates(allToggledOn);
    handleButtonClick();
  };
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.container}>
          <Text variant="screenTitle leftAlign" style={{color: Colours.black}}>
            Marketing preferences
          </Text>
          <Text
            variant="bodyText leftAlign"
            style={[{color: Colours.black}, styles.space]}>
            We’d like to contact you from time to time so you can get the most
            out of Mettle, our partners and the wider NatWest Group.
          </Text>

          <PreferenceToggle
            label="Email"
            value={toggleStates.email}
            onChange={() => handleToggleChange('email')}
          />
          <View style={styles.separator} />

          <PreferenceToggle
            label="Push notifications"
            value={toggleStates.pushNotifications}
            onChange={() => handleToggleChange('pushNotifications')}
          />
          <View style={styles.separator} />

          <PreferenceToggle
            label="Text messages"
            value={toggleStates.textMessages}
            onChange={() => handleToggleChange('textMessages')}
          />
          <View style={styles.separator} />
          <PreferenceToggle
            label="Online advertising"
            value={toggleStates.onlineAdvertising}
            onChange={() => handleToggleChange('onlineAdvertising')}
            description="Relevant ads shown to you and others on social media and online advertising platforms based on contact and device details that we match."
          />
          <View style={styles.separator} />
          <Text
            variant="bodyText bodyTextDescription"
            style={{color: Colours.black60}}>
            You can change these later in your settings by selecting ‘Marketing
            preferences’ in the Account tab, or by using the in-app chat.
          </Text>

          <View style={styles.buttonRow}>
            <WhiteButton
              buttonText="No thanks"
              onPress={handleButtonClick}
              customWidth={155}
            />
            <View style={styles.buttonSeparator} />
            <PinkButton
              buttonText="Yes to all"
              onPress={handleYesToAllClick}
              customWidth={155}
            />
          </View>
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

  separator: {
    width: 327,
    borderBottomWidth: 1,
    borderBottomColor: Colours.black30,
    marginBottom: 16,
  },
  textContainer: {
    flex: 1,
  },

  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonSeparator: {
    width: 20,
  },
  space: {
    marginBottom: 40,
  },
  safeAreaContainer: {
    backgroundColor: Colours.white,
    height: '100%',
  },
});

export default MarketingScreen;
