//UpgradeChangesHow.tsx

import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Text from '../components/Text';
import PinkButton from '../components/PinkButton';

import {NavigationProps} from '../navigationTypes';

// type UpgradeChangesHowProps = NavigationProps<'UpgradeIntro'>;

const UpgradeChangesHowScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/folderRefresh.png')}
        style={styles.largeImage}
        accessibilityLabel="Folder Refresh Image"
      />
      <View style={styles.contentContainer}>
        <Text variant="screenTitle">We’ll open your new bank account</Text>
        <Text variant="bodyText" style={styles.leftAlignText}>
          We’ll show you what we’ll do, what you need to do, and what will
          happen during your switch.{'\n\n'}And don’t worry, we’ll also send you
          an email with all of this information once we’ve opened your new
          account.
        </Text>

        <PinkButton buttonText="How it will work" />
      </View>

      {/* <PinkButton
        buttonText="Switch now"
        onPress={() => console.log('Switch button pressed')}
        navigateToScreen="UpgradeChangesHow"
        navigation={navigation} // Pass the navigation prop
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171B1B',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  largeImage: {
    width: 210,
    height: 210,
    alignSelf: 'center',
  },

  bodyText: {
    fontSize: 16,
    lineHeight: 21,
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
  },
  // button: {
  //   backgroundColor: '#f45f78',
  //   borderRadius: 8,
  //   width: 327,
  //   padding: 15,
  //   alignItems: 'center',
  // },
  // buttonText: {
  //   fontSize: 16,
  //   lineHeight: 21,
  //   fontWeight: 'bold',
  //   color: 'white',
  // },
  leftAlignText: {
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between', // Aligns content to the top and bottom
    paddingBottom: 10, // Optional padding to add space between content and button
  },
});

export default UpgradeChangesHowScreen;
