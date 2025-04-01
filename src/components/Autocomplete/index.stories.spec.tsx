import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Autocomplete.stories';

const { Default } = composeStories(stories);

describe('Autocomplete stories', () => {
  it('renders default Autocomplete', () => {
    render(<Default />);

    const element = screen.getByRole('combobox');
    expect(element).not.toBeNull();
  });
}); 
