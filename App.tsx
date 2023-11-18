// App.tsx
import React, {useState} from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

import {CloseIcon} from './components/theme/icons/CloseIcon';
import Colours from './components/theme/Colour';
import ExitModal from './components/theme/modals/ExitModal';
import {UserContextProvider} from './components/UserContext';
import {RootStackParamList} from './navigationTypes';
import {useUserContext} from './components/UserContext';

// Import all screen components
import UpgradeIntroScreen from './screens/upgradeIntro/UpgradeIntro';
import UpgradeChangesWeDoScreen from './screens/upgradeChangesWeDo/UpgradeChangesWeDo';
import UpgradeChangesYouDoScreen from './screens/upgradeChangesYouDo/UpgradeChangesYouDo';
import UpgradeChangesNewAccountScreen from './screens/upgradeChangesNewAccount/UpgradeChangesNewAccount';
import UpgradeTermsScreen from './screens/upgradeTerms/UpgradeTerms';
import UpgradeConsentsScreen from './screens/upgradeConsents/UpgradeConsents';
import UserSelectionScreen from './screens/userSelection/UserSelection';
import UpgradeMarketingScreen from './screens/upgradeMarketing/UpgradeMarketing';
import UpgradeTaxCompliantScreen from './screens/upgradeTaxCompliant/UpgradeTaxCompliant';
import UpgradeTaxReportingScreen from './screens/upgradeTaxReporting/UpgradeTaxReporting';
import UpgradeResidencyScreen from './screens/upgradeResidency/UpgradeResidency';
import UpgradeUSPersonScreen from './screens/upgradeUSPerson/UpgradeUsPerson';
import ConfirmAddressScreen from './screens/upgradeConfirmAddress/UpgradeConfirmAddress';
import EnterAddressScreen from './screens/Address/Address';
import UpgradeEditAddressScreen from './screens/upgradeEditAddress/UpgradeEditAddress';
import UpgradeConfirm from './screens/upgradeConfirm/UpgradeConfirmScreen';
import UpgradeRecapScreen from './screens/upgradeRecap/UpgradeRecap';
import UpgradeStartedScreen from './screens/upgradeStarted/UpgradeStarted';
import UpgradeCompleteScreen from './screens/upgradeComplete/UpgradeComplete';
import UpgradedWelcomeScreen from './screens/upgradedWelcome/UpgradedWelcome';
import UpgradedEmailScreen from './screens/upgradedEmail/UpgradedEmail';
import StepperScreen1 from './screens/steppers/Stepper1';
import StepperScreen2 from './screens/steppers/Stepper2';
import StepperScreen3 from './screens/steppers/Stepper3';
import StepperScreen4 from './screens/steppers/Stepper4';

import UpgradeIneligibleUSScreen from './ErrorScreens/UpgradeIneligibleUSScreen';
import StepperCompleteScreen from './screens/steppers/StepperComplete';
import ThemeScreen from './screens/themeScreen/ThemeScreen';
import CompanyDetailsScreen from './screens/companyDetails/CompanyDetails';
import UpgradeIneligibleResidentScreen from './ErrorScreens/UpgradeIneligibleResidentScreen';
import LoginScreen from './screens/upgradeLogin/UpgradeLogin';

const Stack = createStackNavigator<RootStackParamList>();

