import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import EnterAddressScreen from '../Address';
import {UserContextProvider} from '../../components/UserContext';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {AccessibilityInfo} from 'react-native';

describe('EnterAddressScreen', () => {
  const mockNavigation: StackNavigationProp<RootStackParamList, 'Address'> = {
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
  test('Renders all input fields correctly', () => {
    const {getByPlaceholderText} = render(
      <UserContextProvider>
        <EnterAddressScreen navigation={mockNavigation} />
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
        <EnterAddressScreen navigation={mockNavigation} />
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

  it('calls AccessibilityInfo.announceForAccessibility with the correct message', () => {
    const mockAnnounceForAccessibility = jest.fn();
    jest.spyOn(React, 'useEffect').mockImplementation(f => f());
    jest.spyOn(React, 'useContext').mockReturnValue({isDarkMode: true});
    jest
      .spyOn(AccessibilityInfo, 'announceForAccessibility')
      .mockImplementation(mockAnnounceForAccessibility);

    render(
      <UserContextProvider>
        <EnterAddressScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );

    expect(mockAnnounceForAccessibility).toHaveBeenCalledWith(
      'What you’ll need to do after the switch',
    );
  });
});
