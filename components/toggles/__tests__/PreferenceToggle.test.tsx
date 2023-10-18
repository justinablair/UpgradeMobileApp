import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {UserContextProvider} from '../../UserContext';
import PreferenceToggle from '../PreferenceToggle';

describe('PreferenceToggle component', () => {
  const mockProps = {
    label: 'Test Preference',
    value: false,
    description: 'Test Description',
    onChange: jest.fn(), // Ensure that this is a mock function
    testID: 'mockToggle',
  };

  it('renders the preference toggle correctly', () => {
    const {getByText, getByTestId} = render(
      <UserContextProvider>
        <PreferenceToggle {...mockProps} />
      </UserContextProvider>,
    );
    const labelComponent = getByText(mockProps.label);
    expect(labelComponent).toBeTruthy();

    const toggleComponent = getByTestId(`${mockProps.testID}Toggle`);
    expect(toggleComponent).toBeTruthy();
  });

  it('calls the onChange function when the toggle is pressed', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <PreferenceToggle {...mockProps} />
      </UserContextProvider>,
    );
    const toggleComponent = getByTestId(`${mockProps.testID}Toggle`);

    fireEvent(toggleComponent, 'onValueChange', true);

    expect(mockProps.onChange).toHaveBeenCalledTimes(1);
  });
});
