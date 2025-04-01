import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Snackbar.stories';

const { Default } = composeStories(stories);

describe('Snackbar stories', () => {
  it('should renders default Snackbar component', () => {
    render(<Default data-testid="Snackbar" />);

    const element = screen.getByTestId('Snackbar');
    expect(element).not.toBeNull();
  });
}); 
