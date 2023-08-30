import React, {useState} from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Linking,
  Image,
} from 'react-native';
import Text from '../components/Text';
import Colours from '../components/theme/Colour';
import PinkButton from '../components/PinkButton'; // Update the path to your PinkButton component
import {NavigationProps} from '../navigationTypes';
import {CheckmarkIcon} from '../components/theme/CheckboxIcon'; // Update the path to your CheckmarkIcon component
import {ChevronRightIcon} from '../components/theme/ChevronRight'; // Update the path to your ChevronRightIcon component

type UpgradeConsentsProps = NavigationProps<'UpgradeConsents'>;

const UpgradeConsentsScreen: React.FC<UpgradeConsentsProps> = ({
  navigation,
}) => {
  const [consentsAccepted, setConsentsAccepted] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');
  const [activeConsentIndex, setActiveConsentIndex] = useState(-1);
  const [modalContentJSX, setModalContentJSX] = useState<JSX.Element | null>(
    null,
  );

  const consentTitles = [
    'Opening your new account',
    'Closing your e-money account',
    'Sharing your data',
    'Transferring your balance',
  ];

  const handleConsentToggle = (index: number) => {
    const title = consentTitles[index];
    const content = getModalContentForTitle(title);
    setModalTitle(title);
    setModalContent(content);
    setActiveConsentIndex(index);

    setModalVisible(true);
  };

  const handleSwitchButtonPress = () => {
    navigation.navigate('Marketing');
  };

  const handleAgree = () => {
    if (activeConsentIndex !== -1) {
      const updatedConsents = [...consentsAccepted];
      updatedConsents[activeConsentIndex] = true;
      setConsentsAccepted(updatedConsents);
      setModalVisible(false);
      setActiveConsentIndex(-1); // Reset activeConsentIndex after agreement
    }
  };
  const getModalContentForTitle = (title: string) => {
    // Implement the logic to return the appropriate content based on the title
    // For instance:
    switch (title) {
      case 'Opening your new account':
        return 'Once we’ve confirmed your switch, we’ll open a new bank account on your behalf. We’ll send you a welcome email with your new account details.';
      case 'Closing your e-money account':
        return 'As part of the switch, we’ll close your e-money account. We’ll email your scheduled payment and Direct Debit information, so you can set them up again in your new bank account.';
      case 'Sharing your data':
        return (
          <>
            Data you gave us when you opened your e-money account, and any data
            we’ve collected since, will be used to open your new bank account.
            {'\n\n'}
            <Text variant="bodyText" style={{color: Colours.black}}>
              <Text
                onPress={() =>
                  Linking.openURL(
                    'https://www.mettle.co.uk/upgrade-data-use.pdf',
                  )
                }
                variant="bodyText bodyTextBold"
                style={{color: Colours.pink}}>
                Read more about how we’ll use your data.{'\n\n'}
              </Text>
              If your business has a second owner, you’ll also need to download
              and share this document with them.
            </Text>
          </>
        );
      case 'Transferring your balance':
        return 'We’ll move your total balance (including money in pots) to your new account.';
      default:
        return '';
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text variant="screenTitle leftAlign" style={{color: Colours.black}}>
            Your consents to switch
          </Text>
          <Text variant="bodyText" style={{color: Colours.black}}>
            To switch your e-money account to a Mettle bank account, you need to
            agree to the following:
          </Text>
        </View>
        <View style={styles.space} />
        {consentTitles.map((title, index) => (
          <TouchableOpacity
            key={index}
            style={styles.box}
            onPress={() => handleConsentToggle(index)}>
            <View style={styles.textContainer}>
              <Text variant="bodyText leftAlign" style={{color: Colours.black}}>
                {title}
              </Text>
            </View>
            {consentsAccepted[index] ? <CheckmarkIcon /> : <ChevronRightIcon />}
          </TouchableOpacity>
        ))}

        <PinkButton
          buttonText="Next"
          onPress={handleSwitchButtonPress}
          disabled={!consentsAccepted.every(accepted => accepted)}
        />
      </View>
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.modalCloseIcon}
              onPress={() => setModalVisible(false)}>
              <Image
                source={require('../assets/Close.png')}
                style={styles.modalCloseIcon}
              />
            </TouchableOpacity>
            <Text
              variant="leftAlign"
              style={[styles.modalTitle, {color: Colours.black}]}>
              {modalTitle}
            </Text>
            <Text
              variant="leftAlign"
              style={[styles.bodyText, {color: Colours.black}]}>
              {modalContent}
            </Text>
            <PinkButton buttonText="Agree" onPress={handleAgree} />
          </View>
        </View>
      </Modal>
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
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 8,
    alignSelf: 'center',
    width: 327,
    borderBottomWidth: 1,
    borderBottomColor: Colours.black05,
  },
  textContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingLeft: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: Colours.white,
    width: '100%',
    borderRadius: 8,
    padding: 20,
    paddingTop: 50,
    position: 'relative',
  },
  modalTitle: {
    fontSize: 22,
    lineHeight: 26,
    marginBottom: 10,
    fontWeight: '500',
  },
  modalCloseIcon: {
    position: 'absolute',
    top: 7,
    right: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
    padding: 5,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 21,
    marginBottom: 20,
  },
});

export default UpgradeConsentsScreen;
