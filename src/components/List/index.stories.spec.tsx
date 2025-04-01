import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './List.stories';

const { Default } = composeStories(stories);

describe('List stories', () => {
  it('should renders default List component', () => {
    render(<Default data-testid="List" />);

    const element = screen.getByTestId('List');
    expect(element).not.toBeNull();
  });
}); 
