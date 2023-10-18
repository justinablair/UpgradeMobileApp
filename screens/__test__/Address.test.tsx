import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import EnterAddressScreen from '../Address';
import {UserContextProvider} from '../../components/UserContext';
import {StackNavigationProp, RootStackParamList} from '../../navigationTypes'; // Import necessary types

describe('EnterAddressScreen', () => {
  const mockNavigation: StackNavigationProp<RootStackParamList, 'Address'> = {
    navigate: jest.fn(),
    // add other required methods if needed
  };

  test('Renders all input fields correctly', () => {
    const {getByPlaceholderText} = render(
      <UserContextProvider>
        <EnterAddressScreen navigation={mockNavigation} />{' '}
        {/* Pass navigation prop */}
      </UserContextProvider>,
    );
    expect(getByPlaceholderText('Enter first line of address')).toBeTruthy();
    expect(getByPlaceholderText('Enter town')).toBeTruthy();
    expect(getByPlaceholderText('Enter postcode')).toBeTruthy();
  });

  test('Validates form error for empty fields', () => {
    const {getByText} = render(
      <UserContextProvider>
        <EnterAddressScreen navigation={mockNavigation} />{' '}
        {/* Pass navigation prop */}
      </UserContextProvider>,
    );
    const confirmButton = getByText('Confirm');
    fireEvent.press(confirmButton);
    expect(getByText('Please complete all required fields.')).toBeTruthy();
  });

  test('Validates form error for invalid UK postcode', () => {
    const {getByPlaceholderText, getByText} = render(
      <UserContextProvider>
        <EnterAddressScreen navigation={mockNavigation} />{' '}
        {/* Pass navigation prop */}
      </UserContextProvider>,
    );
    const addressInput = getByPlaceholderText('Enter first line of address');
    const townInput = getByPlaceholderText('Enter town');
    const postcodeInput = getByPlaceholderText('Enter postcode');
    const confirmButton = getByText('Confirm');

    fireEvent.changeText(addressInput, '123 Sample Address');
    fireEvent.changeText(townInput, 'Sample Town');
    fireEvent.changeText(postcodeInput, 'Invalid Postcode');
    fireEvent.press(confirmButton);

    expect(getByText('Please provide a valid UK postcode.')).toBeTruthy();
  });

  test('Form submits successfully with valid input', () => {
    const {getByPlaceholderText, getByText} = render(
      <UserContextProvider>
        <EnterAddressScreen navigation={mockNavigation} />{' '}
        {/* Pass navigation prop */}
      </UserContextProvider>,
    );
    const addressInput = getByPlaceholderText('Enter first line of address');
    const townInput = getByPlaceholderText('Enter town');
    const postcodeInput = getByPlaceholderText('Enter postcode');
    const confirmButton = getByText('Confirm');

    fireEvent.changeText(addressInput, '123 Sample Address');
    fireEvent.changeText(townInput, 'Sample Town');
    fireEvent.changeText(postcodeInput, 'AB12 3CD');
    fireEvent.press(confirmButton);

    expect(mockNavigation.navigate).toHaveBeenCalledWith('UpgradeIntro');
  });
});
