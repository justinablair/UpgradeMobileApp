import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import UpgradeChangesNewAccountScreen from './UpgradeChangesNewAccount';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import UserContextProvider, {
  useUserContext,
} from '../../components/UserContext';
import {NavigationContainer} from '@react-navigation/native';
import {AccessibilityInfo} from 'react-native';
// import * as UserContext from '../../components/UserContext';

describe('UpgradeChangesNewAccountScreen', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'UpgradeChangesNewAccount'
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

  it('renders without crashing', () => {
    render(
      <UserContextProvider>
        <NavigationContainer>
          <UpgradeChangesNewAccountScreen navigation={mockNavigation} />
        </NavigationContainer>
      </UserContextProvider>,
    );
  });

  it('calls handleSwitchButtonPress on "Get started" button press', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <NavigationContainer>
          <UpgradeChangesNewAccountScreen navigation={mockNavigation} />
        </NavigationContainer>
      </UserContextProvider>,
    );
    const getStartedButton = getByTestId('getStartedButton');
    fireEvent.press(getStartedButton);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('StepperScreen2');
  });

  it('opens the exit modal on "Maybe later" button press', () => {
    const {getByTestId, queryByTestId} = render(
      <UserContextProvider>
        <NavigationContainer>
          <UpgradeChangesNewAccountScreen navigation={mockNavigation} />
        </NavigationContainer>
      </UserContextProvider>,
    );

    const maybeLaterButton = getByTestId('maybeLaterButton');
    fireEvent.press(maybeLaterButton);

    const exitModal = queryByTestId('exitModal');

    expect(exitModal).toBeTruthy();
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
          <UpgradeChangesNewAccountScreen navigation={mockNavigation} />
        </NavigationContainer>
      </UserContextProvider>,
    );

    expect(mockAnnounceForAccessibility).toHaveBeenCalledWith(
      'How your new account will work',
    );
  });

  it('toggles the exit modal visibility', () => {
    const {getByTestId, queryByTestId} = render(
      <UserContextProvider>
        <NavigationContainer>
          <UpgradeChangesNewAccountScreen navigation={mockNavigation} />
        </NavigationContainer>
      </UserContextProvider>,
    );

    const maybeLaterButton = getByTestId('maybeLaterButton');
    fireEvent.press(maybeLaterButton);

    const exitModal = queryByTestId('exitModal');

    expect(exitModal).toBeTruthy();
  });
});
