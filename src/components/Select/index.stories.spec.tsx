
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Select.stories';

const { Default } = composeStories(stories);

describe('Select stories', () => {
  it('should renders default Select component', () => {
    render(<Default data-testid="Select" />);

    const element = screen.getByTestId('Select');
    expect(element).not.toBeNull();
  });
}); 
