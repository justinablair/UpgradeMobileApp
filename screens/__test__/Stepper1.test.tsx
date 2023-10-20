import React from 'react';
import {render} from '@testing-library/react-native';
import StepperScreen1 from '../Stepper1';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import UserContextProvider from '../../components/UserContext';

describe('StepperScreen1', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'StepperScreen1'
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

  test('renders stepper screen with steps data', () => {
    const stepsData = [
      {
        number: '1',
        title: 'Step 1',
        description: 'Description for step 1',
        active: true,
      },
      {
        number: '2',
        title: 'Step 2',
        description: 'Description for step 2',
        active: false,
      },
    ];

    const {getByText} = render(
      <UserContextProvider>
        <StepperScreen1 navigation={mockNavigation} stepsData={stepsData} />
      </UserContextProvider>,
    );

    // Check if the step titles are rendered
    const step1Title = getByText('Step 1');
    const step2Title = getByText('Step 2');
    expect(step1Title).toBeTruthy();
    expect(step2Title).toBeTruthy();

    // Check if the button is rendered
    const buttonElement = getByText('How it will work');
    expect(buttonElement).toBeTruthy();
  });
});
