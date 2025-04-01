import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Checkbox.stories';

const { Default } = composeStories(stories);

describe('Checkbox stories', () => {
  it('should renders default Checkbox component', () => {
    render(<Default data-testid="checkbox" />);

    const element = screen.getByTestId('checkbox');
    expect(element).not.toBeNull();
  });
}); 
