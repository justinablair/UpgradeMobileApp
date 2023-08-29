//UpgradeChangesWeDo.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../components/Text';
import PinkButton from '../components/PinkButton';
import WhiteButton from '../components/WhiteButton';
import InfoBox from '../components/InfoBox';
import {LockedIcon} from '../components/theme/LockedIcon';
import {MobilePhoneIcon} from '../components/theme/MobilePhoneIcon';
import {EmailIcon} from '../components/theme/EmailIcon';

import {NavigationProps} from '../navigationTypes';
import {ScrollView} from 'react-native-gesture-handler';
import Colours from '../components/theme/Colour';

type UpgradeChangesNewAccountProps =
  NavigationProps<'UpgradeChangesNewAccount'>;

const UpgradeChangesNewAccountScreen: React.FC<
  UpgradeChangesNewAccountProps
> = ({navigation}) => {
  const handleSwitchButtonPress = () => {
    navigation.navigate('UpgradeTerms'); // Navigate to the desired screen
  };
  const handleSwitchExitJourneyPress = () => {
    navigation.navigate('UpgradeIntro'); // Navigate to the desired screen
  };

  return (
    <ScrollView>
      <View style={styles.container}>
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
          icon={<MobilePhoneIcon stroke={Colours.black} />}
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
        <WhiteButton
          buttonText="Maybe later"
          onPress={handleSwitchExitJourneyPress}
        />
        <PinkButton
          buttonText="Get started"
          onPress={handleSwitchButtonPress}
        />
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

export default UpgradeChangesNewAccountScreen;
