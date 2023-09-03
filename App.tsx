// App.tsx
import React from 'react';
import {StatusBar} from 'react-native';
import UpgradeIntroScreen from './screens/UpgradeIntro';
import UpgradeChangesHowScreen from './screens/UpgradeChangesHow';
import UpgradeChangesWeDoScreen from './screens/UpgradeChangesWeDo';
import UpgradeChangesYouDoScreen from './screens/UpgradeChangesYouDo';
import UpgradeChangesNewAccountScreen from './screens/UpgradeChangesNewAccount';
import UpgradeTermsScreen from './screens/UpgradeTerms';
import UpgradeConsentsScreen from './screens/UpgradeConsents';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './navigationTypes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import UserSelectionScreen from './screens/UserSelection';
import {UserContextProvider} from './components/UserContext';
import CompanyDetailsScreen from './screens/CompanyDetails';
import MarketingScreen from './screens/Marketing';
import UpgradeTaxCompliantScreen from './screens/UpgradeTaxCompliant';
import UpgradeTaxReportingScreen from './screens/UpgradeTaxReporting';
import UpgradeNationalityScreen from './screens/UpgradeNationality';
import UpgradeUSPersonScreen from './screens/UpgradeUsPerson';
import UpgradeUSPersonIneligbleScreen from './ErrorScreens/UpgradeUSPersonIneligbleScreen';
import ConfirmAddressScreen from './screens/ConfirmAddress';
import EnterAddressScreen from './screens/Address';
import PersonalDetailsScreen from './screens/PersonalDetails';
import UpgradeConfirmScreen from './screens/UpgradeConfirmScreen';
import UpgradeRecapScreen from './screens/UpgradeRecap';
import UpgradeStartedScreen from './screens/UpgradeStarted';
import UpgradeCompleteScreen from './screens/UpgradeComplete';
import LoginScreen from './screens/Login';
import UpgradedWelcomeScreen from './screens/UpgradedWelcome';
import UpgradedEmailScreen from './screens/UpgradedEmail';
const Stack = createStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <UserContextProvider>
        <NavigationContainer>
          <StatusBar backgroundColor="#171B1B" />
          <Stack.Navigator>
            <Stack.Screen
              name="UserSelection"
              component={UserSelectionScreen}
            />
            <Stack.Screen name="Address" component={EnterAddressScreen} />
            <Stack.Screen
              name="CompanyDetails"
              component={CompanyDetailsScreen}
            />
            <Stack.Screen name="UpgradeIntro" component={UpgradeIntroScreen} />
            <Stack.Screen
              name="UpgradeChangesHow"
              component={UpgradeChangesHowScreen}
            />
            <Stack.Screen
              name="UpgradeChangesWeDo"
              component={UpgradeChangesWeDoScreen}
            />
            <Stack.Screen
              name="UpgradeChangesYouDo"
              component={UpgradeChangesYouDoScreen}
            />
            <Stack.Screen
              name="UpgradeChangesNewAccount"
              component={UpgradeChangesNewAccountScreen}
            />
            <Stack.Screen name="UpgradeTerms" component={UpgradeTermsScreen} />
            <Stack.Screen
              name="UpgradeConsents"
              component={UpgradeConsentsScreen}
            />
            <Stack.Screen name="Marketing" component={MarketingScreen} />
            <Stack.Screen
              name="UpgradeTaxCompliant"
              component={UpgradeTaxCompliantScreen}
            />
            <Stack.Screen
              name="UpgradeTaxReporting"
              component={UpgradeTaxReportingScreen}
            />
            <Stack.Screen
              name="UpgradeNationality"
              component={UpgradeNationalityScreen}
            />
            <Stack.Screen
              name="UpgradeUSPerson"
              component={UpgradeUSPersonScreen}
            />
            <Stack.Screen
              name="UpgradeUSPersonIneligble"
              component={UpgradeUSPersonIneligbleScreen}
            />
            <Stack.Screen
              name="ConfirmAddress"
              component={ConfirmAddressScreen}
            />
            <Stack.Screen
              name="PersonalDetails"
              component={PersonalDetailsScreen}
            />
            <Stack.Screen
              name="UpgradeConfirm"
              component={UpgradeConfirmScreen}
            />
            <Stack.Screen name="UpgradeRecap" component={UpgradeRecapScreen} />
            <Stack.Screen
              name="UpgradeStarted"
              component={UpgradeStartedScreen}
            />
            <Stack.Screen
              name="UpgradeComplete"
              component={UpgradeCompleteScreen}
            />
            {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
            <Stack.Screen
              name="UpgradedWelcome"
              component={UpgradedWelcomeScreen}
            />
            <Stack.Screen
              name="UpgradedEmail"
              component={UpgradedEmailScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </UserContextProvider>
    </SafeAreaProvider>
  );
}

export default App;
