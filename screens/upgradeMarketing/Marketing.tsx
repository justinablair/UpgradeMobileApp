// Marketing.tsx

import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  AccessibilityInfo,
} from 'react-native';
import Text from '../../components/Text';
import PinkButton from '../../components/theme/buttons/PinkButton';
import WhiteButton from '../../components/theme/buttons/WhiteButton';
import PreferenceToggle from '../../components/toggles/PreferenceToggle';
import {NavigationProps} from '../../navigationTypes';
import Colours from '../../components/theme/Colour';
import {useUserContext} from '../../components/UserContext';

type MarketingProps = NavigationProps<'Marketing'>;

type ToggleStates = {
  [key: string]: boolean;
};

const MarketingScreen: React.FC<MarketingProps> = ({navigation}) => {
  const {isDarkMode} = useUserContext(); // Access isDarkMode from context
  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  const initialToggleStates: ToggleStates = {
    email: false,
    pushNotifications: false,
    textMessages: false,
    onlineAdvertising: false,
  };
  const [toggleStates, setToggleStates] =
    useState<ToggleStates>(initialToggleStates);

  const handleToggleChange = (preference: keyof ToggleStates) => {
    setToggleStates(prevState => ({
      ...prevState,
      [preference]: !prevState[preference],
    }));
  };

  const handleButtonClick = () => {
    navigation.navigate('StepperScreen3'); // Navigate to the desired screen
  };

  const handleYesToAllClick = () => {
    const allToggledOn = Object.keys(toggleStates).reduce((acc, preference) => {
      acc[preference] = true;
      return acc;
    }, {} as ToggleStates);
    setToggleStates(allToggledOn);
    handleButtonClick();
  };

  return (
    <SafeAreaView
      style={[
        styles.safeAreaContainer,
        {backgroundColor: containerBackgroundColor},
      ]}>
      <ScrollView>
        <MarketingContent
          containerBackgroundColor={containerBackgroundColor}
          textColour={textColour}
          toggleStates={toggleStates}
          handleToggleChange={handleToggleChange}
          handleButtonClick={handleButtonClick}
          handleYesToAllClick={handleYesToAllClick}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const MarketingContent: React.FC<{
  containerBackgroundColor: string;
  textColour: string;
  toggleStates: ToggleStates;
  handleToggleChange: (preference: keyof ToggleStates) => void;
  handleButtonClick: () => void;
  handleYesToAllClick: () => void;
}> = ({
  containerBackgroundColor,
  textColour,
  toggleStates,
  handleToggleChange,
  handleButtonClick,
  handleYesToAllClick,
}) => {
  const title = 'Marketing preferences';

  // Use AccessibilityInfo to set accessibility focus on the title
  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(title);
  }, [title]);

  return (
    <View
      style={[styles.container, {backgroundColor: containerBackgroundColor}]}>
      <Text
        variant="screenTitle leftAlign"
        style={{color: textColour}}
        accessible={true}
        accessibilityLabel="Marketing Preferences"
        accessibilityRole="header">
        {title}
      </Text>
      <Text
        variant="bodyText leftAlign"
        style={[styles.text, {color: textColour}]}
        accessible={true}
        accessibilityLabel="We want to contact you"
        accessibilityRole="text">
        We’d like to contact you from time to time so you can get the most out
        of Mettle, our partners and the wider NatWest Group.
      </Text>

      <PreferenceToggle
        label="Email"
        value={toggleStates.email}
        onChange={() => handleToggleChange('email')}
        accessible={true}
        accessibilityLabel={`Toggle Email ${
          toggleStates.email ? 'enabled' : 'disabled'
        }`}
        testID="Email"
      />
      <View style={styles.separator} />

      <PreferenceToggle
        label="Push notifications"
        value={toggleStates.pushNotifications}
        onChange={() => handleToggleChange('pushNotifications')}
        accessibilityLabel={`Toggle Push Notifications ${
          toggleStates.pushNotifications ? 'enabled' : 'disabled'
        }`}
        testID="PushNotifications"
      />
      <View style={styles.separator} />

      <PreferenceToggle
        label="Text messages"
        value={toggleStates.textMessages}
        onChange={() => handleToggleChange('textMessages')}
        accessibilityLabel={`Toggle Text Messages ${
          toggleStates.textMessages ? 'enabled' : 'disabled'
        }`}
        testID="TextMessages"
      />
      <View style={styles.separator} />

      <PreferenceToggle
        label="Online advertising"
        value={toggleStates.onlineAdvertising}
        onChange={() => handleToggleChange('onlineAdvertising')}
        description="Relevant ads shown to you and others on social media and online advertising platforms based on contact and device details that we match."
        accessibilityLabel={`Toggle Online Advertising ${
          toggleStates.onlineAdvertising ? 'enabled' : 'disabled'
        }`}
        testID="OnlineAdvertising"
      />
      <View style={styles.separator} />

      <Text
        variant="bodyText bodyTextDescription"
        style={{color: textColour}}
        accessible={true}
        accessibilityLabel="You Can Change These Later"
        accessibilityRole="text">
        You can change these later in your settings by selecting ‘Marketing
        preferences’ in the Account tab, or by using the in-app chat.
      </Text>

      <View style={styles.buttonRow}>
        <WhiteButton
          buttonText="No thanks"
          onPress={handleButtonClick}
          customWidth={155}
          accessibilityLabel="No Thanks To All Toggles"
          testID="NoThanksButton"
        />
        <View style={styles.buttonSeparator} />
        <PinkButton
          buttonText="Yes to all"
          onPress={handleYesToAllClick}
          customWidth={155}
          accessibilityLabel="Yes to All Toggles"
          testID="YesToAllButton"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  separator: {
    width: 327,
    borderBottomWidth: 1,
    borderBottomColor: Colours.black30,
    marginBottom: 16,
  },
  text: {
    marginBottom: 40,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonSeparator: {
    width: 20,
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colours.white,
  },
});

export default MarketingScreen;
