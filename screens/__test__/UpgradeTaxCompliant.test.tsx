import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import UpgradeTaxCompliantScreen from '../UpgradeTaxCompliant';
import UserContextProvider from '../../components/UserContext';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {AccessibilityInfo} from 'react-native';
import {getByTestId} from '@testing-library/react';

(global as any).setImmediate = (callback: any, ...args: any[]) => {
  return setTimeout(callback, 0, ...args);
};

describe('UpgradeTaxCompliantScreen', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'UpgradeTaxCompliant'
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
        <UpgradeTaxCompliantScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
  });

  it('should enable form submit when the checkbox is checked', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <UpgradeTaxCompliantScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    let nextButton = getByTestId('nextButton');
    const checkbox = getByTestId('checkboxToggle');
    expect(nextButton.props.accessibilityState.disabled).toBe(true);
    fireEvent.press(checkbox);
    nextButton = getByTestId('nextButton');
    expect(nextButton.props.accessibilityState.disabled).toBe(false);
    fireEvent.press(nextButton);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('UpgradeTaxReporting');
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
        <UpgradeTaxCompliantScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );

    expect(mockAnnounceForAccessibility).toHaveBeenCalledWith(
      'Are you tax compliant?',
    );
  });
});
