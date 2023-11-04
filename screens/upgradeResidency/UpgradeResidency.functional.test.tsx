import React from 'react';
import {act, fireEvent, render} from '@testing-library/react-native';
import UpgradeResidencyScreen from './UpgradeResidency';
import UserContextProvider from '../../components/UserContext';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {AccessibilityInfo} from 'react-native';

describe('UpgradeNationalityScreen', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'UpgradeResidency'
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

  test('renders title based on userType', () => {
    const {getByText} = render(
      <UserContextProvider>
        <UpgradeResidencyScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(
      getByText('Do you have tax residency outside of the United Kingdom?'),
    ).toBeDefined();
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
        <UpgradeResidencyScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(mockAnnounceForAccessibility).toHaveBeenCalledWith(
      'Do you have tax residency outside of the United Kingdom?',
    );
  });

  it('handles press event for Yes button', () => {
    const {getByText} = render(
      <UserContextProvider>
        <UpgradeResidencyScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    act(() => {
      fireEvent.press(getByText('Yes'));
    });
    expect(mockNavigation.navigate).toHaveBeenCalledWith(
      'UpgradeIneligibleResident',
    );
  });

  test('handles press event for No button', () => {
    const {getByText} = render(
      <UserContextProvider>
        <UpgradeResidencyScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    act(() => {
      fireEvent.press(getByText('No'));
    });
    expect(mockNavigation.navigate).toHaveBeenCalledWith('UpgradeUSPerson');
  });

  it('displays "What is tax residency?" info modal', () => {
    const {getByLabelText, getByTestId} = render(
      <UserContextProvider>
        <UpgradeResidencyScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    const taxAvoidancePressable = getByLabelText('What Is Tax Residency');
    act(() => {
      fireEvent.press(taxAvoidancePressable);
    });
    expect(getByTestId('taxResidentInfoModal')).toBeTruthy();
  });
});
