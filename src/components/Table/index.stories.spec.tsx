import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Table.stories';

const { Default } = composeStories(stories);

describe('Table stories', () => {
  it('should renders default Table component', () => {
    render(<Default data-testid="Table" />);

    const element = screen.getByTestId('Table');
    expect(element).not.toBeNull();
  });
}); 
