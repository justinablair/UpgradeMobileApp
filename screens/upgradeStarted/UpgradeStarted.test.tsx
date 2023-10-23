import React from 'react';
import {render, act, waitFor} from '@testing-library/react-native';
import UpgradeStartedScreen from './UpgradeStarted';
import UserContextProvider from '../../components/UserContext';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {AccessibilityInfo} from 'react-native';
import UpgradeRecapScreen from '../upgradeRecap/UpgradeRecap';

jest.useRealTimers();

describe('UpgradeStartedScreen', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'UpgradeStarted'
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
  it('navigates to the next screen after 10 seconds', async () => {
    render(
      <UserContextProvider>
        <UpgradeStartedScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    await new Promise(resolve => setTimeout(resolve, 10000));

    expect(mockNavigation.navigate).toHaveBeenCalledWith('UpgradeComplete');
  }, 30000);

  it('should render title correctly', () => {
    const {getByText} = render(
      <UserContextProvider>
        <UpgradeStartedScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(getByText('We’ve started your switch')).toBeDefined();
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
          <UpgradeStartedScreen navigation={mockNavigation} />
        </NavigationContainer>
      </UserContextProvider>,
    );
  });
});
