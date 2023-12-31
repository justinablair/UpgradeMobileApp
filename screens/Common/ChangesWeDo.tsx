// ChangesWeDo.tsx

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colours from '../../components/theme/Colour';
import {useUserContext} from '../../components/UserContext';
import InfoBox from '../../components/InfoBox';
import CardSvg from '../../components/theme/icons/CardIcon';
import {RefreshIcon} from '../../components/theme/icons/RefreshIcon';
import {TransferIcon} from '../../components/theme/icons/TransferIcon';
import {ExportIcon} from '../../components/theme/icons/ExportIcon';
import {PostageIcon} from '../../components/theme/icons/Postage';
import {FreeAgentIcon} from '../../components/theme/icons/FreeAgentIcon';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type ChangesWeDoProps = {};

const ChangesWeDo: React.FC<ChangesWeDoProps> = () => {
  // Access isDarkMode from context
  const {isDarkMode} = useUserContext();

  // Set color mode based on dark mode
  const colourMode = isDarkMode ? Colours.white : Colours.black;

  return (
    <View>
      {/* Box 1 */}
      <InfoBox
        icon={<CardSvg stroke={colourMode} fill={colourMode} />}
        title="Give you a new account number and sort code"
        description="When you start the switch your old account details will no longer work, you’ll get new account details as soon as the switch is complete."
        accessible={true}
        accessibilityLabel="New Account Number and Sort Code"
      />
      <View style={styles.space} />

      {/* Box 2 */}
      <InfoBox
        icon={<RefreshIcon stroke={colourMode} />}
        title="Close your e-money account"
        description="Your new bank account will replace your existing e-money account. This means payments to your old account will be rejected."
        accessible={true}
        accessibilityLabel="Close E-Money Account"
      />
      <View style={styles.space} />

      {/* Box 3 */}
      <InfoBox
        icon={<TransferIcon fill={colourMode} />}
        title="Move your money"
        description="Your existing e-money balance (including money in pots) will be safely moved to your new account as soon as the switch is complete."
        accessible={true}
        accessibilityLabel="Move Money"
      />
      <View style={styles.space} />

      {/* Box 4 */}
      <InfoBox
        icon={<ExportIcon stroke={colourMode} />}
        title="Email your data"
        description="We’ll email your standing orders and Direct Debit information, with instructions on you can set them up again."
        accessible={true}
        accessibilityLabel="Email Data"
      />
      <View style={styles.space} />

      {/* Box 5 */}
      <InfoBox
        icon={<PostageIcon stroke={colourMode} />}
        title="Send you a new card in 3-5 working days"
        description="When you start the switch, we’ll open your new account and the card you currently use will no longer work."
        accessible={true}
        accessibilityLabel="New Card Information"
      />
      <View style={styles.space} />

      {/* Box 6 */}
      <InfoBox
        icon={<FreeAgentIcon stroke={colourMode} />}
        title="Keep FreeAgent connected"
        description="The connection you currently have with FreeAgent will remain connected in your new account."
        accessible={true}
        accessibilityLabel="Keep FreeAgent Connected"
      />
      <View style={styles.space} />
    </View>
  );
};

const styles = StyleSheet.create({
  space: {
    marginVertical: hp('1.6%'),
  },

  titleContainer: {
    paddingLeft: wp('2.7%'),
  },
});

export default ChangesWeDo;
