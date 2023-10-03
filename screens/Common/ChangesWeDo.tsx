// ChangesWeDo.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import InfoBox from '../../components/InfoBox';
import CardSvg from '../../components/theme/CardIcon';
import {RefreshIcon} from '../../components/theme/RefreshIcon';
import {TransferIcon} from '../../components/theme/TransferIcon';
import {ExportIcon} from '../../components/theme/ExportIcon';
import {PostageIcon} from '../../components/theme/Postage';
import {FreeAgentIcon} from '../../components/theme/FreeAgentIcon';
import Colours from '../../components/theme/Colour';
import Text from '../../components/Text';

type ChangesWeDoProps = {};

const ChangesWeDo: React.FC<ChangesWeDoProps> = () => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text variant="screenTitle centreAlign" style={{color: Colours.black}}>
          What we’ll do during the switch
        </Text>
        <View style={styles.space} />
      </View>
      {/* Box 1 */}
      <InfoBox
        icon={<CardSvg stroke={Colours.black} fill={Colours.black} />}
        title="Give you a new account number and sort code"
        description="When you start the switch your old account details will no longer work, you’ll get new account details as soon as the switch is complete."
      />
      <View style={styles.space} />

      {/* Box 2 */}
      <InfoBox
        icon={<RefreshIcon stroke={Colours.black} />}
        title="Close your e-money account"
        description="Your new bank account will replace your existing e-money account. This means payments to your old account will be rejected."
      />
      <View style={styles.space} />

      {/* Box 3 */}
      <InfoBox
        icon={<TransferIcon fill={Colours.black} />}
        title="Move your money"
        description="Your existing e-money balance (including money in pots) will be safely moved to your new account as soon as the switch is complete."
      />
      <View style={styles.space} />

      {/* Box 4 */}
      <InfoBox
        icon={<ExportIcon stroke={Colours.black} />}
        title="Email your data"
        description="We’ll email your standing orders and Direct Debit information, with instructions on you can set them up again."
      />
      <View style={styles.space} />

      {/* Box 5 */}
      <InfoBox
        icon={<PostageIcon stroke={Colours.black} />}
        title="Send you a new card in 3-5 working days"
        description="When you start the switch, we’ll open your new account and the card you currently use will no longer work."
      />
      <View style={styles.space} />

      {/* Box 6 */}
      <InfoBox
        icon={<FreeAgentIcon stroke={Colours.black} />}
        title="Keep FreeAgent connected"
        description="The connection you currently have with FreeAgent will remain connected in your new account."
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

export default ChangesWeDo;
