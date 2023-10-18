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
import UpgradeIntroScreen from './screens/UpgradeIntro';
import UpgradeChangesWeDoScreen from './screens/UpgradeChangesWeDo';
import UpgradeChangesYouDoScreen from './screens/UpgradeChangesYouDo';
import UpgradeChangesNewAccountScreen from './screens/UpgradeChangesNewAccount';
import UpgradeTermsScreen from './screens/UpgradeTerms';
import UpgradeConsentsScreen from './screens/UpgradeConsents';
import UserSelectionScreen from './screens/UserSelection';
import CompanyDetailsScreen from './screens/CompanyDetails';
import MarketingScreen from './screens/Marketing';
import UpgradeTaxCompliantScreen from './screens/UpgradeTaxCompliant';
import UpgradeTaxReportingScreen from './screens/UpgradeTaxReporting';
import UpgradeNationalityScreen from './screens/UpgradeNationality';
import UpgradeUSPersonScreen from './screens/UpgradeUsPerson';
import ConfirmAddressScreen from './screens/ConfirmAddress';
import EnterAddressScreen from './screens/Address';
import PersonalDetailsScreen from './screens/PersonalDetails';
import UpgradeConfirmScreen from './screens/UpgradeConfirmScreen';
import UpgradeRecapScreen from './screens/UpgradeRecap';
import UpgradeStartedScreen from './screens/UpgradeStarted';
import UpgradeCompleteScreen from './screens/UpgradeComplete';
import UpgradedWelcomeScreen from './screens/UpgradedWelcome';
import UpgradedEmailScreen from './screens/UpgradedEmail';
import StepperScreen1 from './screens/Stepper1';
import StepperScreen2 from './screens/Stepper2';
import StepperScreen3 from './screens/Stepper3';
import UpgradeIneligibleResidentScreen from './ErrorScreens/UpgradeIneligibleScreenResident';
import UpgradeIneligibleUSScreen from './ErrorScreens/UpgradeIneligibleUSScreen';
import StepperScreen4 from './screens/Stepper4';
import StepperCompleteScreen from './screens/StepperComplete';
import SettingsScreen from './screens/LightorDarkMode';

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
    <TouchableOpacity onPress={() => toggleExitModal()}>
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
        {renderScreen('ThemeScreen', SettingsScreen, headerOptions)}
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
        {renderScreen('Marketing', MarketingScreen, headerOptions)}
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
          'UpgradeNationality',
          UpgradeNationalityScreen,
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
        {renderScreen('PersonalDetails', PersonalDetailsScreen, headerOptions)}
        {renderScreen('UpgradeConfirm', UpgradeConfirmScreen, headerOptions)}
        {renderScreen('UpgradeRecap', UpgradeRecapScreen, headerOptions)}
        {renderScreen(
          'UpgradeStarted',
          UpgradeStartedScreen,
          headerOptions,
          undefined,
          true,
        )}
        {renderScreen(
          'UpgradeComplete',
          UpgradeCompleteScreen,
          headerOptions,
          undefined,
          true,
        )}
        {renderScreen(
          'UpgradedWelcome',
          UpgradedWelcomeScreen,
          headerOptions,
          undefined,
          true,
        )}
        {renderScreen(
          'UpgradedEmail',
          UpgradedEmailScreen,
          headerOptions,
          undefined,
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

// function App(): JSX.Element {
//   const [isExitModalVisible, setIsExitModalVisible] = useState(false);
//   // const {isDarkMode} = useUserContext(); // Access isDarkMode from context

//   const toggleExitModal = () => {
//     setIsExitModalVisible(!isExitModalVisible);
//   };
//   const headerOptions = commonHeaderOptions({
//     toggleExitModal,
//   });

//   return (
//     <SafeAreaProvider>
//       <UserContextProvider>
//         <NavigationContainer>
//           <StatusBar backgroundColor="#171B1B" />
//           <Stack.Navigator>
//             {renderScreen('Settings', SettingsScreen, {
//               ...headerOptions,
//               headerStyle: {
//                 backgroundColor: Colours.white,
//                 shadowOpacity: 0,
//               },
//             })}
//             {renderScreen('UserSelection', UserSelectionScreen, headerOptions)}
//             {renderScreen('Address', EnterAddressScreen, headerOptions)}
//             {renderScreen(
//               'CompanyDetails',
//               CompanyDetailsScreen,
//               headerOptions,
//             )}
//             {renderScreen('UpgradeIntro', UpgradeIntroScreen, {
//               ...headerOptions,
//               headerStyle: {
//                 backgroundColor: Colours.black,
//                 shadowOpacity: 0,
//                 // backgroundColor: isDarkMode ? Colours.black : Colours.white,
//               },
//             })}
//             {renderScreen('StepperScreen1', StepperScreen1, {
//               ...headerOptions,
//               headerStyle: {
//                 backgroundColor: Colours.black,
//                 shadowOpacity: 0,
//               },
//             })}

//             {renderScreen(
//               'UpgradeChangesWeDo',
//               UpgradeChangesWeDoScreen,
//               headerOptions,
//             )}
//             {renderScreen(
//               'UpgradeChangesYouDo',
//               UpgradeChangesYouDoScreen,
//               headerOptions,
//             )}
//             {renderScreen(
//               'UpgradeChangesNewAccount',
//               UpgradeChangesNewAccountScreen,
//               headerOptions,
//             )}
//             {renderScreen('StepperScreen2', StepperScreen2, {
//               ...headerOptions,
//               headerStyle: {
//                 backgroundColor: Colours.black,
//                 shadowOpacity: 0,
//               },
//             })}
//             {renderScreen('UpgradeTerms', UpgradeTermsScreen, headerOptions)}
//             {renderScreen(
//               'UpgradeConsents',
//               UpgradeConsentsScreen,
//               headerOptions,
//             )}
//             {renderScreen('Marketing', MarketingScreen, headerOptions)}
//             {renderScreen('StepperScreen3', StepperScreen3, {
//               ...headerOptions,
//               headerStyle: {
//                 backgroundColor: Colours.black,
//                 shadowOpacity: 0,
//               },
//             })}
//             {renderScreen(
//               'UpgradeTaxCompliant',
//               UpgradeTaxCompliantScreen,
//               headerOptions,
//             )}
//             {renderScreen(
//               'UpgradeTaxReporting',
//               UpgradeTaxReportingScreen,
//               headerOptions,
//             )}
//             {renderScreen(
//               'UpgradeNationality',
//               UpgradeNationalityScreen,
//               headerOptions,
//             )}
//             {renderScreen(
//               'UpgradeIneligibleResident',
//               UpgradeIneligibleResidentScreen,
//               headerOptions,
//             )}
//             {renderScreen(
//               'UpgradeUSPerson',
//               UpgradeUSPersonScreen,
//               headerOptions,
//             )}
//             {renderScreen(
//               'UpgradeIneligibleUS',
//               UpgradeIneligibleUSScreen,
//               headerOptions,
//             )}
//             {renderScreen('StepperScreen4', StepperScreen4, {
//               ...headerOptions,
//               headerStyle: {
//                 backgroundColor: Colours.black,
//                 shadowOpacity: 0,
//               },
//             })}
//             {renderScreen(
//               'ConfirmAddress',
//               ConfirmAddressScreen,
//               headerOptions,
//             )}
//             {renderScreen('StepperComplete', StepperCompleteScreen, {
//               ...headerOptions,
//               headerStyle: {
//                 backgroundColor: Colours.black,
//                 shadowOpacity: 0,
//               },
//             })}
//             {renderScreen(
//               'PersonalDetails',
//               PersonalDetailsScreen,
//               headerOptions,
//             )}
//             {renderScreen('UpgradeConfirm', UpgradeConfirmScreen, {
//               ...headerOptions,
//               headerStyle: {
//                 backgroundColor: Colours.black,
//                 shadowOpacity: 0,
//               },
//             })}
//             {renderScreen('UpgradeRecap', UpgradeRecapScreen, headerOptions)}
//             {renderScreen('UpgradeStarted', UpgradeStartedScreen, {
//               ...headerOptions,
//               headerStyle: {
//                 backgroundColor: Colours.black,
//                 shadowOpacity: 0,
//               },
//             })}
//             {renderScreen('UpgradeComplete', UpgradeCompleteScreen, {
//               ...headerOptions,
//               headerStyle: {
//                 backgroundColor: Colours.black,
//                 shadowOpacity: 0,
//               },
//             })}
//             {renderScreen('UpgradedWelcome', UpgradedWelcomeScreen, {
//               ...headerOptions,
//               headerStyle: {
//                 backgroundColor: Colours.black,
//                 shadowOpacity: 0,
//               },
//             })}
//             {renderScreen('UpgradedEmail', UpgradedEmailScreen, headerOptions)}
//           </Stack.Navigator>
//           {/* Exit confirmation modal */}
//           <ExitModal
//             visible={isExitModalVisible}
//             onPressClose={() => setIsExitModalVisible(false)}
//             title="Are you sure you want to exit?"
//             content="Your progress won’t be saved."
//             onAgree={() => {
//               setIsExitModalVisible(false);
//             }}
//             toggleExitModal={toggleExitModal} // Pass the
//           />
//         </NavigationContainer>
//       </UserContextProvider>
//     </SafeAreaProvider>
//   );
// }

// Helper function to render screens
function renderScreen<ScreenName extends keyof RootStackParamList>(
  name: ScreenName,
  component: React.ComponentType<any>,
  options?: any,
  additionalProps?: any, // Add this parameter
  hideBackButton: boolean = false, // Add this parameter with a default value of false
) {
  return (
    <Stack.Screen
      name={name}
      component={component}
      options={props => ({
        ...commonHeaderOptions(props),
        ...options,
        headerLeft: hideBackButton ? () => null : undefined, // Conditionally hide the back button
      })}
      initialParams={additionalProps} // Pass additional props
    />
  );
}

export default App;
