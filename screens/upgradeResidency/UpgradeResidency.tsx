//UpgradeResidency.tsx

import React, {useEffect, useState} from 'react';
import {
  AccessibilityInfo,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextStyle,
  View,
} from 'react-native';
import {NavigationProps} from '../../navigationTypes';
import Colours from '../../components/theme/Colour';
import InfoModal from '../../components/theme/modals/InfoModal';
import OptionsWithChevron from '../../components/OptionsWithChevron';
import Text from '../../components/Text';
import {useUserContext} from '../../components/UserContext';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type UpgradeResidencyListProps = NavigationProps<'UpgradeResidency'>;

const UpgradeResidencyScreen: React.FC<UpgradeResidencyListProps> = ({
  navigation,
}) => {
  const {userType, isDarkMode} = useUserContext();

  const containerBackgroundColor = isDarkMode ? Colours.black : Colours.white;
  const textColour = isDarkMode ? Colours.white : Colours.black;

  // State for handling the display of the nationality modal and pressed state
  const [showNationalityModal, setShowNationalityModal] = useState(false);
  const [nationalityPressed, setNationalityPressed] = useState(false);

  // Handler for the press event of the nationality text
  const handleNationalityPress = () => {
    setShowNationalityModal(true);
    setNationalityPressed(true);
  };

  // Handlers for the press events of the Yes and No buttons
  const handleNoButtonPress = () => {
    navigation.navigate('UpgradeUSPerson');
  };
  const handleYesButtonPress = () => {
    navigation.navigate('UpgradeIneligibleResident');
  };

  // Titles for different user types
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

  // Styles for the nationality text
  const nationalityTextStyles: TextStyle = {
    ...styles.nationalityText,
    color: nationalityPressed ? Colours.blue : Colours.pink,
    textDecorationLine: 'underline',
  };

  // Function to render content based on the user type
  const renderContent = () => {
    const title =
      userType === 'limitedCompany' ? titleLimitedCompany : titleSoleTrader;
    return (
      <Text
        variant="screenTitle leftAlign"
        style={{color: textColour}}
        accessible={true}
        accessibilityLabel={title}
        accessibilityRole="header">
        {title}
      </Text>
    );
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
          ]}
          accessibilityRole="summary"
          accessibilityLabel={
            userType === 'limitedCompany'
              ? titleLimitedCompany
              : titleSoleTrader
          }>
          {renderContent()}
          <Pressable
            onPress={handleNationalityPress}
            accessible={true}
            accessibilityRole="button">
            <Text
              variant="bodyText"
              style={nationalityTextStyles}
              accessible={true}
              accessibilityRole="button"
              accessibilityLabel="What Is Tax Residency"
              accessibilityHint="Press to learn more about tax residency">
              What is tax residency?
            </Text>
          </Pressable>
          <OptionsWithChevron
            title="Yes"
            description=""
            onPress={handleYesButtonPress}
            accessible={true}
            accessibilityRole="button"
            accessibilityHint="Press yes to proceed"
          />
          <View style={[styles.spaceMedium, styles.separator]} />
          <OptionsWithChevron
            title="No"
            description=""
            onPress={handleNoButtonPress}
            accessible={true}
            accessibilityRole="button"
            accessibilityHint="Press no to proceed"
          />
        </View>
        <InfoModal
          visible={showNationalityModal}
          onPressClose={() => setShowNationalityModal(false)}
          title="What is tax residency?"
          content="The definition of tax residency varies between countries but generally, you’ll be tax resident in the country you live in."
          contentStyle={[
            styles.InfoModalCustomisation,
            {backgroundColor: containerBackgroundColor},
          ]}
          titleStyle={{color: textColour}}
          bodyTextStyle={{color: textColour}}
          testID="taxResidentInfoModal"
          accessible={true}
          accessibilityLabel="Tax Residency Definition Modal"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('4%'),
    width: wp('95%'),
  },
  safeAreaContainer: {
    flex: 1,
  },
  nationalityText: {
    lineHeight: hp('10%'),
    fontWeight: 'bold',
  },
  separator: {
    width: wp('85%'),
    borderBottomWidth: 1,
    borderBottomColor: Colours.black30,
  },
  spaceMedium: {
    marginBottom: hp('2%'),
  },
  InfoModalCustomisation: {
    margin: wp('10%'),
  },
});

export default UpgradeResidencyScreen;
