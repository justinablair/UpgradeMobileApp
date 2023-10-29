import React from 'react';
import {act, fireEvent, render} from '@testing-library/react-native';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import UserContextProvider from '../../components/UserContext';
import StepperScreen3 from './Stepper3';

describe('StepperScreen3', () => {
  jest.mock('../../components/StepsData', () => [
    {
      number: '1',
      title: 'How your new account will work',
      description: 'Description for step 1',
      active: false,
    },
    {
      number: '2',
      title: 'Your consents to switch',
      description: 'Description for step 2',
      active: false,
    },
    {
      number: '3',
      title: 'Tax reporting',
      description: 'Description for step 2',
      active: true,
    },
  ]);
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'StepperScreen3'
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

  it('renders stepper screen with steps data', () => {
    const {getByText, getByTestId} = render(
      <UserContextProvider>
        <StepperScreen3 navigation={mockNavigation} />
      </UserContextProvider>,
    );

    // Check if the step titles are rendered
    const step1Title = getByText('How your new account will work');
    const step2Title = getByText('Your consents to switch');
    const step3Title = getByTestId('step-3');
    expect(step1Title).toBeTruthy();
    expect(step2Title).toBeTruthy();
    expect(step3Title).toBeTruthy();

    // Check if the button is rendered
    const buttonElement = getByTestId('taxReportingButton');
    expect(buttonElement).toBeTruthy();
  });

  it('handles "tax reporting" button click', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <StepperScreen3 navigation={mockNavigation} />
      </UserContextProvider>,
    );
    const buttonElement = getByTestId('taxReportingButton');
    act(() => {
      fireEvent.press(buttonElement);
    });
    expect(mockNavigation.navigate).toHaveBeenCalledWith('UpgradeTaxCompliant');
  });
});
