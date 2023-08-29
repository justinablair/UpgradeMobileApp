// App.tsx
import React from 'react';
import {StatusBar} from 'react-native';
import UpgradeIntroScreen from './screens/UpgradeIntro';
import UpgradeChangesHowScreen from './screens/UpgradeChangesHow';
import UpgradeChangesWeDoScreen from './screens/UpgradeChangesWeDo';
import UpgradeChangesYouDoScreen from './screens/UpgradeChangesYouDo';
import UpgradeChangesNewAccountScreen from './screens/UpgradeChangesNewAccount';
import UpgradeTermsScreen from './screens/UpgradeTerms';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './navigationTypes';
import {SafeAreaProvider} from 'react-native-safe-area-context'; // Import SafeAreaProvider
import 'react-native-gesture-handler';
import UserSelectionScreen from './screens/MockData';

const Stack = createStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#171B1B" />
        <Stack.Navigator>
          <Stack.Screen
            name="UserSelectionScreen"
            component={UserSelectionScreen}
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
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
