import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import PinkButton from '../components/PinkButton';
import InfoModal from '../components/InfoModal';
import Text from '../components/Text';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  UpgradeChangesHow: undefined;
};

type UpgradeIntroScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'UpgradeChangesHow'>;
};

const UpgradeIntroScreen: React.FC<UpgradeIntroScreenProps> = ({
  navigation,
}) => {
  const [showPaymentInfoModal, setShowPaymentInfoModal] = useState(false);
  const [showChapsInfoModal, setShowChapsInfoModal] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor="black" />
      <View>
        <Image
          source={require('../assets/rocket.png')}
          style={styles.rocketImage}
          accessibilityLabel="Mettle Bank Account Logo"
        />
        <Text variant="headerMedium">Welcome to the Mettle bank account</Text>
        <Text variant="bodyText">
          We’ve built a new bank account, which will replace the e-money account
          you currently use.
        </Text>
      </View>
      <View style={styles.section}>
        <Text variant="headerSmall">What’s new</Text>
      </View>
      <View style={styles.box}>
        <Image
          source={require('../assets/FSCSLogo.png')}
          style={styles.fscsLogo}
          accessibilityLabel="FSCS Logo"
        />
        <Text variant="headerSmall">Funds protected up to £85,000</Text>
        <Text variant="bodyText" style={styles.centeredText}>
          With the new Mettle bank account, your funds are protected by the
          Financial Services Compensation Scheme (FSCS) up to £85k.
        </Text>
      </View>
      <View style={styles.box}>
        <View style={styles.infoContainer}>
          <Text style={styles.bodyTextWithImage}>
            Your annual cash deposit limit will be £23,000
          </Text>
          <TouchableOpacity
            onPress={() => setShowPaymentInfoModal(true)}
            accessibilityLabel="More info on cash deposit limit">
            <Image
              source={require('../assets/Info.png')}
              style={styles.infoIcon}
              accessibilityLabel="Cash Deposit Limit Info"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.infoContainer}>
          <Text style={styles.bodyTextWithImage}>
            Your account won’t accept CHAPS payments
          </Text>
          <TouchableOpacity
            onPress={() => setShowChapsInfoModal(true)}
            accessibilityLabel="More info on CHAPS payments">
            <Image
              source={require('../assets/Info.png')}
              style={styles.infoIcon}
              accessibilityLabel="CHAPS Payments Info"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.box}>
        <Text variant="bodyText">
          Scheduled payments will be processed on business days only.
        </Text>
      </View>
      <View style={styles.section}>
        <Text variant="headerSmall">What this means for you</Text>
      </View>
      <View style={styles.box}>
        <Text variant="bodyText">
          We’ll close your e-money account. This means you’ll no longer have
          access to your transaction history and existing invoices.
        </Text>
      </View>
      <PinkButton
        buttonText="Switch now"
        onPress={() => console.log('Switch button pressed')}
        navigateToScreen="UpgradeChangesHow"
        navigation={navigation}
      />
      <TouchableOpacity onPress={() => console.log('Switch button pressed')}>
        {/* <Text style={styles.buttonText}>Switch now</Text> */}
      </TouchableOpacity>
      {/* Payment Info Modal */}
      <InfoModal
        visible={showPaymentInfoModal}
        onPressClose={() => setShowPaymentInfoModal(false)}
        title="Your cash deposit limit"
        content="This is the amount of cash you can deposit into your Mettle account annually. It’s different from your account limit."
        accessibilityLabel="Close Payment Info Modal"
      />
      {/* Chaps Info Modal */}
      <InfoModal
        visible={showChapsInfoModal}
        onPressClose={() => setShowChapsInfoModal(false)}
        title="What is a CHAPS payment?"
        content="This is a type of payment, usually used to send high-value payments to other accounts."
        accessibilityLabel="Close CHAPS Info Modal"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#171B1B',
    padding: 25,
  },

  rocketImage: {
    width: 210,
    height: 210,
    marginTop: 20,
    alignSelf: 'center',
  },
  //   headerMedium: {
  //     fontSize: 24,
  //     fontWeight: 'bold',
  //     textAlign: 'left',
  //     marginTop: 10,
  //     color: 'white',
  //   },
  //   bodyText: {
  //     fontSize: 16,
  //     lineHeight: 21,
  //     textAlign: 'left', // Updated to 'left'
  //     marginTop: 10,
  //     color: 'white',
  //   },
  centeredText: {
    textAlign: 'center',
  },
  //   headerSmall: {
  //     fontSize: 18,
  //     fontWeight: 'bold',
  //     color: 'white',
  //   },
  section: {
    marginTop: 20,
  },
  box: {
    backgroundColor: '#2e3232',
    borderRadius: 8,
    width: 327,
    padding: 20,
    marginTop: 10,
  },
  fscsLogo: {
    alignSelf: 'center',
    marginBottom: 30, // Add this line to create space at the bottom
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bodyTextWithImage: {
    flex: 1,
    fontSize: 16,
    lineHeight: 21,
    marginRight: 10, // Adjusted for better spacing
    color: 'white',
  },
  infoIcon: {
    width: 32,
    height: 32,
  },
  //   button: {
  //     backgroundColor: '#f45f78', // Keep button color
  //     borderRadius: 8,
  //     width: 327,
  //     padding: 15,
  //     alignItems: 'center',
  //     alignSelf: 'center',
  //     marginTop: 20,
  //   },
  //   buttonText: {
  //     fontSize: 16,
  //     lineHeight: 21,
  //     fontWeight: 'bold',
  //     color: 'white', // Keep text color
  //   },

  //   modalContainer: {
  //     flex: 1,
  //     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   },
  //   modalContent: {
  //     backgroundColor: '#454949',
  //     width: 327,
  //     height: 199,
  //     borderRadius: 8,
  //     padding: 20,
  //     paddingTop: 50, // Add more padding at the top for the Close.png icon
  //     position: 'relative',
  //   },
  //   modalTitle: {
  //     fontSize: 22,
  //     lineHeight: 26,
  //     marginBottom: 10,
  //     color: 'white', // Keep text color
  //     fontWeight: '500',
  //   },
  //   modalCloseIcon: {
  //     position: 'absolute',
  //     top: 7,
  //     right: 10,
  //     width: 32,
  //     height: 32,
  //     borderRadius: 16,
  //     padding: 5,
  //     backgroundColor: '#f45f78', // Improve contrast by adding background color
  //   },
});

export default UpgradeIntroScreen;
