import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import UpgradeUSPersonScreen from './UpgradeUsPerson';
import {UserContextProvider} from '../../components/UserContext';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {AccessibilityInfo} from 'react-native';

describe('UpgradeUSPersonScreen', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'UpgradeUSPerson'
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
    const {getByText} = render(
      <UserContextProvider>
        <UpgradeUSPersonScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(getByText('What is a US person?')).toBeTruthy();
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
          <UpgradeUSPersonScreen navigation={mockNavigation} />
        </NavigationContainer>
      </UserContextProvider>,
    );
    expect(mockAnnounceForAccessibility).toHaveBeenCalledWith(
      'Are you a United States (US) person?',
    );
  });

  it('handles button presses correctly', () => {
    const {getByText, getByTestId} = render(
      <UserContextProvider>
        <UpgradeUSPersonScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    act(() => {
      fireEvent.press(getByText('What is a US person?'));
    });
    expect(getByTestId('USPersonModal')).toBeTruthy();

    act(() => {
      fireEvent.press(getByText('Yes'));
    });
    expect(mockNavigation.navigate).toHaveBeenCalledWith('UpgradeIneligibleUS');

    act(() => {
      fireEvent.press(getByText('No'));
    });
    expect(mockNavigation.navigate).toHaveBeenCalledWith('StepperScreen4');
  });
});
