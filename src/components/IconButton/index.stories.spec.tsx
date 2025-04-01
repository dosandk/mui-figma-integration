import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './IconButton.stories';

const { Default } = composeStories(stories);

describe('IconButton stories', () => {
  it('should renders default IconButton component', () => {
    render(<Default data-testid="IconButton" />);

    const element = screen.getByTestId('IconButton');
    expect(element).not.toBeNull();
  });
}); 
