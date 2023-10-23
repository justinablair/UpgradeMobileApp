import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import UpgradeIneligibleResidentScreen from './UpgradeIneligibleResidentScreen';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigationTypes';
import {NavigationContainer} from '@react-navigation/native';
import {AccessibilityInfo} from 'react-native';
import UserContextProvider from '../components/UserContext';

jest.mock('../components/UserContext', () => {
  const originalModule = jest.requireActual('../components/UserContext');
  return {
    __esModule: true,
    ...originalModule,
    useUserContext: () => ({
      userType: 'limitedCompany',
    }),
    UserContextProvider: ({children}: {children: React.ReactNode}) => (
      <>{children}</>
    ),
  };
});

describe('UpgradeIneligibleResidentScreen', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'UpgradeIneligibleResident'
  > = {
    navigate: jest.fn(),
    goBack: jest.fn(),
    dispatch: jest.fn(),
    setParams: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    canGoBack: () => true,
    isFocused: () => true,
    push: jest.fn(),
    replace: jest.fn(),
    pop: jest.fn(),
    popToTop: jest.fn(),
    setOptions: jest.fn(),
    reset: jest.fn(),
    getParent: jest.fn(),
    getState: jest.fn(),
    getId: jest.fn(),
  };
  it('renders title correctly', () => {
    const {getByLabelText} = render(
      <UserContextProvider>
        <UpgradeIneligibleResidentScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    const title = getByLabelText('upgradeIneligibleTitle');
    expect(title).toBeTruthy();
  });

  it('calls AccessibilityInfo.announceForAccessibility with the correct message', () => {
    const mockAnnounceForAccessibility = jest.fn();
    jest.spyOn(React, 'useEffect').mockImplementation(f => f());
    jest.spyOn(React, 'useContext').mockReturnValue({isDarkMode: true});
    jest
      .spyOn(AccessibilityInfo, 'announceForAccessibility')
      .mockImplementation(mockAnnounceForAccessibility);

    render(
      <UserContextProvider>
        <NavigationContainer>
          <UpgradeIneligibleResidentScreen navigation={mockNavigation} />
        </NavigationContainer>
      </UserContextProvider>,
    );

    expect(mockAnnounceForAccessibility).toHaveBeenCalledWith(
      'Sorry, we can’t open a bank account for you',
    );
  });
  it('renders content correctly based on user type', () => {
    const {getByLabelText} = render(
      <UserContextProvider>
        <UpgradeIneligibleResidentScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    const limitedCompanyContent = getByLabelText('upgradeIneligibleContent');
    expect(limitedCompanyContent).toBeTruthy();
  });

  it('handles button press correctly', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <UpgradeIneligibleResidentScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    const button = getByTestId('buttonText');
    act(() => {
      fireEvent.press(button);
    });
    expect(mockNavigation.navigate).toHaveBeenCalledWith('UpgradeIntro');
  });
});
