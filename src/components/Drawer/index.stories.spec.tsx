import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Drawer.stories';

const { Default } = composeStories(stories);

describe('Drawer stories', () => {
  it('should renders default Drawer component', () => {
    render(<Default data-testid="Drawer" />);

    const element = screen.getByTestId('Drawer');
    expect(element).not.toBeNull();
  });
}); 
