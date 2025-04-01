import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Popover.stories';

const { Default } = composeStories(stories);

describe('Popover stories', () => {
  it('should renders default Popover component', () => {
    render(<Default data-testid="Popover" open={true} />);

    const element = screen.getByTestId('Popover');
    expect(element).not.toBeNull();
  });
}); 
