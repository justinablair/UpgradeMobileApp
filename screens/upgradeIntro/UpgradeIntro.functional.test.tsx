import React from 'react';
import {act, fireEvent, render} from '@testing-library/react-native';
import UpgradeIntroScreen from './UpgradeIntro';
import UserContextProvider from '../../components/UserContext';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {AccessibilityInfo} from 'react-native';

(global as any).setImmediate = (callback: any, ...args: any[]) => {
  return setTimeout(callback, 0, ...args);
};

(global as any).clearImmediate = (timeoutId: NodeJS.Timeout) => {
  return clearTimeout(timeoutId);
};

describe('UpgradeIntroScreen', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'UpgradeIntro'
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
        <UpgradeIntroScreen navigation={mockNavigation} />
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
        <UpgradeIntroScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(mockAnnounceForAccessibility).toHaveBeenCalledWith(
      'Introducing the Mettle bank account',
    );
  });

  it('displays the title correctly', () => {
    const {getByText} = render(
      <UserContextProvider>
        <UpgradeIntroScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(getByText('Introducing the Mettle bank account')).toBeTruthy();
  });

  it('calls the handleSwitchButtonPress function on button press', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <UpgradeIntroScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    act(() => {
      const button = getByTestId('getStartedButton');
      fireEvent.press(button);
    });
    expect(mockNavigation.navigate).toHaveBeenCalledWith('StepperScreen1');
  });

  it('opens the e-money info modal on press', () => {
    const {getByLabelText, getByText} = render(
      <UserContextProvider>
        <UpgradeIntroScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    act(() => {
      const emoneyPressable = getByLabelText('E-money Pressable');
      fireEvent.press(emoneyPressable);
    });
    expect(getByText('Your e-money account')).toBeTruthy();
  });
});
