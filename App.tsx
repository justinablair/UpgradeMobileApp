// App.tsx
import React, {useState} from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

import {CloseIcon} from './components/theme/CloseIcon';
import Colours from './components/theme/Colour';
import ExitModal from './components/theme/modals/ExitModal';
import {UserContextProvider} from './components/UserContext';
import {RootStackParamList} from './navigationTypes';

// Import all screen components
import UpgradeIntroScreen from './screens/UpgradeIntro';
import UpgradeChangesHowScreen from './screens/UpgradeChangesHow';
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
import UpgradeIneligibleScreen from './ErrorScreens/UpgradeIneligibleScreen';
import ConfirmAddressScreen from './screens/ConfirmAddress';
import EnterAddressScreen from './screens/Address';
import PersonalDetailsScreen from './screens/PersonalDetails';
import UpgradeConfirmScreen from './screens/UpgradeConfirmScreen';
import UpgradeRecapScreen from './screens/UpgradeRecap';
import UpgradeStartedScreen from './screens/UpgradeStarted';
import UpgradeCompleteScreen from './screens/UpgradeComplete';
import UpgradedWelcomeScreen from './screens/UpgradedWelcome';
import UpgradedEmailScreen from './screens/UpgradedEmail';

const Stack = createStackNavigator<RootStackParamList>();

// Common header options shared across multiple screens
const commonHeaderOptions = ({navigation}: {navigation: any}) => ({
  headerStyle: {
    borderBottomWidth: 0, // Remove the border
    elevation: 0, // For Android, remove shadow
    shadowOpacity: 0, // For iOS, remove shadow
  },
  headerTitle: '', // Hide the title
  headerRight: () => (
    <TouchableOpacity
      onPress={() => navigation.setParams({isExitModalVisible: true})}>
      <CloseIcon />
    </TouchableOpacity>
  ),
  headerTintColor: Colours.pink, // Change the back button color
});

function App(): JSX.Element {
  const [isExitModalVisible, setIsExitModalVisible] = useState(false);

  return (
    <SafeAreaProvider>
      <UserContextProvider>
        <NavigationContainer>
          <StatusBar backgroundColor="#171B1B" />
          <Stack.Navigator>
            {renderScreen('UserSelection', UserSelectionScreen)}
            {renderScreen('Address', EnterAddressScreen)}
            {renderScreen('CompanyDetails', CompanyDetailsScreen)}
            {renderScreen('UpgradeIntro', UpgradeIntroScreen, {
              headerStyle: {
                backgroundColor: Colours.black,
                shadowOpacity: 0,
              },
            })}
            {renderScreen('UpgradeChangesHow', UpgradeChangesHowScreen, {
              headerStyle: {
                backgroundColor: Colours.black,
                shadowOpacity: 0,
              },
            })}
            {renderScreen('UpgradeChangesWeDo', UpgradeChangesWeDoScreen)}
            {renderScreen('UpgradeChangesYouDo', UpgradeChangesYouDoScreen)}
            {renderScreen(
              'UpgradeChangesNewAccount',
              UpgradeChangesNewAccountScreen,
            )}
            {renderScreen('UpgradeTerms', UpgradeTermsScreen)}
            {renderScreen('UpgradeConsents', UpgradeConsentsScreen)}
            {renderScreen('Marketing', MarketingScreen)}
            {renderScreen('UpgradeTaxCompliant', UpgradeTaxCompliantScreen)}
            {renderScreen('UpgradeTaxReporting', UpgradeTaxReportingScreen)}
            {renderScreen('UpgradeNationality', UpgradeNationalityScreen)}
            {renderScreen('UpgradeUSPerson', UpgradeUSPersonScreen)}
            {renderScreen('UpgradeIneligible', UpgradeIneligibleScreen)}
            {renderScreen('ConfirmAddress', ConfirmAddressScreen)}
            {renderScreen('PersonalDetails', PersonalDetailsScreen)}
            {renderScreen('UpgradeConfirm', UpgradeConfirmScreen)}
            {renderScreen('UpgradeRecap', UpgradeRecapScreen)}
            {renderScreen('UpgradeStarted', UpgradeStartedScreen, {
              headerStyle: {
                backgroundColor: Colours.black,
                shadowOpacity: 0,
              },
            })}
            {renderScreen('UpgradeComplete', UpgradeCompleteScreen, {
              headerStyle: {
                backgroundColor: Colours.black,
                shadowOpacity: 0,
              },
            })}
            {renderScreen('UpgradedWelcome', UpgradedWelcomeScreen, {
              headerStyle: {
                backgroundColor: Colours.black,
                shadowOpacity: 0,
              },
            })}
            {renderScreen('UpgradedEmail', UpgradedEmailScreen)}
          </Stack.Navigator>
          {/* Exit confirmation modal */}
          <ExitModal
            visible={isExitModalVisible}
            onPressClose={() => setIsExitModalVisible(false)}
            title="Are you sure you want to exit?"
            content="Your progress won’t be saved."
            onNavigateToUpgradeIntro={() => {}}
          />
        </NavigationContainer>
      </UserContextProvider>
    </SafeAreaProvider>
  );
}
// Helper function to render screens
function renderScreen<ScreenName extends keyof RootStackParamList>(
  name: ScreenName,
  component: React.ComponentType<any>,
  options?: any,
) {
  return (
    <Stack.Screen
      name={name}
      component={component}
      options={props => ({
        ...commonHeaderOptions(props),
        ...options,
      })}
    />
  );
}

export default App;
