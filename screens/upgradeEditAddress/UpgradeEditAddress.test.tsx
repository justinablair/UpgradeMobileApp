import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import UpgradeEditAddressScreen from './UpgradeEditAddress';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigationTypes';
import UserContextProvider from '../../components/UserContext';
import {AccessibilityInfo} from 'react-native';

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

  it('allows the user to edit the address details and updates the address', () => {
    const {getByTestId, getByText, getByPlaceholderText} = render(
      <UserContextProvider>
        <UpgradeEditAddressScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );

    // Test editing functionality
    const editButton = getByTestId('saveEditButton');
    act(() => {
      fireEvent.press(editButton);
    });
    const buttonText = getByText('Save');
    expect(buttonText).toBeTruthy();

    // Change the address details
    const addressLine1Input = getByPlaceholderText('Enter address');
    fireEvent.changeText(addressLine1Input, '123 New Street');

    const townInput = getByPlaceholderText('Enter town');
    fireEvent.changeText(townInput, 'New Town');

    const postcodeInput = getByPlaceholderText('Enter postcode');
    fireEvent.changeText(postcodeInput, '12345');

    // Save the updated address details
    const saveButton = getByTestId('saveEditButton');
    act(() => {
      fireEvent.press(saveButton);
    });
    // Check if the updated address details are displayed correctly
    expect(addressLine1Input.props.value).toBe('123 New Street');
    expect(townInput.props.value).toBe('New Town');
    expect(postcodeInput.props.value).toBe('12345');

    // Check if the success message is displayed
    const successMessage = getByText('Address updated successfully!');
    expect(successMessage).toBeTruthy();
  });

  it('displays the success message after updating the address', () => {
    const {getByTestId, getByText} = render(
      <UserContextProvider>
        <UpgradeEditAddressScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    const editButton = getByTestId('saveEditButton');
    act(() => {
      fireEvent.press(editButton);
    });
    const saveButton = getByTestId('saveEditButton');
    act(() => {
      fireEvent.press(saveButton);
    });
    expect(getByText('Address updated successfully!')).toBeTruthy();
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
