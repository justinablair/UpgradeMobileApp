//UpgradeChangesWeDo.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../components/Text';
import PinkButton from '../components/PinkButton';
import InfoBox from '../components/InfoBox';
import CardSvg from '../components/theme/CardIcon';
import {PostageIcon} from '../components/theme/Postage';
import {RefreshIcon} from '../components/theme/RefreshIcon';
import {TransferIcon} from '../components/theme/TransferIcon';
import {ExportIcon} from '../components/theme/ExportIcon';
import {FreeAgentIcon} from '../components/theme/FreeAgent';

import {NavigationProps} from '../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../components/theme/Colour';

type UpgradeChangesWeDoProps = NavigationProps<'UpgradeChangesWeDo'>;

const UpgradeChangesWeDoScreen: React.FC<UpgradeChangesWeDoProps> = ({
  navigation,
}) => {
  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeChangesYouDo'); // Navigate to the desired screen
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text variant="screenTitle leftAlign" style={{color: Colours.black}}>
            What we’ll do during the switch
          </Text>
        </View>
        <View style={styles.space} />
        {/* Box 1 */}
        <InfoBox
          icon={<CardSvg stroke={Colours.black} fill={Colours.black} />}
          title="Give you a new account number and sort code"
          description="Your old account details will no longer work."
        />
        <View style={styles.space} />
        {/* Box 2 */}
        <InfoBox
          icon={<RefreshIcon stroke={Colours.black} />}
          title="Close your e-money account"
          description="Your new bank account will replace your e-money account."
        />
        <View style={styles.space} />
        {/* Box 3 */}
        <InfoBox
          icon={<TransferIcon fill={Colours.black} />}
          title="Move your money"
          description="Your e-money balance (including money in pots) will be safely moved to your new account."
        />
        <View style={styles.space} />
        {/* Box 4 */}
        <InfoBox
          icon={<ExportIcon stroke={Colours.black} />}
          title="Email your data"
          description="We’ll email your standing orders and Direct Debit information, with instructions on how you can set them up again."
        />
        <View style={styles.space} />
        {/* Box 5 */}
        <InfoBox
          icon={<PostageIcon stroke={Colours.black} />}
          title="Send you a new card in 3-5 working days"
          description="The card you currently use will no longer work when your new account has opened."
        />
        <View style={styles.space} />
        {/* Box 6 */}
        <InfoBox
          icon={<FreeAgentIcon stroke={Colours.black} />}
          title="Keep FreeAgent connected"
          description="Any connection you currently have with FreeAgent will remain connected in your new account."
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

export default UpgradeChangesWeDoScreen;
