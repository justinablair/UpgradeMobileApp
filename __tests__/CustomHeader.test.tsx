import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CustomHeader from '../components/CustomHeader';

describe('CustomHeader', () => {
  it('renders the header with the correct styling', () => {
    const mockToggleExitModal = jest.fn();
    const {getByTestId} = render(
      <CustomHeader isDarkMode={false} toggleExitModal={mockToggleExitModal} />,
    );
    const headerComponent = getByTestId('navigationHeader');
    expect(headerComponent.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          backgroundColor: '#FFFFFF', // Change this to the expected color for light mode
        }),
      ]),
    );
  });

  it('calls toggleExitModal when the close button is pressed', () => {
    const mockToggleExitModal = jest.fn();
    const {getByTestId} = render(
      <CustomHeader isDarkMode={false} toggleExitModal={mockToggleExitModal} />,
    );
    const closeButton = getByTestId('CloseButton');
    fireEvent.press(closeButton);
    expect(mockToggleExitModal).toHaveBeenCalled();
  });
});