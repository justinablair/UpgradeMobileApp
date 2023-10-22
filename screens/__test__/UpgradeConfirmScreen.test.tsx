import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import UpgradeConfirmScreen from '../UpgradeConfirm';
import UserContextProvider from '../../components/UserContext';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {AccessibilityInfo} from 'react-native';

const mockNavigation = {
  navigate: jest.fn(),
};

describe('UpgradeConfirmScreen', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'UpgradeConfirm'
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
        <UpgradeConfirmScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(getByText('Ready to switch?')).toBeTruthy();
    expect(getByLabelText('Switch arrows image')).toBeTruthy();
  });

  it('navigates to "UpgradeRecap" screen on button press', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <UpgradeConfirmScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    fireEvent.press(getByTestId('switchRecapButton'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('UpgradeRecap');
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
        <UpgradeConfirmScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );

    expect(mockAnnounceForAccessibility).toHaveBeenCalledWith(
      'Ready to switch?',
    );
  });
});
