import React from 'react';
import {render} from '@testing-library/react-native';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import UserContextProvider from '../../components/UserContext';
import StepperScreen2 from '../Stepper2';

describe('StepperScreen2', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'StepperScreen2'
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
        <StepperScreen2 navigation={mockNavigation} stepsData={stepsData} />
      </UserContextProvider>,
    );

    // Check if the step titles are rendered
    const step1Title = getByText('Step 1');
    const step2Title = getByText('Step 2');
    expect(step1Title).toBeTruthy();
    expect(step2Title).toBeTruthy();

    // Check if the button is rendered
    const buttonElement = getByText('Your consents');
    expect(buttonElement).toBeTruthy();
  });
});
