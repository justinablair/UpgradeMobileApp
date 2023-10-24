import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import ThemeScreen from './ThemeScreen';
import {AccessibilityInfo} from 'react-native';
import {useUserContext} from '../../components/UserContext';

jest.mock('../../components/UserContext', () => {
  const toggleDarkMode = jest.fn();
  return {
    useUserContext: jest.fn(() => ({
      isDarkMode: false,
      toggleDarkMode,
    })),
    toggleDarkMode,
  };
});

describe('SettingsScreen', () => {
  const mockNavigation: StackNavigationProp<RootStackParamList, 'ThemeScreen'> =
    {
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
    const {getByTestId} = render(<ThemeScreen navigation={mockNavigation} />);
    const title = getByTestId('title');
    expect(title).toBeDefined();
  });

  it('handles switch button press correctly', () => {
    const {getByTestId} = render(<ThemeScreen navigation={mockNavigation} />);
    const confirmButton = getByTestId('confirmButton');
    act(() => {
      fireEvent.press(confirmButton);
    });
    expect(mockNavigation.navigate).toHaveBeenCalledWith('UserSelection');
  });

  it('toggles dark mode correctly', () => {
    const {getByTestId} = render(<ThemeScreen navigation={mockNavigation} />);
    const darkModeCheckbox = getByTestId('darkModeCheckbox');
    act(() => {
      fireEvent.press(darkModeCheckbox);
    });
    expect(useUserContext().toggleDarkMode).toHaveBeenCalled();
  });

  it('toggles light mode correctly', () => {
    const {getByTestId} = render(<ThemeScreen navigation={mockNavigation} />);
    const lightModeCheckbox = getByTestId('lightModeCheckbox');
    act(() => {
      fireEvent.press(lightModeCheckbox);
    });
    expect(useUserContext().toggleDarkMode).toHaveBeenCalled();
  });

  it('calls AccessibilityInfo.announceForAccessibility with the correct message', () => {
    const mockAnnounceForAccessibility = jest.fn();
    jest.spyOn(React, 'useEffect').mockImplementation(f => f());
    jest.spyOn(React, 'useContext').mockReturnValue({isDarkMode: true});
    jest
      .spyOn(AccessibilityInfo, 'announceForAccessibility')
      .mockImplementation(mockAnnounceForAccessibility);

    render(<ThemeScreen navigation={mockNavigation} />);

    expect(mockAnnounceForAccessibility).toHaveBeenCalledWith(
      'Select App Theme',
    );
  });
});
