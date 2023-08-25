// App.tsx
import React from 'react';
import {StatusBar} from 'react-native';
import UpgradeIntroScreen from './screens/UpgradeIntro';
import UpgradeChangesHowScreen from './screens/UpgradeChangesHow';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './navigationTypes';
import {SafeAreaProvider} from 'react-native-safe-area-context'; // Import SafeAreaProvider
import 'react-native-gesture-handler';

const Stack = createStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#171B1B" />
        <Stack.Navigator>
          <Stack.Screen name="UpgradeIntro" component={UpgradeIntroScreen} />
          <Stack.Screen
            name="UpgradeChangesHow"
            component={UpgradeChangesHowScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
