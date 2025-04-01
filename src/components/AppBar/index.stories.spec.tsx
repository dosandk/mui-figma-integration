import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './AppBar.stories';

const { Default } = composeStories(stories);

describe('AppBar stories', () => {
  test('renders default AppBar component', () => {
    render(<Default />);

    const element = screen.getByRole('banner');
    expect(element).not.toBeNull();
  });
}); 
