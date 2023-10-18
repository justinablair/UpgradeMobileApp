// ChangesWeDo.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import InfoBox from '../../components/InfoBox';
import {LockedIcon} from '../../components/theme/icons/LockedIcon';
import {MobilePhoneIcon} from '../../components/theme/icons/MobilePhoneIcon';
import {EmailIcon} from '../../components/theme/icons/EmailIcon';
import Colours from '../../components/theme/Colour';
import VoidIcon from '../../components/theme/icons/VoidIcon';
import CalendarIcon from '../../components/theme/icons/CalendarIcon';
import {useUserContext} from '../../components/UserContext';

type NewAccountProps = {};

const NewAccount: React.FC<NewAccountProps> = () => {
  const {isDarkMode} = useUserContext();

  const colourMode = isDarkMode ? Colours.white : Colours.black;

  return (
    <View>
      <View style={styles.space} />
      {/* Box 1 */}
      <InfoBox
        icon={<LockedIcon stroke={colourMode} />}
        title=" Your app will be locked while we open your new account"
        description="This usually takes less than a couple of minutes, but can take up to 2 hours. You’ll still be able to contact support during this time."
      />
      <View style={styles.space} />
      {/* Box 2 */}
      <InfoBox
        icon={<VoidIcon fill={colourMode} />}
        title="Your account won’t accept CHAPS payments"
        description="This is a type of payment, usually used to send high-value amounts."
      />
      {/* Box 3 */}
      <InfoBox
        icon={<MobilePhoneIcon fill={colourMode} />}
        title=" You’ll use the same app"
        description="No need to download anything else."
      />
      <View style={styles.space} />
      {/* Box 4 */}
      <InfoBox
        icon={<EmailIcon stroke={colourMode} />}
        title="We’ll send you a welcome email"
        description="  This email will include all the information you need to start using your new bank account."
      />
      {/* Box 5 */}
      <InfoBox
        icon={<CalendarIcon fill={colourMode} />}
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
  titleContainer: {
    paddingLeft: 10,
  },
});

export default NewAccount;
