
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Chip.stories';

const { Default } = composeStories(stories);

describe('Chip stories', () => {
  it('should renders default Chip component', () => {
    render(<Default data-testid="chip" />);

    const element = screen.getByTestId('chip');
    expect(element).not.toBeNull();
  });
}); 
