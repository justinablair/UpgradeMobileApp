import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import UpgradeIneligibleUSScreen from './UpgradeIneligibleUSScreen';
import UserContextProvider from '../components/UserContext';
import {AccessibilityInfo} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigationTypes';

describe('UpgradeIneligibleUSScreen', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'UpgradeIneligibleUS'
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
  it('renders the screen with the correct title', () => {
    const {getByText} = render(
      <UserContextProvider>
        <UpgradeIneligibleUSScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    const titleElement = getByText(
      'Sorry, we can’t open a bank account for you',
    );
    expect(titleElement).toBeTruthy();
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
        <NavigationContainer>
          <UpgradeIneligibleUSScreen navigation={mockNavigation} />
        </NavigationContainer>
      </UserContextProvider>,
    );

    expect(mockAnnounceForAccessibility).toHaveBeenCalledWith(
      'Sorry, we can’t open a bank account for you',
    );
  });

  it('navigates to the desired screen', () => {
    const {getByText} = render(
      <UserContextProvider>
        <UpgradeIneligibleUSScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    const buttonElement = getByText('Cancel switch');
    expect(buttonElement).toBeTruthy();
    act(() => {
      fireEvent.press(buttonElement);
    });
    expect(mockNavigation.navigate).toHaveBeenCalledWith('UpgradeIntro');
  });

  it('calls the handleSwitchExitJourneyPress function on button press', () => {
    const {getByText} = render(
      <UserContextProvider>
        <UpgradeIneligibleUSScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    const buttonElement = getByText('Cancel switch');
    act(() => {
      fireEvent.press(buttonElement);
    });
    expect(mockNavigation.navigate).toHaveBeenCalledWith('UpgradeIntro');
  });
});
