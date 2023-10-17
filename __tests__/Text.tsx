// Text.test.tsx
import React from 'react';
import {render} from '@testing-library/react-native';
import Text from '../components/Text';

describe('Text component', () => {
  it('renders with default variant', () => {
    const {getByText} = render(<Text>Hello World!</Text>);
    expect(getByText('Hello World!')).toBeDefined();
  });

  it('renders with specified variant', () => {
    const {getByText} = render(<Text>Hello World!</Text>);
    expect(getByText('Hello World!')).toBeDefined();
  });
});
