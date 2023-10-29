import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import UserContextProvider from '../../components/UserContext';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {AccessibilityInfo} from 'react-native';
import UpgradeCompleteScreen from './UpgradeComplete';

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
    const {getByLabelText, getByText} = render(
      <UserContextProvider>
        <UpgradeCompleteScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );

    expect(getByText('Congratulations! Your switch is complete!')).toBeTruthy();
    expect(getByLabelText('largeTick')).toBeTruthy();
    expect(getByLabelText('upgradeCompleteDescription')).toBeTruthy();

    expect(getByText('Log in')).toBeTruthy();
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

  it('navigates to the "upgradeLogin" screen on button press', () => {
    const {getByTestId, getByText} = render(
      <UserContextProvider>
        <UpgradeCompleteScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    act(() => {
      fireEvent.press(getByTestId('loginButton'));
    });
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Login');
  });
});
