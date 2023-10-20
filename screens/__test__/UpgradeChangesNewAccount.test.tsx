import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import UpgradeChangesNewAccountScreen from '../UpgradeChangesNewAccount';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import UserContextProvider, {
  useUserContext,
} from '../../components/UserContext';
import {NavigationContainer} from '@react-navigation/native';

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

  it('calls handleSwitchExitJourneyPress on "Maybe later" button press', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <NavigationContainer>
          <UpgradeChangesNewAccountScreen navigation={mockNavigation} />
        </NavigationContainer>
      </UserContextProvider>,
    );
    const maybeLaterButton = getByTestId('maybeLaterButton');
    fireEvent.press(maybeLaterButton);
    // Add your expected behavior here
  });

  it('toggles the exit modal visibility', () => {
    const {getByTestId, queryByTestId, debug} = render(
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
