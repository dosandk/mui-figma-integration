import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Badge.stories';

const { Default } = composeStories(stories);

describe('Badge stories', () => {
  it('renders default Badge component', () => {
    render(<Default />);

    const element = screen.getByRole('status');
    expect(element).not.toBeNull();
  });
});
