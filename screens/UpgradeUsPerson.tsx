//UpgradeUSPerson.tsx

import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  SafeAreaView,
  TextStyle,
  AccessibilityInfo,
} from 'react-native';
import Text from '../components/Text';
import InfoModal from '../components/theme/modals/InfoModal';

import {NavigationProps} from '../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../components/theme/Colour';
import {useUserContext} from '../components/UserContext'; // Import the user context
import OptionsWithChevron from '../components/OptionsWithChevron';

type UpgradeUSPersonProps = NavigationProps<'UpgradeUSPerson'>;

const UpgradeUSPersonScreen: React.FC<UpgradeUSPersonProps> = ({
  navigation,
}) => {
  const {userType, isDarkMode} = useUserContext();
  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  const handleNoButtonPress = () => {
    navigation.navigate('StepperScreen4'); // Navigate to the desired screen
  };
  const handleYesButtonPress = () => {
    navigation.navigate('UpgradeIneligibleUS'); // Navigate to the desired screen
  };

  const [showUSPersonInfoModal, setShowUSPersonInfoModal] = useState(false);
  const [usPersonPressed, setUsPersonPressed] = useState(false);

  const handleUsPersonPress = () => {
    setShowUSPersonInfoModal(true);
    setUsPersonPressed(true); // Set to true to keep it blue
  };
  const usPersonTextStyles: TextStyle = {
    ...styles.usPersonText,
    color: usPersonPressed ? Colours.blue : Colours.pink,
    textDecorationLine: 'underline',
  };

  const titleLimitedCompany = 'Is your business a United States (US) person?';

  const titleSoleTrader = 'Are you a United States (US) person?';
  // Use AccessibilityInfo to set accessibility focus on the title
  useEffect(() => {
    const title =
      userType === 'limitedCompany' ? titleLimitedCompany : titleSoleTrader;
    AccessibilityInfo.announceForAccessibility(title);
  }, [userType, titleLimitedCompany, titleSoleTrader]);

  const renderContent = () => {
    if (userType === 'limitedCompany') {
      return (
        <>
          <Text variant="screenTitle leftAlign" style={{color: textColour}}>
            {titleLimitedCompany}
          </Text>
          <InfoModal
            visible={showUSPersonInfoModal}
            onPressClose={() => setShowUSPersonInfoModal(false)}
            title="What is a US person?"
            content="For tax purposes, a business is considered a United States entity, and therefore a US person, if it is a partnership or corporation registered in the United States or under U.S. state laws."
            contentStyle={[
              {backgroundColor: containerBackgroundColor},
              styles.InfoModalCustomisation,
            ]}
            titleStyle={{color: textColour}} // Customize title text color
            bodyTextStyle={{color: textColour}}
          />
        </>
      );
    } else if (userType === 'soleTrader') {
      return (
        <>
          <Text variant="screenTitle leftAlign" style={{color: textColour}}>
            {titleSoleTrader}
          </Text>
          <InfoModal
            visible={showUSPersonInfoModal}
            onPressClose={() => setShowUSPersonInfoModal(false)}
            title="What is a US person?"
            content="You are considered a United States person for tax purposes if you are a US citizen, or a resident (alien) of the US under the ‘green card’ or the ‘substantial presence’ tests."
            accessibilityLabel="Close US Person Info Modal"
            contentStyle={[
              {backgroundColor: containerBackgroundColor},
              styles.InfoModalCustomisation,
            ]} // Customize content background color
            titleStyle={{color: textColour}} // Customize title text color
            bodyTextStyle={{color: textColour}}
          />
        </>
      );
    }
  };

  return (
    <SafeAreaView
      style={[
        styles.safeAreaContainer,
        {backgroundColor: containerBackgroundColor},
      ]}>
      <ScrollView>
        <View
          style={[
            styles.container,
            {backgroundColor: containerBackgroundColor},
          ]}>
          {renderContent()}
          <Pressable onPress={handleUsPersonPress}>
            <Text
              variant="bodyText bodyTextBold"
              style={[{color: Colours.pink}, usPersonTextStyles]}>
              What is a US person?
            </Text>
          </Pressable>
          <OptionsWithChevron title="Yes" onPress={handleYesButtonPress} />
          <View style={[styles.spaceMedium, styles.separator]} />
          <OptionsWithChevron title="No" onPress={handleNoButtonPress} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colours.white,
    padding: 16,
  },
  modal: {
    // backgroundColor: Colours.white,
    // color: Colours.black,
  },
  spaceLarge: {
    marginBottom: 25,
  },
  spaceMedium: {
    marginBottom: 15,
  },
  InfoModalCustomisation: {
    margin: 50,
  },
  safeAreaContainer: {
    // backgroundColor: Colours.white,
    height: '100%',
  },
  separator: {
    width: 327,
    borderBottomWidth: 1,
    borderBottomColor: Colours.black30,
    // alignSelf: 'center', // Center the separator horizontally
  },
  usPersonText: {
    lineHeight: 90,
    fontWeight: 'bold',
  },
});

export default UpgradeUSPersonScreen;
