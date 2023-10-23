import React from 'react';
import {render} from '@testing-library/react-native';
import Toast from '../Toast';

describe('Toast component', () => {
  it('renders with message', () => {
    const {getByText} = render(<Toast message="Test message" />);
    expect(getByText('Test message')).toBeDefined();
  });

  it('renders nothing when message is empty', () => {
    const {queryByText} = render(<Toast message="" />);
    expect(queryByText('')).toBeNull();
  });
});
