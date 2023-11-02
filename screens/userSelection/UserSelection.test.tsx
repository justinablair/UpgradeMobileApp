import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import UserSelectionScreen from './UserSelection';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigationTypes';
import {AccessibilityInfo} from 'react-native';

// Mocking the useUserContext hook
jest.mock('../../components/UserContext', () => ({
  useUserContext: jest.fn().mockReturnValue({
    isDarkMode: false,
    setUserType: jest.fn(),
  }),
}));

describe('UserSelectionScreen', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'UserSelection'
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
    const {getByText, getByTestId} = render(
      <UserSelectionScreen navigation={mockNavigation} />,
    );
    expect(getByText('What type of business are you?')).toBeTruthy();

    // Checking if the sole trader option is rendered correctly
    fireEvent.press(getByText('Sole trader or side business'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Address');

    // Checking if the limited company option is rendered correctly
    fireEvent.press(getByText('Private Limited Company'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('CompanyDetails');
  });

  it('calls AccessibilityInfo.announceForAccessibility with the correct message', () => {
    const mockAnnounceForAccessibility = jest.fn();
    jest.spyOn(React, 'useEffect').mockImplementation(f => f());
    jest
      .spyOn(AccessibilityInfo, 'announceForAccessibility')
      .mockImplementation(mockAnnounceForAccessibility);

    render(<UserSelectionScreen navigation={mockNavigation} />);

    expect(mockAnnounceForAccessibility).toHaveBeenCalledWith(
      'What type of business are you?',
    );
  });
});
