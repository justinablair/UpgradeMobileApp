import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import LoginScreen from './UpgradeLogin';
import UserContextProvider from '../../components/UserContext';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigationTypes';

describe('LoginScreen', () => {
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
    const {getByLabelText, getByRole, getByTestId} = render(
      <UserContextProvider>
        <LoginScreen />
      </UserContextProvider>,
    );
    const loginButton = getByRole('button');
    const selectedCountElement = getByTestId('selectedCount');
    expect(loginButton).toBeDefined();
    expect(selectedCountElement).toBeDefined();
  });

  it('handles digit press correctly', () => {
    const {getByLabelText, getByTestId} = render(
      <UserContextProvider>
        <LoginScreen />
      </UserContextProvider>,
    );
    const digitButton = getByLabelText('digit-1');
    fireEvent.press(digitButton);
    const selectedCountElement = getByTestId('dot-0');
    expect(selectedCountElement).toBeDefined();
  });

  it('handles backspace correctly', () => {
    const {getByLabelText, getByTestId} = render(
      <UserContextProvider>
        <LoginScreen />
      </UserContextProvider>,
    );
    const digitButton = getByLabelText('digit-1');
    fireEvent.press(digitButton);
    const backspaceButton = getByTestId('backspaceButton');
    fireEvent.press(backspaceButton);
    const selectedCountElement = getByTestId('dot-0');
    expect(selectedCountElement).toBeDefined();
  });

  it('navigates to UpgradedWelcome screen on entering 6 digits', () => {
    const {getByLabelText} = render(
      <UserContextProvider>
        <LoginScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    // Simulate entering 6 digits
    for (let i = 1; i <= 6; i++) {
      const digitButton = getByLabelText(`digit-${i}`);
      fireEvent.press(digitButton);
    }
    expect(mockNavigation.navigate).toHaveBeenCalledWith('UpgradedWelcome');
  });

  it('renders login button correctly', () => {
    const {getByTestId, getByText} = render(
      <UserContextProvider>
        <LoginScreen />
      </UserContextProvider>,
    );
    const loginButton = getByTestId('loginButton');
    expect(loginButton).toBeDefined();
    expect(getByText('Login')).toBeDefined();
  });
});
