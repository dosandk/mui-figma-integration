import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './ButtonGroup.stories';

const { Default } = composeStories(stories);

describe('ButtonGroup stories', () => {
  it('renders default ButtonGroup component', () => {
    render(<Default />);

    const element = screen.getByRole('group');
    expect(element).not.toBeNull();
  });
}); 
