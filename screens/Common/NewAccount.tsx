// ChangesWeDo.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import InfoBox from '../../components/InfoBox';
import {LockedIcon} from '../../components/theme/LockedIcon';
import {MobilePhoneIcon} from '../../components/theme/MobilePhoneIcon';
import {EmailIcon} from '../../components/theme/EmailIcon';
import Colours from '../../components/theme/Colour';
import Text from '../../components/Text';

type NewAccountProps = {};

const NewAccount: React.FC<NewAccountProps> = () => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text variant="screenTitle leftAlign" style={{color: Colours.black}}>
          Your new bank account
        </Text>
      </View>
      <View style={styles.space} />
      {/* Box 1 */}
      <InfoBox
        icon={<LockedIcon stroke={Colours.black} />}
        title=" Your app will be locked while we open your new account"
        description="This usually takes less than a couple of minutes, but can take up to 2
          hours."
      />
      <View style={styles.space} />
      {/* Box 2 */}
      <InfoBox
        icon={<MobilePhoneIcon fill={Colours.black} />}
        title=" You’ll use the same app"
        description="No need to download anything else."
      />
      <View style={styles.space} />
      {/* Box 3 */}
      <InfoBox
        icon={<EmailIcon stroke={Colours.black} />}
        title="We’ll send you a welcome email"
        description="  This email will include all the information you need to start using
          your new bank account."
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

export default NewAccount;
