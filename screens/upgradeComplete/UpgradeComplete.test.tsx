import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import UserContextProvider from '../../components/UserContext';
import UpgradeCompleteScreen from './UpgradeComplete';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigationTypes';
import {AccessibilityInfo} from 'react-native';

describe('UpgradeCompleteScreen', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'UpgradeComplete'
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
    const {getByText, getByLabelText} = render(
      <UserContextProvider>
        <UpgradeCompleteScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(getByText('Congratulations! Your switch is complete!')).toBeTruthy();
    expect(
      getByText(
        'You can now log in to your new account, where you’ll find your account number and sort code. To help you get started, we’ll send you a couple of emails soon. Look out for your new account details and your old scheduled payments and Direct Debits.',
      ),
    ).toBeTruthy();
    const image = getByLabelText('rocketTakingOffImage');
    expect(image).toBeTruthy();
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
        <UpgradeCompleteScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );

    expect(mockAnnounceForAccessibility).toHaveBeenCalledWith(
      'Congratulations! Your switch is complete!',
    );
  });

  it('navigates to "UpgradedWelcome" screen on button press', () => {
    const {getByTestId, getByText} = render(
      <UserContextProvider>
        <UpgradeCompleteScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    fireEvent.press(getByTestId('loginButton'));
    expect(getByText('Authorise')).toBeTruthy();
  });
});
