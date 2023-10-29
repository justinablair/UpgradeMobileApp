import React from 'react';
import {render} from '@testing-library/react-native';
import DotsComponent from '../Dots';

describe('DotsComponent', () => {
  it('renders the correct number of dots', () => {
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
    expect(dots.length).toBe(totalCount);
  });

  it('applies the selected style to the correct number of dots', () => {
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
    const selectedDots = dots.filter((_, index) => index < selectedCount);
    selectedDots.forEach(dot => {
      expect(dot.props.style).toContainEqual(
        expect.objectContaining({
          width: 13,
          height: 13,
          borderRadius: 13,
        }),
      );
    });
  });
});
