// App.tsx
import React, {useState} from 'react';
import {Image, StatusBar, TouchableOpacity} from 'react-native';
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
import Colours from './components/theme/Colour';
import {CloseIcon} from './components/theme/CloseIcon';
import ExitModal from './components/ExitModal';

const Stack = createStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  const [isExitModalVisible, setIsExitModalVisible] = useState(false);

  const commonHeaderOptions = {
    headerStyle: {
      borderBottomWidth: 0, // Remove the border
      elevation: 0, // For Android, remove shadow
      shadowOpacity: 0, // For iOS, remove shadow
    },
    headerTitle: '', // Hide the title
    headerRight: () => (
      <TouchableOpacity onPress={() => setIsExitModalVisible(true)}>
        <CloseIcon />
      </TouchableOpacity>
    ),
    headerTintColor: Colours.pink, // Change the back button color
  };

  return (
    <SafeAreaProvider>
      <UserContextProvider>
        <NavigationContainer>
          <StatusBar backgroundColor="#171B1B" />
          <Stack.Navigator>
            <Stack.Screen
              name="UserSelection"
              component={UserSelectionScreen}
              options={commonHeaderOptions}
            />
            <Stack.Screen name="Address" component={EnterAddressScreen} />
            <Stack.Screen
              name="CompanyDetails"
              component={CompanyDetailsScreen}
              options={commonHeaderOptions}
            />
            <Stack.Screen name="UpgradeIntro" component={UpgradeIntroScreen} />
            <Stack.Screen
              name="UpgradeChangesHow"
              component={UpgradeChangesHowScreen}
              options={commonHeaderOptions}
            />
            <Stack.Screen
              name="UpgradeChangesWeDo"
              component={UpgradeChangesWeDoScreen}
              options={commonHeaderOptions}
            />
            <Stack.Screen
              name="UpgradeChangesYouDo"
              component={UpgradeChangesYouDoScreen}
              options={commonHeaderOptions}
            />
            <Stack.Screen
              name="UpgradeChangesNewAccount"
              component={UpgradeChangesNewAccountScreen}
              options={commonHeaderOptions}
            />
            <Stack.Screen name="UpgradeTerms" component={UpgradeTermsScreen} />
            <Stack.Screen
              name="UpgradeConsents"
              component={UpgradeConsentsScreen}
              options={commonHeaderOptions}
            />
            <Stack.Screen name="Marketing" component={MarketingScreen} />
            <Stack.Screen
              name="UpgradeTaxCompliant"
              component={UpgradeTaxCompliantScreen}
              options={commonHeaderOptions}
            />
            <Stack.Screen
              name="UpgradeTaxReporting"
              component={UpgradeTaxReportingScreen}
              options={commonHeaderOptions}
            />
            <Stack.Screen
              name="UpgradeNationality"
              component={UpgradeNationalityScreen}
              options={commonHeaderOptions}
            />
            <Stack.Screen
              name="UpgradeUSPerson"
              component={UpgradeUSPersonScreen}
              options={commonHeaderOptions}
            />
            <Stack.Screen
              name="UpgradeIneligible"
              component={UpgradeIneligibleScreen}
              options={commonHeaderOptions}
            />
            <Stack.Screen
              name="ConfirmAddress"
              component={ConfirmAddressScreen}
              options={commonHeaderOptions}
            />
            <Stack.Screen
              name="PersonalDetails"
              component={PersonalDetailsScreen}
              options={commonHeaderOptions}
            />
            <Stack.Screen
              name="UpgradeConfirm"
              component={UpgradeConfirmScreen}
              options={commonHeaderOptions}
            />
            <Stack.Screen name="UpgradeRecap" component={UpgradeRecapScreen} />
            <Stack.Screen
              name="UpgradeStarted"
              component={UpgradeStartedScreen}
              options={commonHeaderOptions}
            />
            <Stack.Screen
              name="UpgradeComplete"
              component={UpgradeCompleteScreen}
              options={commonHeaderOptions}
            />
            <Stack.Screen
              name="UpgradedWelcome"
              component={UpgradedWelcomeScreen}
              options={commonHeaderOptions}
            />
            <Stack.Screen
              name="UpgradedEmail"
              component={UpgradedEmailScreen}
              options={commonHeaderOptions}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </UserContextProvider>
      {isExitModalVisible && (
        <ExitModal
          visible={isExitModalVisible}
          onPressClose={() => setIsExitModalVisible(false)}
          title="Are you sure you want to exit?"
          content="Your progress won’t be saved."
          navigation={null} // Pass your navigation prop here if needed
        />
      )}
    </SafeAreaProvider>
  );
}

export default App;
