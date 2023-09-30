//UpgradeUSPerson.tsx

import React, {useState} from 'react';
import {View, StyleSheet, Pressable, SafeAreaView} from 'react-native';
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
  const {userType} = useUserContext(); // Get the userType and businessName from the context

  const handleNoButtonPress = () => {
    navigation.navigate('ConfirmAddress'); // Navigate to the desired screen
  };
  const handleYesButtonPress = () => {
    navigation.navigate('UpgradeIneligible'); // Navigate to the desired screen
  };

  const [showUSPersonInfoModal, setShowUSPersonInfoModal] = useState(false);

  const renderContent = () => {
    if (userType === 'limitedCompany') {
      return (
        <>
          <Text variant="screenTitle leftAlign" style={{color: Colours.black}}>
            Is your business a United States (US) person?
          </Text>
          <InfoModal
            visible={showUSPersonInfoModal}
            onPressClose={() => setShowUSPersonInfoModal(false)}
            title="What is a US person?"
            content="An entity is considered a United States person for tax purposes if it is a partnership or corporation organised in the United States or under the laws of the United States or any State thereof."
            accessibilityLabel="Close US Person Info Modal"
            contentStyle={[
              {backgroundColor: Colours.white},
              styles.InfoModalCustomisation,
            ]}
            titleStyle={{color: Colours.black}} // Customize title text color
            bodyTextStyle={{color: Colours.black}}
          />
        </>
      );
    } else if (userType === 'soleTrader') {
      return (
        <>
          <Text variant="screenTitle leftAlign" style={{color: Colours.black}}>
            Are you a United States (US) person?
          </Text>
          <InfoModal
            visible={showUSPersonInfoModal}
            onPressClose={() => setShowUSPersonInfoModal(false)}
            title="What is a US person?"
            content="You are considered a U.S. Person for tax purposes if you are a U.S. Citizen, or a resident (alien) of the U.S. under the ‘green card’ or the ‘substantial presence’ tests."
            accessibilityLabel="Close US Person Info Modal"
            contentStyle={[
              {backgroundColor: Colours.white},
              styles.InfoModalCustomisation,
            ]} // Customize content background color
            titleStyle={{color: Colours.black}} // Customize title text color
            bodyTextStyle={{color: Colours.black}}
          />
        </>
      );
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView>
        <View style={styles.container}>
          {renderContent()}
          <View style={styles.spaceMedium} />
          <Pressable onPress={() => setShowUSPersonInfoModal(true)}>
            <Text variant="bodyText bodyTextBold" style={{color: Colours.pink}}>
              What is a US person?
            </Text>
          </Pressable>
          <OptionsWithChevron title="Yes" onPress={handleYesButtonPress} />
          <View style={styles.spaceMedium} />
          <OptionsWithChevron title="No" onPress={handleNoButtonPress} />
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
  safeAreaContainer: {
    backgroundColor: Colours.white,
    height: '100%',
  },
});

export default UpgradeUSPersonScreen;
