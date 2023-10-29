import React from 'react';
import {act, fireEvent, render} from '@testing-library/react-native';
import UpgradedWelcomeScreen from './UpgradedWelcome';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import UserContextProvider from '../../components/UserContext';
import {AccessibilityInfo} from 'react-native';

describe('UpgradedWelcomeScreen', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'UpgradedWelcome'
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

  it('Renders all elements correctly', () => {
    const {getByLabelText, getByRole, getAllByRole, getByTestId} = render(
      <UserContextProvider>
        <UpgradedWelcomeScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(getAllByRole('image')).toBeTruthy();
    expect(
      getByLabelText('Welcome to your new Mettle bank account'),
    ).toBeTruthy();
    expect(getByLabelText('Mettle logo with stars around it')).toBeTruthy();
    expect(getByRole('header')).toBeTruthy();
    expect(getByLabelText('FSCS logo')).toBeTruthy();
    expect(getByTestId('nextButton')).toBeTruthy();
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
        <UpgradedWelcomeScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(mockAnnounceForAccessibility).toHaveBeenCalledWith(
      'Welcome to your new Mettle bank account',
    );
  });

  it('navigates to "UpgradedEmail" screen on button press', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <UpgradedWelcomeScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    act(() => {
      fireEvent.press(getByTestId('nextButton'));
    });
    expect(mockNavigation.navigate).toHaveBeenCalledWith('UpgradedEmail');
  });
});
