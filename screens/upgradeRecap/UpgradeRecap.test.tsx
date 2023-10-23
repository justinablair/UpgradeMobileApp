import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import UpgradeRecapScreen from './UpgradeRecap';
import UserContextProvider from '../../components/UserContext';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {AccessibilityInfo} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

describe('UpgradeRecapScreen', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'UpgradeRecap'
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
    const {getByLabelText} = render(
      <UserContextProvider>
        <NavigationContainer>
          <UpgradeRecapScreen navigation={mockNavigation} />
        </NavigationContainer>
      </UserContextProvider>,
    );
    expect(getByLabelText('Upgrade Recap Screen Summary')).toBeTruthy();
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
          <UpgradeRecapScreen navigation={mockNavigation} />
        </NavigationContainer>
      </UserContextProvider>,
    );
    expect(mockAnnounceForAccessibility).toHaveBeenCalledWith(
      'What we’ll do during the switch',
    );
  });

  it('toggles Changes We Do section', () => {
    const {getByLabelText, getByText, queryByText} = render(
      <UserContextProvider>
        <NavigationContainer>
          <UpgradeRecapScreen navigation={mockNavigation} />
        </NavigationContainer>
      </UserContextProvider>,
    );
    const toggleButton = getByLabelText('Toggle Changes We Do Section');
    fireEvent.press(toggleButton);
    expect(getByText('What we’ll do during the switch')).toBeTruthy();
    expect(queryByText('Recap of changes')).toBeTruthy();
  });

  it('toggles Changes You Do section', () => {
    const {getByLabelText, getByText, queryByText} = render(
      <UserContextProvider>
        <NavigationContainer>
          <UpgradeRecapScreen navigation={mockNavigation} />
        </NavigationContainer>
      </UserContextProvider>,
    );
    const toggleButton = getByLabelText('Toggle Changes You Do Section');
    fireEvent.press(toggleButton);
    expect(getByText('What you’ll need to do after the switch')).toBeTruthy();
    expect(queryByText('What we’ll do during the switch')).toBeTruthy();
  });

  it('toggles New Account section', () => {
    const {getByLabelText, getByText, queryByText} = render(
      <UserContextProvider>
        <NavigationContainer>
          <UpgradeRecapScreen navigation={mockNavigation} />
        </NavigationContainer>
      </UserContextProvider>,
    );
    const toggleButton = getByLabelText('Toggle New Account Section');
    fireEvent.press(toggleButton);
    expect(getByText('How your new account will work')).toBeTruthy();
    expect(queryByText('What you’ll need to do after the switch')).toBeTruthy();
  });

  it('triggers AuthModal when "Switch now" button is pressed', () => {
    const {getByText, getByTestId} = render(
      <UserContextProvider>
        <NavigationContainer>
          <UpgradeRecapScreen navigation={mockNavigation} />
        </NavigationContainer>
      </UserContextProvider>,
    );
    const button = getByTestId('switchNow');
    fireEvent.press(button);
    expect(getByText('Authorise')).toBeTruthy();
  });

  it('triggers ExitModal when "I\'m not sure" button is pressed', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <NavigationContainer>
          <UpgradeRecapScreen navigation={mockNavigation} />
        </NavigationContainer>
      </UserContextProvider>,
    );
    const button = getByTestId('notSureButton');
    fireEvent.press(button);
    expect(getByTestId('exitModal')).toBeTruthy();
  });
});
