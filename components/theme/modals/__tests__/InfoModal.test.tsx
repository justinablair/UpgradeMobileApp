import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import InfoModal from '../InfoModal';
import UserContextProvider from '../../../UserContext';

describe('InfoModal', () => {
  const mockProps = {
    visible: true,
    onPressClose: jest.fn(),
    title: 'Test Title',
    content: 'Test Content',
    accessibilityLabel: 'CloseIcon',
    contentStyle: {},
    titleStyle: {},
    bodyTextStyle: {},
  };

  it('renders with the correct title and content', () => {
    const {getByText} = render(
      <UserContextProvider>
        <InfoModal {...mockProps} />
      </UserContextProvider>,
    );
    expect(getByText('Test Title')).toBeTruthy();
    expect(getByText('Test Content')).toBeTruthy();
  });

  it('calls onPressClose when the close icon is pressed', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <InfoModal {...mockProps} />
      </UserContextProvider>,
    );
    act(() => {
      fireEvent.press(getByTestId('CloseIcon'));
    });
    expect(mockProps.onPressClose).toHaveBeenCalled();
  });

  it('has the correct accessibility attributes for the close icon', () => {
    const {getByTestId} = render(
      <UserContextProvider>
        <InfoModal {...mockProps} />
      </UserContextProvider>,
    );
    const closeIcon = getByTestId('CloseIcon');
    expect(closeIcon).toBeTruthy();
    expect(closeIcon.props.accessible).toEqual(true);
    expect(closeIcon.props.accessibilityLabel).toEqual('CloseIcon');
  });
});
