import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import CheckboxToggle from '../CheckboxToggle';

describe('CheckboxToggle component', () => {
  const mockProps = {
    checked: false,
    onToggle: jest.fn(),
    disabled: false,
  };

  it('renders without crashing', () => {
    const {getByLabelText} = render(<CheckboxToggle {...mockProps} />);
    const checkboxComponent = getByLabelText('Unchecked');
    expect(checkboxComponent).toBeTruthy();
  });

  it('calls onToggle when the checkbox is pressed', () => {
    const {getByLabelText} = render(<CheckboxToggle {...mockProps} />);
    const checkboxComponent = getByLabelText('Unchecked');
    act(() => {
      fireEvent.press(checkboxComponent);
    });
    expect(mockProps.onToggle).toHaveBeenCalled();
  });

  it('renders the checked icon when checked is true', () => {
    const {getByLabelText} = render(
      <CheckboxToggle {...mockProps} checked={true} />,
    );
    const checkedIcon = getByLabelText('Checked');
    expect(checkedIcon).toBeTruthy();
  });
  it('renders the unchecked icon when checked is false', () => {
    const {getByLabelText} = render(
      <CheckboxToggle {...mockProps} checked={false} />,
    );
    const checkedIcon = getByLabelText('Unchecked');
    expect(checkedIcon).toBeTruthy();
  });
});
