import React from 'react';
import {act, fireEvent, render} from '@testing-library/react-native';
import UpgradeMarketingScreen from './UpgradeMarketing';
import UserContextProvider from '../../components/UserContext';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {AccessibilityInfo} from 'react-native';

describe('Upgrade Marketing Screen', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'UpgradeMarketing'
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
        <UpgradeMarketingScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(getByText('Marketing preferences')).not.toBeNull();
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
        <UpgradeMarketingScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );

    expect(mockAnnounceForAccessibility).toHaveBeenCalledWith(
      'Marketing preferences',
    );
  });

  it('toggles email subscription correctly', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <UpgradeMarketingScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );

    const emailToggle = getByTestId('EmailToggle');
    act(() => {
      fireEvent(emailToggle, 'onValueChange');
    });
    const updatedEmailToggle = getByTestId('EmailToggle');
    const isToggled = updatedEmailToggle.props.value;
    expect(isToggled).toBe(true);
  });

  it('toggles push notifications correctly', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <UpgradeMarketingScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    const pushNotificationsToggle = getByTestId('PushNotificationsToggle');
    act(() => {
      fireEvent(pushNotificationsToggle, 'onValueChange');
    });
    const updatedPushToggle = getByTestId('PushNotificationsToggle');
    const isToggled = updatedPushToggle.props.value;
    expect(isToggled).toBe(true);
  });

  it('toggles text messages correctly', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <UpgradeMarketingScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    const textMessagesToggle = getByTestId('TextMessagesToggle');
    act(() => {
      fireEvent(textMessagesToggle, 'onValueChange');
    });
    const updatedTexMessagesToggle = getByTestId('TextMessagesToggle');
    const isToggled = updatedTexMessagesToggle.props.value;
    console.log('Toggle value:', isToggled);
    expect(isToggled).toBe(true);
  });

  it('toggles online advertising correctly', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <UpgradeMarketingScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    const onlineAdvertisingToggle = getByTestId('OnlineAdvertisingToggle');
    act(() => {
      fireEvent(onlineAdvertisingToggle, 'onValueChange');
    });
    const updatedOnlineAdvertisingToggle = getByTestId(
      'OnlineAdvertisingToggle',
    );
    const isToggled = updatedOnlineAdvertisingToggle.props.value;
    expect(isToggled).toBe(true);
  });

  it('handles "No thanks" button click', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <UpgradeMarketingScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    act(() => {
      const button = getByTestId('NoThanksButton');
      fireEvent.press(button);
    });
    expect(mockNavigation.navigate).toHaveBeenCalledWith('StepperScreen3');
  });

  it('handles "Yes to all" button click', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <UpgradeMarketingScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    act(() => {
      const button = getByTestId('YesToAllButton');
      fireEvent.press(button);
    });

    expect(mockNavigation.navigate).toHaveBeenCalledWith('StepperScreen3');
  });
});
