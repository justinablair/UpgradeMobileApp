// navigationTypes.ts

import {StackNavigationProp} from '@react-navigation/stack';

// Define your stack navigation parameter list
export type RootStackParamList = {
  UpgradeIntro: undefined;
  UpgradeChangesHow: undefined;
};

// // Define navigation props for UpgradeIntroScreen
// export type UpgradeIntroScreenProps = {
//   navigation: StackNavigationProp<RootStackParamList, 'UpgradeChangesHow'>;
// };

export type NavigationProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
};
