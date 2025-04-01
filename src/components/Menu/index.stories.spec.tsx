import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Menu.stories';

const { Default } = composeStories(stories);

describe('Menu stories', () => {
  it('should renders default Menu component', () => {
    render(<Default data-testid="Menu" />);

    const element = screen.getByTestId('Menu');
    expect(element).not.toBeNull();
  });
}); 
