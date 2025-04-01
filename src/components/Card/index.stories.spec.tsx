import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Card.stories';

const { Default } = composeStories(stories);

describe('Card stories', () => {
  it('should renders default Card component', () => {
    render(<Default data-testid="card" />);

    const element = screen.getByTestId('card');
    expect(element).not.toBeNull();
  });
}); 
