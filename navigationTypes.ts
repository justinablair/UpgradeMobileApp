// navigationTypes.ts

import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  UserSelection: undefined;
  CompanyDetails: undefined;
  UpgradeIntro: undefined;
  UpgradeChangesHow: undefined;
  UpgradeChangesWeDo: undefined;
  UpgradeChangesYouDo: undefined;
  UpgradeChangesNewAccount: undefined;
  UpgradeTerms: undefined;
  UpgradeConsents: undefined;
  Marketing: undefined;
};

export type NavigationProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
};
