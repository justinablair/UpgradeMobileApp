import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
  TextStyle,
  AccessibilityInfo,
} from 'react-native';
import {NavigationProps} from '../navigationTypes';
import Colours from '../components/theme/Colour';
import Text from '../components/Text';
import {useUserContext} from '../components/UserContext';
import OptionsWithChevron from '../components/OptionsWithChevron';
import InfoModal from '../components/theme/modals/InfoModal';

type UpgradeNationalityListProps = NavigationProps<'UpgradeNationality'>;

const UpgradeNationalityScreen: React.FC<UpgradeNationalityListProps> = ({
  navigation,
}) => {
  const {userType, isDarkMode} = useUserContext();

  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  const [showNationalityModal, setShowNationalityModal] = useState(false);
  const [nationalityPressed, setNationalityPressed] = useState(false);

  const handleNationalityPress = () => {
    setShowNationalityModal(true);
    setNationalityPressed(true); // Set to true to keep it blue
  };

  const handleNoButtonPress = () => {
    navigation.navigate('UpgradeUSPerson'); // Navigate to the desired screen
  };
  const handleYesButtonPress = () => {
    navigation.navigate('UpgradeIneligibleResident'); // Navigate to the desired screen
  };

  const titleLimitedCompany =
    'Does your business have tax residency outside of the United Kingdom?';

  const titleSoleTrader =
    'Do you have tax residency outside of the United Kingdom?';
  // Use AccessibilityInfo to set accessibility focus on the title
  useEffect(() => {
    const title =
      userType === 'limitedCompany' ? titleLimitedCompany : titleSoleTrader;
    AccessibilityInfo.announceForAccessibility(title);
  }, [userType, titleLimitedCompany, titleSoleTrader]);

  const nationalityTextStyles: TextStyle = {
    ...styles.nationalityText,
    color: nationalityPressed ? Colours.blue : Colours.pink,
    textDecorationLine: 'underline',
  };

  const renderContent = () => {
    if (userType === 'limitedCompany') {
      return (
        <>
          <Text variant="screenTitle leftAlign" style={{color: textColour}}>
            {titleLimitedCompany}
          </Text>
        </>
      );
    } else if (userType === 'soleTrader') {
      return (
        <>
          <Text variant="screenTitle leftAlign" style={{color: textColour}}>
            {titleSoleTrader}
          </Text>
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
          <Pressable onPress={handleNationalityPress}>
            <Text variant="bodyText" style={nationalityTextStyles}>
              What is tax residency?
            </Text>
            <OptionsWithChevron title="Yes" onPress={handleYesButtonPress} />
            <View style={[styles.spaceMedium, styles.separator]} />
            <OptionsWithChevron title="No" onPress={handleNoButtonPress} />
          </Pressable>
        </View>
        <InfoModal
          visible={showNationalityModal}
          onPressClose={() => setShowNationalityModal(false)}
          title="What is tax residency?"
          content="The definition of tax residency varies between countries but generally, you’ll be tax resident in the country you live in."
          contentStyle={[
            {backgroundColor: containerBackgroundColor},
            styles.InfoModalCustomisation,
          ]}
          titleStyle={{color: textColour}}
          bodyTextStyle={{color: textColour}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  safeAreaContainer: {
    height: '100%',
  },
  nationalityText: {
    lineHeight: 90,
    fontWeight: 'bold',
  },
  separator: {
    width: 327,
    borderBottomWidth: 1,
    borderBottomColor: Colours.black30,
  },
  sectionHeader: {
    paddingVertical: 15, // Add padding to increase the height
    marginLeft: 16, // Add marginLeft
  },
  spaceMedium: {
    marginBottom: 15,
  },
  InfoModalCustomisation: {
    margin: 50,
  },
});

export default UpgradeNationalityScreen;
