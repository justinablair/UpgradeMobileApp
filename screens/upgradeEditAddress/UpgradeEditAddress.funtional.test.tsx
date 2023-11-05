import React from 'react';
import {render, fireEvent, act, waitFor} from '@testing-library/react-native';
import UpgradeEditAddressScreen from './UpgradeEditAddress';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigationTypes';
import UserContextProvider from '../../components/UserContext';
import {AccessibilityInfo} from 'react-native';

(global as any).setImmediate = (callback: any, ...args: any[]) => {
  return setTimeout(callback, 0, ...args);
};

describe('UpgradeEditAddressScreen', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'UpgradeEditAddress'
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
        <UpgradeEditAddressScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
  });

  it('displays the correct placeholder for the input fields', () => {
    const {getByPlaceholderText} = render(
      <UserContextProvider>
        <UpgradeEditAddressScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(getByPlaceholderText('Enter address')).toBeTruthy();
    expect(getByPlaceholderText('Enter town')).toBeTruthy();
    expect(getByPlaceholderText('Enter postcode')).toBeTruthy();
  });

  it('displays form validation messages', async () => {
    const {getByTestId, getByText, getByPlaceholderText} = render(
      <UserContextProvider>
        <UpgradeEditAddressScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );

    const addressLine1Input = getByPlaceholderText('Enter address');
    fireEvent.changeText(addressLine1Input, '123 New Street');

    const editButton = getByTestId('saveEditButton');
    expect(editButton.props.accessibilityState.disabled).toBe(false);

    act(() => {
      fireEvent.press(editButton);
    });

    await waitFor(() => {
      expect(getByText('Please complete all required fields.')).toBeTruthy();
    });
  });

  it('displays the success message after editing the address', async () => {
    const {getByTestId, getByText, getByPlaceholderText} = render(
      <UserContextProvider>
        <UpgradeEditAddressScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );

    const addressLine1Input = getByPlaceholderText('Enter address');
    const townInput = getByPlaceholderText('Enter town');
    const postcodeInput = getByPlaceholderText('Enter postcode');

    fireEvent.changeText(addressLine1Input, '123 New Street');
    fireEvent.changeText(townInput, 'New Town');
    fireEvent.changeText(postcodeInput, 'sm46hu');

    const editButton = getByTestId('saveEditButton');
    expect(editButton.props.accessibilityState.disabled).toBe(false);

    act(() => {
      fireEvent.press(editButton);
    });

    await waitFor(() => {
      expect(getByText('Address updated successfully!')).toBeTruthy();
    });

    // Check if the updated values are displayed correctly
    expect(addressLine1Input.props.value).toBe('123 New Street');
    expect(townInput.props.value).toBe('New Town');
    expect(postcodeInput.props.value).toBe('sm46hu');
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
        <UpgradeEditAddressScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );

    expect(mockAnnounceForAccessibility).toHaveBeenCalledWith('Home address');
  });
});
