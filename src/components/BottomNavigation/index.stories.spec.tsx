import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './BottomNavigation.stories';

const { Default } = composeStories(stories);

describe('BottomNavigation stories', () => {
  it('renders default BottomNavigation component', () => {
    render(<Default />);

    const element = screen.getByRole('navigation');
    expect(element).not.toBeNull();
  });
}); 
