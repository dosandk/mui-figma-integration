import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Backdrop.stories';

const { DefaultStory } = composeStories(stories);

describe('Backdrop stories', () => {
  it('renders default Backdrop component', () => {
    render(<DefaultStory data-testid="hidden-element" />);

    const element = screen.getByTestId('hidden-element');
    expect(element).not.toBeNull();
  });
}); 
