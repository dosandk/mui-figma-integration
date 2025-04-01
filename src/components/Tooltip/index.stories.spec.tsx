import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Tooltip.stories';

const { Default } = composeStories(stories);

describe('Tooltip stories', () => {
  it('should renders default Tooltip component', () => {
    render(<Default data-testid="Tooltip" />);

    const element = screen.getByTestId('Tooltip');
    expect(element).not.toBeNull();
  });
}); 
