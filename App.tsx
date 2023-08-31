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
          </Stack.Navigator>
        </NavigationContainer>
      </UserContextProvider>
    </SafeAreaProvider>
  );
}

export default App;
