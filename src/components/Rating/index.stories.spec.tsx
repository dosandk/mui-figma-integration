import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Rating.stories';

const { Default } = composeStories(stories);

describe('Rating stories', () => {
  it('should renders default Rating component', () => {
    render(<Default data-testid="Rating" />);

    const element = screen.getByTestId('Rating');
    expect(element).not.toBeNull();
  });
}); 
