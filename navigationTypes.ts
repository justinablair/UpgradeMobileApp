// navigationTypes.ts

import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  // Address: undefined;
  // UserSelection: undefined;
  // CompanyDetails: undefined;
  UpgradeIntro: undefined;
  StepperScreen1: undefined;
  UpgradeChangesWeDo: undefined;
  UpgradeChangesYouDo: undefined;
  UpgradeChangesNewAccount: undefined;
  StepperScreen2: undefined;
  UpgradeTerms: undefined;
  UpgradeConsents: undefined;
  Marketing: undefined;
  StepperScreen3: undefined;
  UpgradeTaxCompliant: undefined;
  UpgradeTaxReporting: undefined;
  UpgradeNationality: undefined;
  UpgradeIneligible: undefined;
  UpgradeUSPerson: undefined;
  ConfirmAddress: undefined;
  PersonalDetails: undefined;
  UpgradeConfirm: undefined;
  UpgradeRecap: undefined;
  UpgradeStarted: undefined;
  UpgradeComplete: undefined;
  UpgradedWelcome: undefined;
  UpgradedEmail: undefined;
};

export type NavigationProps<T extends keyof RootStackParamList> = {
  navigation: StackNavigationProp<RootStackParamList, T>;
};
