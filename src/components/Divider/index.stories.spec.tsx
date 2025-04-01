import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Divider.stories';

const { Default } = composeStories(stories);

describe('Divider stories', () => {
  it('should renders default Divider component', () => {
    render(<Default data-testid="Divider" />);

    const element = screen.getByTestId('Divider');
    expect(element).not.toBeNull();
  });
}); 
