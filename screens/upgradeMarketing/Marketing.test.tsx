import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import MarketingScreen from './Marketing';
import UserContextProvider from '../../components/UserContext';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {AccessibilityInfo} from 'react-native';

describe('Marketing Screen', () => {
  const mockNavigation: StackNavigationProp<RootStackParamList, 'Marketing'> = {
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
        <MarketingScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(getByText('Marketing preferences')).not.toBeNull();
  });

  it('toggles email subscription correctly', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <MarketingScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );

    const emailToggle = getByTestId('EmailToggle');
    fireEvent(emailToggle, 'onValueChange');

    const updatedEmailToggle = getByTestId('EmailToggle');
    const isToggled = updatedEmailToggle.props.value;
    console.log('Toggle value:', isToggled);
    expect(isToggled).toBe(true);
  });

  it('handles "No thanks" button click', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <MarketingScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    const button = getByTestId('NoThanksButton');
    fireEvent.press(button);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('StepperScreen3');
  });

  it('handles "Yes to all" button click', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <MarketingScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    const button = getByTestId('YesToAllButton');
    fireEvent.press(button);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('StepperScreen3');
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
        <MarketingScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );

    expect(mockAnnounceForAccessibility).toHaveBeenCalledWith(
      'Marketing preferences',
    );
  });
});
