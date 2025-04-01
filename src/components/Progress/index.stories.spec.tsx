import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Progress.stories';

const { Default } = composeStories(stories);

describe('Progress stories', () => {
  it('should renders default Progress component', () => {
    render(<Default data-testid="Progress" />);

    const element = screen.getByTestId('Progress');
    expect(element).not.toBeNull();
  });
}); 
