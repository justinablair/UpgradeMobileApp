import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import UpgradeChangesWeDoScreen from './UpgradeChangesWeDo';
import UserContextProvider from '../../components/UserContext';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {AccessibilityInfo} from 'react-native';

describe('UpgradeChangesWeDoScreen', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'UpgradeChangesWeDo'
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
        <UpgradeChangesWeDoScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(getByText('What we’ll do during the switch')).toBeTruthy();
  });

  it('navigates to "UpgradeChangesYouDo" screen on button press', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <UpgradeChangesWeDoScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    act(() => {
      fireEvent.press(getByTestId('nextButton'));
    });
    expect(mockNavigation.navigate).toHaveBeenCalledWith('UpgradeChangesYouDo');
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
        <UpgradeChangesWeDoScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );

    expect(mockAnnounceForAccessibility).toHaveBeenCalledWith(
      'What we’ll do during the switch',
    );
  });
});
