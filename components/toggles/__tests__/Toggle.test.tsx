import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Toggle from '../Toggle';

describe('Toggle component', () => {
  const mockProps = {
    value: false,
    onValueChange: jest.fn(), // Creating a mock function for the onValueChange callback
    label: 'Toggle Label',
    accessibilityLabel: 'toggle-switch',
  };

  it('renders without crashing', () => {
    const {getByRole} = render(<Toggle {...mockProps} />);
    const toggleComponent = getByRole('switch');
    expect(toggleComponent).toBeTruthy();
  });

  it('calls onValueChange when the switch is toggled', () => {
    const {getByRole} = render(<Toggle {...mockProps} />);
    const toggleComponent = getByRole('switch');

    // Toggling the switch by updating the value prop
    fireEvent(toggleComponent, 'valueChange', true);

    // Verifying that the onValueChange mock function is called
    expect(mockProps.onValueChange).toHaveBeenCalled();
  });
});
