import React from 'react';
import {render} from '@testing-library/react-native';
import {RootStackParamList} from '../../navigationTypes';
import {StackNavigationProp} from '@react-navigation/stack';
import UserContextProvider from '../../components/UserContext';
import StepperCompleteScreen from './StepperComplete';

describe('StepperCompleteScreen', () => {
  const mockNavigation: StackNavigationProp<
    RootStackParamList,
    'StepperComplete'
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

  test('renders stepper complete screen with steps data', () => {
    const title1 = 'How your new account will work';
    const title2 = 'Your consents to switch';
    const title3 = 'Tax reporting';
    const title4 = 'Confirm your details';

    const stepsData = [
      {
        number: '1',
        title: {title1},
      },
      {
        number: '2',
        title: {title2},
      },
      {
        number: '3',
        title: {title3},
      },
      {
        number: '4',
        title: {title4},
      },
    ];

    const {getByText} = render(
      <UserContextProvider>
        <StepperCompleteScreen navigation={mockNavigation} />
      </UserContextProvider>,
    );

    // Check if the step titles are rendered
    const step1Title = getByText(title1);
    const step2Title = getByText(title2);
    const step3Title = getByText(title3);
    const step4Title = getByText(title4);
    expect(step1Title).toBeTruthy();
    expect(step2Title).toBeTruthy();
    expect(step3Title).toBeTruthy();
    expect(step4Title).toBeTruthy();

    // Check if the button is rendered
    const buttonElement = getByText('Continue');
    expect(buttonElement).toBeTruthy();
  });
});