const commonHeaderOptions = ({
  toggleExitModal,
}: {
  toggleExitModal: () => void;
}) => ({
  headerStyle: {
    backgroundColor: Colours.white,
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitle: '',
  headerRight: () => (
    <TouchableOpacity
      onPress={() => toggleExitModal()}
      accessible={true}
      accessibilityLabel="Close button">
      <CloseIcon />
    </TouchableOpacity>
  ),
  headerTintColor: Colours.pink,
});

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <UserContextProvider>
        <AppContent />
      </UserContextProvider>
    </SafeAreaProvider>
  );
}
function AppContent(): JSX.Element {
  const [isExitModalVisible, setIsExitModalVisible] = useState(false);
  const {isDarkMode} = useUserContext();

  const toggleExitModal = () => {
    setIsExitModalVisible(!isExitModalVisible);
  };

  const headerOptions = commonHeaderOptions({
    toggleExitModal,
  });

  if (isDarkMode) {
    headerOptions.headerStyle.backgroundColor = Colours.black;
  } else {
    headerOptions.headerStyle.backgroundColor = Colours.white;
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#171B1B" />
      <Stack.Navigator>
        {renderScreen('ThemeScreen', ThemeScreen, headerOptions)}
        {renderScreen('UserSelection', UserSelectionScreen, headerOptions)}
        {renderScreen('Address', EnterAddressScreen, headerOptions)}
        {renderScreen('CompanyDetails', CompanyDetailsScreen, headerOptions)}
        {renderScreen('UpgradeIntro', UpgradeIntroScreen, headerOptions)}
        {renderScreen('StepperScreen1', StepperScreen1, headerOptions)}
        {renderScreen(
          'UpgradeChangesWeDo',
          UpgradeChangesWeDoScreen,
          headerOptions,
        )}
        {renderScreen(
          'UpgradeChangesYouDo',
          UpgradeChangesYouDoScreen,
          headerOptions,
        )}
        {renderScreen(
          'UpgradeChangesNewAccount',
          UpgradeChangesNewAccountScreen,
          headerOptions,
        )}
        {renderScreen('StepperScreen2', StepperScreen2, headerOptions)}
        {renderScreen('UpgradeTerms', UpgradeTermsScreen, headerOptions)}
        {renderScreen('UpgradeConsents', UpgradeConsentsScreen, headerOptions)}
        {renderScreen(
          'UpgradeMarketing',
          UpgradeMarketingScreen,
          headerOptions,
        )}
        {renderScreen('StepperScreen3', StepperScreen3, headerOptions)}
        {renderScreen(
          'UpgradeTaxCompliant',
          UpgradeTaxCompliantScreen,
          headerOptions,
        )}
        {renderScreen(
          'UpgradeTaxReporting',
          UpgradeTaxReportingScreen,
          headerOptions,
        )}
        {renderScreen(
          'UpgradeResidency',
          UpgradeResidencyScreen,
          headerOptions,
        )}
        {renderScreen(
          'UpgradeIneligibleResident',
          UpgradeIneligibleResidentScreen,
          headerOptions,
        )}
        {renderScreen('UpgradeUSPerson', UpgradeUSPersonScreen, headerOptions)}
        {renderScreen(
          'UpgradeIneligibleUS',
          UpgradeIneligibleUSScreen,
          headerOptions,
        )}
        {renderScreen('StepperScreen4', StepperScreen4, headerOptions)}
        {renderScreen('ConfirmAddress', ConfirmAddressScreen, headerOptions)}
        {renderScreen('StepperComplete', StepperCompleteScreen, headerOptions)}
        {renderScreen(
          'UpgradeEditAddress',
          UpgradeEditAddressScreen,
          headerOptions,
        )}
        {renderScreen('UpgradeConfirm', UpgradeConfirm, headerOptions)}
        {renderScreen('UpgradeRecap', UpgradeRecapScreen, headerOptions)}
        {renderScreen(
          'UpgradeStarted',
          UpgradeStartedScreen,
          headerOptions,
          undefined,
          true,
          true,
        )}
        {renderScreen(
          'UpgradeComplete',
          UpgradeCompleteScreen,
          headerOptions,
          undefined,
          true,
          true,
        )}
        {renderScreen(
          'Login',
          LoginScreen,
          headerOptions,
          undefined,
          true,
          true,
        )}
        {renderScreen(
          'UpgradedWelcome',
          UpgradedWelcomeScreen,
          headerOptions,
          undefined,
          true,
          true,
        )}
        {renderScreen(
          'UpgradedEmail',
          UpgradedEmailScreen,
          headerOptions,
          undefined,
          true,
          true,
        )}
      </Stack.Navigator>
      <ExitModal
        visible={isExitModalVisible}
        onPressClose={() => setIsExitModalVisible(false)}
        title="Are you sure you want to exit?"
        content="Your progress won’t be saved."
        onAgree={() => {
          setIsExitModalVisible(false);
        }}
        toggleExitModal={toggleExitModal}
      />
    </NavigationContainer>
  );
}

// Helper function to render screens
function renderScreen<ScreenName extends keyof RootStackParamList>(
  name: ScreenName,
  component: React.ComponentType<any>,
  options?: any,
  additionalProps?: any,
  hideBackButton: boolean = false,
  hideExitButton: boolean = false,
) {
  return (
    <Stack.Screen
      name={name}
      component={component}
      options={props => {
        const baseHeaderOptions = commonHeaderOptions(props);
        const screenHeaderOptions = {...baseHeaderOptions, ...options};
        if (hideExitButton) {
          screenHeaderOptions.headerRight = () => null;
        }
        if (hideBackButton) {
          screenHeaderOptions.headerLeft = () => null;
        }
        return screenHeaderOptions;
      }}
      initialParams={additionalProps} // Pass additional props
    />
  );
}

export default App;
