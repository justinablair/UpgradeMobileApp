// Functional test for ConfirmAddress.tsx

import React from 'react';
import {render, fireEvent, act, waitFor} from '@testing-library/react-native';
import ConfirmAddressScreen from './ConfirmAddress';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigationTypes';
import UserContextProvider from '../../components/UserContext';

describe('<ConfirmAddressScreen />', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'ConfirmAddress'
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
        <ConfirmAddressScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(getByText('Confirm your address')).toBeTruthy();
  });

  it('displays the user address', () => {
    const {findByText} = render(
      <UserContextProvider>
        <ConfirmAddressScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(findByText('31 city street road')).toBeTruthy();
    expect(findByText('London')).toBeTruthy();
    expect(findByText('sm46hu')).toBeTruthy();
  });

  it('opens update address modal and navigates to the correct screen', async () => {
    const {getByText, getByTestId} = render(
      <UserContextProvider>
        <ConfirmAddressScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    act(() => {
      fireEvent.press(getByText('Update address'));
    });

    await waitFor(() => {
      expect(
        getByText(/Updating your address will also change the address/),
      ).toBeTruthy();
    });

    act(() => {
      fireEvent.press(getByTestId('interactivePinkButton'));
    });

    expect(mockNavigation.navigate).toBeCalledWith('UpgradeEditAddress');
  });

  it('opens the new card info modal on press of new card text', async () => {
    const {getByTestId, getByText} = render(
      <UserContextProvider>
        <ConfirmAddressScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    act(() => {
      fireEvent.press(getByTestId('newCardPressable'));
    });

    await waitFor(() => {
      expect(
        getByText(
          /Because we’re closing your e-money account, your current card will no longer work./,
        ),
      ).toBeTruthy();
    });
  });

  it('should navigate to the desired screen', () => {
    const {getByText} = render(
      <UserContextProvider>
        <ConfirmAddressScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    act(() => {
      fireEvent.press(getByText('Confirm address'));
    });
    expect(mockNavigation.navigate).toBeCalledWith('StepperComplete');
  });
});
