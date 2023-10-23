import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import UpgradedEmailScreen from './UpgradedEmail';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import UserContextProvider from '../../components/UserContext';
import {AccessibilityInfo} from 'react-native';

describe('UpgradedEmailScreen', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'UpgradedEmail'
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
        <UpgradedEmailScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
  });

  it('checks if the title is rendered', () => {
    const {getByText} = render(
      <UserContextProvider>
        <UpgradedEmailScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(getByText('Look out for an email from us')).toBeTruthy();
  });

  it('checks if the buttons are clickable', () => {
    const {getByText} = render(
      <UserContextProvider>
        <UpgradedEmailScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    const gotItButton = getByText('Got it');
    const openEmailButton = getByText('Open email app');

    fireEvent.press(gotItButton);
    fireEvent.press(openEmailButton);
  });

  it('checks if list items are rendered', () => {
    const {getByLabelText} = render(
      <UserContextProvider>
        <UpgradedEmailScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(getByLabelText('Scheduled payments')).toBeTruthy();
    expect(getByLabelText('Direct Debits')).toBeTruthy();
    expect(getByLabelText('Unpaid invoices')).toBeTruthy();
    expect(getByLabelText('Share bank details')).toBeTruthy();
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
        <UpgradedEmailScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
  });
});
