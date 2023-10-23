import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import UpgradeChangesYouDoScreen from './UpgradeChangesYouDo';
import UserContextProvider from '../../components/UserContext';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {AccessibilityInfo} from 'react-native';

// Test the component
describe('UpgradeChangesYouDoScreen', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'UpgradeChangesYouDo'
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
    const {getByText, getByLabelText} = render(
      <UserContextProvider>
        <UpgradeChangesYouDoScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );

    // Check if the component renders the title correctly
    expect(getByText('What you’ll need to do after the switch')).toBeTruthy();

    // Check if the button renders correctly
    expect(getByText('Next')).toBeTruthy();

    // Check if the accessibility label is set correctly
    expect(
      getByLabelText('What you’ll need to do after the switch.'),
    ).toBeTruthy();
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
        <UpgradeChangesYouDoScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(mockAnnounceForAccessibility).toHaveBeenCalledWith(
      'What you’ll need to do after the switch',
    );
  });

  it('navigates to "UpgradeChangesNewAccount" screen on button press', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <UpgradeChangesYouDoScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    act(() => {
      fireEvent.press(getByTestId('nextButton'));
    });
    expect(mockNavigation.navigate).toHaveBeenCalledWith(
      'UpgradeChangesNewAccount',
    );
  });
});
