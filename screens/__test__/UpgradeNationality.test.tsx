import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import UpgradeNationalityScreen from '../UpgradeNationality';
import UserContextProvider from '../../components/UserContext';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {AccessibilityInfo} from 'react-native';

describe('UpgradeNationalityScreen', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'UpgradeNationality'
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
        <UpgradeNationalityScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(
      getByText('Do you have tax residency outside of the United Kingdom?'),
    ).toBeDefined();
  });

  test('handles press event for Yes button', () => {
    const {getByText} = render(
      <UserContextProvider>
        <UpgradeNationalityScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    fireEvent.press(getByText('Yes'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith(
      'UpgradeIneligibleResident',
    );
  });

  test('handles press event for No button', () => {
    const {getByText} = render(
      <UserContextProvider>
        <UpgradeNationalityScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    fireEvent.press(getByText('No'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('UpgradeUSPerson');
  });

  test('displays "What is tax residency?" text', () => {
    const {getByText} = render(
      <UserContextProvider>
        <UpgradeNationalityScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(getByText('What is tax residency?')).toBeDefined();
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
        <UpgradeNationalityScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
  });
});