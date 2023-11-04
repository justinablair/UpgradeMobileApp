import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CompanyDetailsScreen from './CompanyDetails';
import {UserContextProvider} from '../../components/UserContext';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigationTypes';

(global as any).setImmediate = (callback: any, ...args: any[]) => {
  return setTimeout(callback, 0, ...args);
};

describe('Functional Test: CompanyDetailsScreen', () => {
  it('should navigate to the next screen upon successful input and checkbox confirmation', () => {
    const mockNavigation: StackNavigationProp<
      RootStackParamList,
      'CompanyDetails'
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

    const {getByPlaceholderText, getByTestId} = render(
      <UserContextProvider>
        <CompanyDetailsScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );

    // Simulate entering text into the company name input
    const companyNameInput = getByPlaceholderText('Enter your company name');
    fireEvent.changeText(companyNameInput, 'Test Company');

    // Simulate clicking the checkbox toggle
    const checkbox = getByTestId('checkboxToggle');
    fireEvent.press(checkbox);

    // Simulate clicking the 'Next' button
    const nextButton = getByTestId('nextButton');
    fireEvent.press(nextButton);

    // Check if the navigation function was called with the expected argument
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Address');
  });
});
