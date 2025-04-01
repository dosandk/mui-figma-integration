import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Avatar.stories';

const { DefaultAvatar } = composeStories(stories);

describe('Avatar stories', () => {
  it('renders Avatar component', () => {
    render(<DefaultAvatar />);

    const element = screen.getByText("Avatar")
    expect(element).not.toBeNull();
  });
}); 
