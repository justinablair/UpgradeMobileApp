import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import UserSelectionScreen from './UserSelection';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigationTypes';
import UserContextProvider from '../../components/UserContext';

describe('UserSelectionScreen', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'UserSelection'
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
    const {getByText, getByTestId} = render(
      <UserContextProvider>
        <UserSelectionScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );
    expect(getByText('What type of business are you?')).toBeTruthy();

    fireEvent.press(getByText('Sole trader or side business'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Address');

    fireEvent.press(getByText('Private Limited Company'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('CompanyDetails');
  });
});
