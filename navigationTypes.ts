// navigationTypes.ts

import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Address: undefined;
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
  UpgradeTaxCompliant: undefined;
  UpgradeTaxReporting: undefined;
  UpgradeNationality: undefined;
  UpgradeUSPerson: undefined;
  UpgradeUSPersonIneligble: undefined;
  ConfirmAddress: undefined;
};

export type NavigationProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
};
