import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import DotsComponent from '../Dots';

describe('DotsComponent', () => {
  it('changes the selected count when a dot is pressed', () => {
    const selectedCount = 2;
    const totalCount = 5;
    const color = 'blue';
    const {getAllByTestId} = render(
      <DotsComponent
        selectedCount={selectedCount}
        totalCount={totalCount}
        color={color}
      />,
    );

    const dots = getAllByTestId(/dot-/i);
    const dotToPress = dots[3];

    fireEvent.press(dotToPress);

    const updatedDots = getAllByTestId(/dot-/i);
    const updatedSelectedDots = updatedDots.filter((_, index) => index <= 3);
    const updatedSelectedCount = updatedSelectedDots.length;

    expect(updatedSelectedCount).toBe(4);
  });
});
