import 'react-native';
import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {Linking} from 'react-native';
import UpgradeConsentsScreen from './UpgradeConsents';
import UserContextProvider from '../../components/UserContext';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {AccessibilityInfo} from 'react-native';
import {act} from 'react-test-renderer';

(global as any).setImmediate = (callback: any, ...args: any[]) => {
  return setTimeout(callback, 0, ...args);
};

describe('UpgradeConsentsScreen', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'UpgradeConsents'
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
    render(
      <UserContextProvider>
        <UpgradeConsentsScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
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
        <UpgradeConsentsScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(mockAnnounceForAccessibility).toHaveBeenCalledWith(
      'Your consents to switch',
    );
  });

  it('disables the button when no checkboxes are checked', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <UpgradeConsentsScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    const button = getByTestId('nextButton');
    expect(button.props.accessibilityState.disabled).toBe(true);
  });

  it('toggles checkboxes correctly', () => {
    const {getByRole} = render(
      <UserContextProvider>
        <UpgradeConsentsScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );

    const checkbox = getByRole('checkbox', {name: 'Opening your new account'});
    act(() => {
      fireEvent.press(checkbox);
    });
    expect(checkbox.props.accessibilityState.checked).toEqual(true);
  });

  it('updates checkbox state when the checkbox is toggled', () => {
    const {getByRole} = render(
      <UserContextProvider>
        <UpgradeConsentsScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    const checkbox = getByRole('checkbox', {name: 'Opening your new account'});
    act(() => {
      fireEvent.press(checkbox);
    });
    expect(checkbox.props.accessibilityState.checked).toEqual(true);
  });

  it('enables the button when all checkboxes are checked and navigates on button press', async () => {
    const {getAllByRole, getByTestId} = render(
      <UserContextProvider>
        <UpgradeConsentsScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    const checkboxes = getAllByRole('checkbox');
    const button = getByTestId('nextButton');

    // Simulate checking all checkboxes
    checkboxes.forEach(checkbox => {
      fireEvent.press(checkbox);
    });

    // Wait for the component to update after checkbox clicks
    await waitFor(() => {
      expect(button.props.accessibilityState.disabled).toBe(false);
    });

    act(() => {
      fireEvent.press(button);
    });

    // Add a conditional assertion based on the enabled state
    if (!button.props.accessibilityState.disabled) {
      expect(mockNavigation.navigate).toHaveBeenCalledWith('UpgradeMarketing');
    }
  });

  it('opens the link on press', () => {
    const {getByRole} = render(
      <UserContextProvider>
        <UpgradeConsentsScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    const openUrlSpy = jest.spyOn(Linking, 'openURL');
    const link = getByRole('link', {
      name: 'Read more about how we’ll use your data',
    });
    act(() => {
      fireEvent.press(link);
    });

    expect(openUrlSpy).toHaveBeenCalledWith(
      'https://www.mettle.co.uk/upgrade-data-use.pdf',
    );
    openUrlSpy.mockRestore();
  });
});
