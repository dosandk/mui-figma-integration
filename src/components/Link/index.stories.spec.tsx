import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Link.stories';

const { Default } = composeStories(stories);

describe('Link stories', () => {
  it('should renders default Link component', () => {
    render(<Default data-testid="Link" />);

    const element = screen.getByTestId('Link');
    expect(element).not.toBeNull();
  });
}); 
