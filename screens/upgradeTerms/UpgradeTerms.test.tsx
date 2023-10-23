import React from 'react';
import {act, fireEvent, render} from '@testing-library/react-native';
import UpgradeTermsScreen from './UpgradeTerms';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {AccessibilityInfo, Linking} from 'react-native';
import UserContextProvider from '../../components/UserContext';

jest.mock('../../components/UserContext', () => {
  const originalModule = jest.requireActual('../../components/UserContext');
  return {
    __esModule: true,
    ...originalModule,
    useUserContext: () => ({
      userType: 'limitedCompany',
      businessName: 'Test Business',
    }),
    UserContextProvider: ({children}: {children: React.ReactNode}) => (
      <>{children}</>
    ),
  };
});

describe('UpgradeTermsScreen', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'UpgradeTerms'
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
  it('renders correctly', () => {
    render(
      <UserContextProvider>
        <UpgradeTermsScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
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
        <UpgradeTermsScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(mockAnnounceForAccessibility).toHaveBeenCalledWith(
      'Terms and Privacy Notice',
    );
  });

  it('should open terms link on press', () => {
    const {getByText} = render(
      <UserContextProvider>
        <UpgradeTermsScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    act(() => {
      fireEvent.press(getByText('Terms'));
    });
    expect(Linking.openURL).toHaveBeenCalledWith(
      'https://www.mettle.co.uk/docs/mettle-natwest-app-terms-and-conditions/1.1.pdf',
    );
  });

  it('should open privacy link on press', () => {
    const {getByText} = render(
      <UserContextProvider>
        <UpgradeTermsScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    act(() => {
      fireEvent.press(getByText('Privacy Notice'));
    });
    expect(Linking.openURL).toHaveBeenCalledWith(
      'https://www.mettle.co.uk/docs/mettle-natwest-privacy-notice/1.1.pdf',
    );
  });

  it('should navigate to UpgradeConsents screen on Agree button press', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <UpgradeTermsScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );

    fireEvent.press(getByTestId('agreeButton'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('UpgradeConsents');
  });

  it('should display specific content for limited company', () => {
    const {findByText} = render(
      <UserContextProvider>
        <UpgradeTermsScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(
      findByText(
        'To switch from an e-money account to a Mettle bank account, you must be a director of Test Business',
      ),
    ).toBeTruthy();
  });
});
