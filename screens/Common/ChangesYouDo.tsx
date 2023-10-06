// ChangesYouDo.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import InfoBox from '../../components/InfoBox';
import {DrawingsPaidToUserIcon} from '../../components/theme/DrawingsPaidToUserIcon';
import {PotSmallIcon} from '../../components/theme/PotIcon';
import {ApplePayIcon} from '../../components/theme/ApplePayIcon';
import {ComputerSoftwareIcon} from '../../components/theme/ComputerSoftwareIcon';
import Colours from '../../components/theme/Colour';
import Text from '../../components/Text';
import CashIcon from '../../components/theme/CashIcon';

type ChangesYouDoProps = {};

const ChangesYouDo: React.FC<ChangesYouDoProps> = () => {
  return (
    <View>
      {/* Box 1 */}
      <InfoBox
        icon={<DrawingsPaidToUserIcon stroke={Colours.black} />}
        title="Give your clients your new bank details"
        description="Be sure to re-create unpaid invoices and any payments you’re expecting to receive, as you’ll lose the old ones."
      />
      <View style={styles.space} />
      {/* Box 2 */}
      <InfoBox
        icon={<CashIcon fill={Colours.black} />}
        title="Set up your Direct Debits and scheduled payments"
        description="Use the email we send you to set them up again."
      />
      <View style={styles.space} />
      {/* Box 3 */}
      <InfoBox
        icon={<PotSmallIcon stroke={Colours.black} />}
        title="Set up any pots you need"
        description="The balance of your existing pots will be moved to your main balance in your new account, so you’ll need to set up your pots."
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
        icon={<ComputerSoftwareIcon fill={Colours.black} />}
        title="Connect Xero or Quickbooks"
        description="These existing connections will expire."
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
