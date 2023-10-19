import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  UserContextProvider,
  useUserContext,
} from '../../components/UserContext';
import ThemeScreen from '../ThemeScreen';

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
    fireEvent.press(confirmButton);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('UserSelection');
  });

  it('toggles dark mode correctly', () => {
    const {getByTestId} = render(<ThemeScreen navigation={mockNavigation} />);
    const darkModeCheckbox = getByTestId('darkModeCheckbox');
    fireEvent.press(darkModeCheckbox);
    expect(useUserContext().toggleDarkMode).toHaveBeenCalled();
  });

  it('toggles light mode correctly', () => {
    const {getByTestId} = render(<ThemeScreen navigation={mockNavigation} />);
    const lightModeCheckbox = getByTestId('lightModeCheckbox');
    fireEvent.press(lightModeCheckbox);
    expect(useUserContext().toggleDarkMode).toHaveBeenCalled();
  });
});
