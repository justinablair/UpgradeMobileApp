import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../components/Text';
import PinkButton from '../components/PinkButton';
import CardSvg from '../components/theme/CardIcon';
import {PostageIcon} from '../components/theme/Postage';
import {RefreshIcon} from '../components/theme/RefreshIcon';
import {TransferIcon} from '../components/theme/TransferIcon';
import {ExportIcon} from '../components/theme/ExportIcon';
import {FreeAgentIcon} from '../components/theme/FreeAgent';

import {NavigationProps} from '../navigationTypes';
import Colour from '../components/theme/Colour';

interface SwitchScreenProps extends NavigationProps {}

const SwitchScreen: React.FC<SwitchScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What we’ll do during the switch</Text>
      <View style={styles.space} />

      {/* Box 1 */}
      <View style={styles.box}>
        <CardSvg stroke={Colour.black} fill={Colour.black} />
        <View style={styles.textContainer}>
          <Text style={styles.header}>
            Give you a new account number and sort code
          </Text>
          <View style={styles.spaceUnderHeader} />
          <Text>Your old account details will no longer work.</Text>
        </View>
      </View>
      <View style={styles.space} />

      {/* Box 2 */}
      <View style={styles.box}>
        <RefreshIcon stroke={Colour.black} />
        <View style={styles.textContainer}>
          <Text style={styles.header}>Close your e-money account</Text>
          <View style={styles.spaceUnderHeader} />
          <Text>Your new bank account will replace your e-money account.</Text>
        </View>
      </View>
      <View style={styles.space} />

      {/* Box 3 */}
      <View style={styles.box}>
        <TransferIcon fill={Colour.black} />
        <View style={styles.textContainer}>
          <Text style={styles.header}>Move your money</Text>
          <View style={styles.spaceUnderHeader} />
          <Text>
            Your e-money balance (including money in pots) will be safely moved
            to your new account.
          </Text>
        </View>
      </View>
      <View style={styles.space} />

      {/* Box 4 */}
      <View style={styles.box}>
        <ExportIcon stroke={Colour.black} />
        <View style={styles.textContainer}>
          <Text style={styles.header}>Email your data</Text>
          <View style={styles.spaceUnderHeader} />
          <Text>
            We’ll email your standing orders and Direct Debit information, with
            instructions on how you can set them up again.
          </Text>
        </View>
      </View>
      <View style={styles.space} />

      {/* Box 5 */}
      <View style={styles.box}>
        <PostageIcon stroke={Colour.black} />
        <View style={styles.textContainer}>
          <Text style={styles.header}>
            Send you a new card in 3-5 working days
          </Text>
          <View style={styles.spaceUnderHeader} />
          <Text>
            The card you currently use will no longer work when your new account
            has opened.
          </Text>
        </View>
      </View>
      <View style={styles.space} />

      {/* Box 6 */}
      <View style={styles.box}>
        <FreeAgentIcon stroke={Colour.black} />
        <View style={styles.textContainer}>
          <Text style={styles.header}>Keep FreeAgent connected</Text>
          <View style={styles.spaceUnderHeader} />
          <Text>
            Any connection you currently have with FreeAgent will remain
            connected in your new account.
          </Text>
        </View>
      </View>
      <View style={styles.space} />

      <PinkButton buttonText="Next" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colour.white,
    padding: 16,
  },
  title: {
    fontSize: 22,
    marginBottom: 8,
  },
  space: {
    marginVertical: 8,
  },
  box: {
    width: 327,
    height: 100,
    backgroundColor: Colour.black03,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
  },
  textContainer: {
    marginLeft: 16,
  },
  header: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  spaceUnderHeader: {
    marginVertical: 4,
  },
});

export default SwitchScreen;
