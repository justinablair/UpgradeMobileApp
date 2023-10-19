import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CheckboxToggle from '../CheckboxToggle';

describe('CheckboxToggle component', () => {
  const mockProps = {
    checked: false,
    onToggle: jest.fn(),
    disabled: false,
  };

  it('renders without crashing', () => {
    const {getByRole} = render(<CheckboxToggle {...mockProps} />);
    const checkboxComponent = getByRole('checkbox');
    expect(checkboxComponent).toBeTruthy();
  });

  it('calls onToggle when the checkbox is pressed', () => {
    const {getByRole} = render(<CheckboxToggle {...mockProps} />);
    const checkboxComponent = getByRole('checkbox');
    fireEvent.press(checkboxComponent); // Use fireEvent.press to simulate press
    expect(mockProps.onToggle).toHaveBeenCalled();
  });

  it('disables the checkbox when the disabled prop is true', () => {
    const {getByRole} = render(
      <CheckboxToggle {...mockProps} disabled={true} />,
    );
    const checkboxComponent = getByRole('checkbox');
    expect(checkboxComponent.props.accessibilityState.disabled).toEqual(true); // Check for the disabled property
  });
});
