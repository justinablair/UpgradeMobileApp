// ChangesYouDo.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import InfoBox from '../../components/InfoBox';
import {PotSmallIcon} from '../../components/theme/icons/PotIcon';
import {ComputerSoftwareIcon} from '../../components/theme/icons/ComputerSoftwareIcon';
import Colours from '../../components/theme/Colour';
import CashIcon from '../../components/theme/icons/CashIcon';
import {useUserContext} from '../../components/UserContext';
import ApplePaySvg from '../../components/theme/icons/ApplePayIcon';
import {DrawingsPaidToUserIcon} from '../../components/theme/icons/DrawingsPaidToUserIcon';

type ChangesYouDoProps = {};

const ChangesYouDo: React.FC<ChangesYouDoProps> = () => {
  const {isDarkMode} = useUserContext(); // Access isDarkMode from context

  const colourMode = isDarkMode ? Colours.white : Colours.black;

  return (
    <View>
      {/* Box 1 */}
      <InfoBox
        icon={<DrawingsPaidToUserIcon stroke={colourMode} />}
        title="Give your clients your new bank details"
        description="Be sure to re-create unpaid invoices and any payments you’re expecting to receive, as you’ll lose the old ones."
        accessible={true}
        accessibilityLabel="Give Clients New Bank Details"
      />
      <View style={styles.space} />
      {/* Box 2 */}
      <InfoBox
        icon={<CashIcon fill={colourMode} />}
        title="Set up your Direct Debits and scheduled payments"
        description="Use the email we send you to set them up again."
        accessible={true}
        accessibilityLabel="Set Up Direct Debits and Scheduled Payments"
      />
      <View style={styles.space} />
      {/* Box 3 */}
      <InfoBox
        icon={<PotSmallIcon stroke={colourMode} />}
        title="Set up any pots you need"
        description="The balance of your existing pots will be moved to your main balance in your new account, so you’ll need to set up your pots."
        accessible={true}
        accessibilityLabel="Set up Pots"
      />
      <View style={styles.space} />
      {/* Box 4 */}
      <InfoBox
        icon={<ApplePaySvg fill={colourMode} />}
        title="Set up Apple Pay"
        description="You can do this once you’ve activated your new card."
        accessible={true}
        accessibilityLabel="Set up Apple Pay"
      />
      <View style={styles.space} />
      {/* Box 5 */}
      <InfoBox
        icon={<ComputerSoftwareIcon fill={colourMode} />}
        title="Connect Xero or Quickbooks"
        description="These existing connections will expire."
        accessible={true}
        accessibilityLabel="Connect Xero or Quickbooks"
      />
      <View style={styles.space} />
    </View>
  );
};

const styles = StyleSheet.create({
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

  titleContainer: {
    paddingLeft: 10, // Adjust this value as needed
  },
});

export default ChangesYouDo;
