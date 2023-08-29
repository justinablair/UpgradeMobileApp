//UpgradeChangesWeDo.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../components/Text';
import PinkButton from '../components/PinkButton';
import InfoBox from '../components/InfoBox';
import {LeasingIcon} from '../components/theme/LeasingIcon';
import {DrawingsPaidToUserIcon} from '../components/theme/DrawingsPaidToUserIcon';
import {PotSmallIcon} from '../components/theme/PotIcon';
import {ApplePayIcon} from '../components/theme/ApplePayIcon';
import {ComputerSoftwareIcon} from '../components/theme/ComputerSoftwareIcon';

import {NavigationProps} from '../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../components/theme/Colour';

type UpgradeChangesYouDoProps = NavigationProps<'UpgradeChangesYouDo'>;

const UpgradeChangesYouDoScreen: React.FC<UpgradeChangesYouDoProps> = ({
  navigation,
}) => {
  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeChangesNewAccount'); // Navigate to the desired screen
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text variant="screenTitle leftAlign" style={{color: Colours.black}}>
            What you’ll need to do after the switch
          </Text>
        </View>
        <View style={styles.space} />
        {/* Box 1 */}
        <InfoBox
          icon={<DrawingsPaidToUserIcon stroke={Colours.black} />}
          title="Give your contacts your new bank details"
          description="Be sure to update outstanding invoices and any payments you’re
          expecting to receive."
        />
        <View style={styles.space} />
        {/* Box 2 */}
        <InfoBox
          icon={<LeasingIcon stroke={Colours.black} />}
          title="Set up your Direct Debits and scheduled payments"
          description="Use the email we send you to set them up again."
        />
        <View style={styles.space} />
        {/* Box 3 */}
        <InfoBox
          icon={<PotSmallIcon stroke={Colours.black} />}
          title="Set up any pots you need"
          description="The balance of your existing pots will be moved to your main balance
          in your new account."
        />
        <View style={styles.space} />
        {/* Box 4 */}
        <InfoBox
          icon={<ApplePayIcon />}
          title="Set up Apple Pay"
          description="You can do this once you’ve activated your new card."
        />
        <View style={styles.space} />
        {/* Box 5 */}
        <InfoBox
          icon={<ComputerSoftwareIcon stroke={Colours.black} />}
          title="Reconnect Xero or Quickbooks"
          description="Any connections you currently have will expire."
        />
        <View style={styles.space} />
        <PinkButton buttonText="Next" onPress={handleSwitchButtonPress} />
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

  space: {
    marginVertical: 8,
  },
  box: {
    backgroundColor: Colours.black03,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 8,
    alignSelf: 'center',
    width: 327, // Set the width to take the available space
  },
  textContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingLeft: 10, // Adjust this value as needed
  },
});

export default UpgradeChangesYouDoScreen;
