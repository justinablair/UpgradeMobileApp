import React from 'react';
import {act, fireEvent, render} from '@testing-library/react-native';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import UserContextProvider from '../../components/UserContext';
import StepperScreen4 from './Stepper4';

describe('StepperScreen4', () => {
  jest.mock('../../components/StepsData', () => [
    {
      number: '1',
      title: 'How your new account will work',
      description: 'Description for step 1',
      active: true,
    },
    {
      number: '2',
      title: 'Confirm your details',
      description: 'Description for step 2',
      active: false,
    },
  ]);
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'StepperScreen4'
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

  it('should display titles and three completed', () => {
    const {getByText, getAllByText} = render(
      <UserContextProvider>
        <StepperScreen4 navigation={mockNavigation} />
      </UserContextProvider>,
    );

    // Check if the step titles are rendered
    const step1Title = getByText('How your new account will work');
    const step2Title = getByText('Confirm your details');
    expect(step1Title).toBeTruthy();
    expect(step2Title).toBeTruthy();
    const completedElements = getAllByText('Completed');
    expect(completedElements.length).toEqual(3);
    // Check if the button is rendered
    const buttonElement = getByText('Confirm details');
    expect(buttonElement).toBeTruthy();
  });

  it('handles "Confirm details" button click', () => {
    const {getByText} = render(
      <UserContextProvider>
        <StepperScreen4 navigation={mockNavigation} />
      </UserContextProvider>,
    );
    const buttonElement = getByText('Confirm details');
    act(() => {
      fireEvent.press(buttonElement);
    });
    expect(mockNavigation.navigate).toHaveBeenCalledWith('ConfirmAddress');
  });
});
