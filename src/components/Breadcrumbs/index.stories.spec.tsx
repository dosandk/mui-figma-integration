import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Breadcrumbs.stories';

const { Default } = composeStories(stories);

describe('Breadcrumbs stories', () => {
  it('renders default Breadcrumbs component', () => {
    render(<Default />);

    const element = screen.getByRole('navigation');
    expect(element).not.toBeNull();
  });
}); 
