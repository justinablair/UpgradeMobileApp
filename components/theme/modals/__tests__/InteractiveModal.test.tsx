import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import InteractiveModal from '../InteractiveModal';
import {UserContextProvider} from '../../../UserContext';

describe('InteractiveModal', () => {
  const mockProps = {
    modalVisible: true,
    closeModal: jest.fn(),
    modalTitle: 'Test Modal Title',
    modalContent: 'Test Modal Content',
    pinkButtonText: 'Pink Button',
    onPinkButtonClick: jest.fn(),
    whiteButtonText: 'White Button',
    onWhiteButtonClick: jest.fn(),
  };

  it('renders with the correct title and content', () => {
    const {getByText} = render(
      <UserContextProvider>
        <InteractiveModal {...mockProps} />{' '}
      </UserContextProvider>,
    );
    expect(getByText('Test Modal Title')).toBeTruthy();
    expect(getByText('Test Modal Content')).toBeTruthy();
  });

  it('calls closeModal when the close icon is pressed', () => {
    const {getByLabelText} = render(
      <UserContextProvider>
        <InteractiveModal {...mockProps} />{' '}
      </UserContextProvider>,
    );
    fireEvent.press(getByLabelText('Close Button'));
    expect(mockProps.closeModal).toHaveBeenCalled();
  });

  it('calls onPinkButtonClick when the pink button is pressed', () => {
    const {getByText} = render(
      <UserContextProvider>
        <InteractiveModal {...mockProps} />
      </UserContextProvider>,
    );
    fireEvent.press(getByText('Pink Button'));
    expect(mockProps.onPinkButtonClick).toHaveBeenCalled();
  });

  it('calls onWhiteButtonClick when the white button is pressed', () => {
    const {getByText} = render(
      <UserContextProvider>
        <InteractiveModal {...mockProps} />{' '}
      </UserContextProvider>,
    );
    fireEvent.press(getByText('White Button'));
    expect(mockProps.onWhiteButtonClick).toHaveBeenCalled();
  });

  it('renders without the white button when whiteButtonText and onWhiteButtonClick are not provided', () => {
    const {queryByText} = render(
      <UserContextProvider>
        <InteractiveModal
          {...mockProps}
          whiteButtonText={undefined}
          onWhiteButtonClick={undefined}
        />
        ,
      </UserContextProvider>,
    );
    expect(queryByText('White Button')).toBeNull();
  });
});
