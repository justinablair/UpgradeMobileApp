// ChangesWeDo.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import InfoBox from '../../components/InfoBox';
import {LockedIcon} from '../../components/theme/LockedIcon';
import {MobilePhoneIcon} from '../../components/theme/MobilePhoneIcon';
import {EmailIcon} from '../../components/theme/EmailIcon';
import Colours from '../../components/theme/Colour';
import VoidIcon from '../../components/theme/VoidIcon';
import CalendarIcon from '../../components/theme/CalendarIcon';

type NewAccountProps = {};

const NewAccount: React.FC<NewAccountProps> = () => {
  return (
    <View>
      <View style={styles.space} />
      {/* Box 1 */}
      <InfoBox
        icon={<LockedIcon stroke={Colours.black} />}
        title=" Your app will be locked while we open your new account"
        description="This usually takes less than a couple of minutes, but can take up to 2 hours. You’ll still be able to contact support during this time."
      />
      <View style={styles.space} />
      {/* Box 2 */}
      <InfoBox
        icon={<VoidIcon fill={Colours.black} />}
        title="Your account won’t accept CHAPS payments"
        description="This is a type of payment, usually used to send high-value amounts."
      />
      {/* Box 3 */}
      <InfoBox
        icon={<MobilePhoneIcon fill={Colours.black} />}
        title=" You’ll use the same app"
        description="No need to download anything else."
      />
      <View style={styles.space} />
      {/* Box 4 */}
      <InfoBox
        icon={<EmailIcon stroke={Colours.black} />}
        title="We’ll send you a welcome email"
        description="  This email will include all the information you need to start using your new bank account."
      />
      {/* Box 5 */}
      <InfoBox
        icon={<CalendarIcon fill={Colours.black} />}
        title="Scheduled payments will be processed on business days"
        description="Payments scheduled for a weekend or bank holiday will be processed the next working day."
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
