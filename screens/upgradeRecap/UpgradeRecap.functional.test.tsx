import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
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
    const {findByText} = render(
      <UserContextProvider>
        <NavigationContainer>
          <UpgradeRecapScreen navigation={mockNavigation} />
        </NavigationContainer>
      </UserContextProvider>,
    );
    expect(findByText('Recap of changes')).toBeTruthy();
    expect(findByText('What we’ll do during the switch')).toBeTruthy();
    expect(findByText('What you’ll need to do after the switch')).toBeTruthy();
    expect(findByText('How your new account will work')).toBeTruthy();
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

  it('collapses Changes We Do section', () => {
    const {getByTestId, getByText, queryByText} = render(
      <UserContextProvider>
        <NavigationContainer>
          <UpgradeRecapScreen navigation={mockNavigation} />
        </NavigationContainer>
      </UserContextProvider>,
    );
    expect(getByText('Give you a new account number and sort code'));
    act(() => {
      const toggleButton = getByTestId('changesWeDo');
      fireEvent.press(toggleButton);
    });
    expect(
      queryByText('Give you a new account number and sort code'),
    ).toBeFalsy();
  });

  it('collapses Changes You Do section', () => {
    const {getByTestId, getByText, queryByText} = render(
      <UserContextProvider>
        <NavigationContainer>
          <UpgradeRecapScreen navigation={mockNavigation} />
        </NavigationContainer>
      </UserContextProvider>,
    );
    expect(getByText('Give your clients your new bank details')).toBeTruthy();
    act(() => {
      const toggleButton = getByTestId('changesYouDo');
      fireEvent.press(toggleButton);
    });
    expect(queryByText('Give your clients your new bank details')).toBeFalsy();
  });

  it('collapses New Account section', () => {
    const {getByTestId, getByText, queryByText} = render(
      <UserContextProvider>
        <NavigationContainer>
          <UpgradeRecapScreen navigation={mockNavigation} />
        </NavigationContainer>
      </UserContextProvider>,
    );
    expect(
      getByText('Your app will be locked while we open your new account'),
    ).toBeTruthy();
    act(() => {
      const toggleButton = getByTestId('newAccount');
      fireEvent.press(toggleButton);
    });
    expect(
      queryByText('Your app will be locked while we open your new account'),
    ).toBeFalsy();
  });

  it('triggers AuthModal when "Switch now" button is pressed', () => {
    const {getByText, getByTestId} = render(
      <UserContextProvider>
        <NavigationContainer>
          <UpgradeRecapScreen navigation={mockNavigation} />
        </NavigationContainer>
      </UserContextProvider>,
    );
    act(() => {
      const button = getByTestId('switchNow');
      fireEvent.press(button);
    });
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
    act(() => {
      const button = getByTestId('notSureButton');
      fireEvent.press(button);
    });
    expect(getByTestId('exitModal')).toBeTruthy();
  });
});
