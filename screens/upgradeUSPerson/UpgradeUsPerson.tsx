import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  SafeAreaView,
  TextStyle,
  AccessibilityInfo,
} from 'react-native';
import Text from '../../components/Text';
import InfoModal from '../../components/theme/modals/InfoModal';
import {NavigationProps} from '../../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../../components/theme/Colour';
import {useUserContext} from '../../components/UserContext';
import OptionsWithChevron from '../../components/OptionsWithChevron';

type UpgradeUSPersonProps = NavigationProps<'UpgradeUSPerson'>;

const UpgradeUSPersonScreen: React.FC<UpgradeUSPersonProps> = ({
  navigation,
}) => {
  const {userType, isDarkMode} = useUserContext();
  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  const handleNoButtonPress = () => {
    navigation.navigate('StepperScreen4');
  };

  const handleYesButtonPress = () => {
    navigation.navigate('UpgradeIneligibleUS');
  };

  const [showUSPersonInfoModal, setShowUSPersonInfoModal] = useState(false);
  const [usPersonPressed, setUsPersonPressed] = useState(false);

  const handleUsPersonPress = () => {
    setShowUSPersonInfoModal(true);
    setUsPersonPressed(true);
  };

  const usPersonTextStyles: TextStyle = {
    ...styles.usPersonText,
    color: usPersonPressed ? Colours.blue : Colours.pink,
    textDecorationLine: 'underline',
  };

  const titleLimitedCompany = 'Is your business a United States (US) person?';
  const titleSoleTrader = 'Are you a United States (US) person?';

  useEffect(() => {
    const title =
      userType === 'limitedCompany' ? titleLimitedCompany : titleSoleTrader;
    AccessibilityInfo.announceForAccessibility(title);
  }, [userType, titleLimitedCompany, titleSoleTrader]);

  const renderContent = () => {
    const title =
      userType === 'limitedCompany' ? titleLimitedCompany : titleSoleTrader;
    const content =
      userType === 'limitedCompany'
        ? 'For tax purposes, a business is considered a United States entity, and therefore a US person, if it is a partnership or corporation registered in the United States or under U.S. state laws.'
        : 'You are considered a United States person for tax purposes if you are a US citizen, or a resident (alien) of the US under the ‘green card’ or the ‘substantial presence’ tests.';

    return (
      <>
        <Text variant="screenTitle leftAlign" style={{color: textColour}}>
          {title}
        </Text>
        <InfoModal
          visible={showUSPersonInfoModal}
          onPressClose={() => setShowUSPersonInfoModal(false)}
          title="What is a US person?"
          content={content}
          contentStyle={[
            {backgroundColor: containerBackgroundColor},
            styles.InfoModalCustomisation,
          ]}
          titleStyle={{color: textColour}}
          bodyTextStyle={{color: textColour}}
          accessibilityLabel="US Person Info modal"
          testID="USPersonModal"
        />
      </>
    );
  };

  return (
    <SafeAreaView
      style={[
        styles.safeAreaContainer,
        {backgroundColor: containerBackgroundColor},
      ]}
      accessibilityLabel="Upgrade US Person Screen"
      accessibilityRole="summary">
      <ScrollView>
        <View
          style={[
            styles.container,
            {backgroundColor: containerBackgroundColor},
          ]}>
          {renderContent()}
          <Pressable
            onPress={handleUsPersonPress}
            accessible
            accessibilityRole="button">
            <Text
              variant="bodyText bodyTextBold"
              style={[{color: Colours.pink}, usPersonTextStyles]}
              accessibilityLabel="US Person Button">
              What is a US person?
            </Text>
          </Pressable>
          <OptionsWithChevron
            title="Yes"
            onPress={handleYesButtonPress}
            accessibilityLabel="yesButton"
            accessibilityRole="button"
          />
          <View style={[styles.spaceMedium, styles.separator]} />
          <OptionsWithChevron
            title="No"
            onPress={handleNoButtonPress}
            accessibilityLabel="noButton"
            accessibilityRole="button"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  spaceMedium: {
    marginBottom: 15,
  },
  InfoModalCustomisation: {
    margin: 50,
  },
  safeAreaContainer: {
    height: '100%',
  },
  separator: {
    width: 327,
    borderBottomWidth: 1,
    borderBottomColor: Colours.black30,
  },
  usPersonText: {
    lineHeight: 90,
    fontWeight: 'bold',
  },
});

export default UpgradeUSPersonScreen;
