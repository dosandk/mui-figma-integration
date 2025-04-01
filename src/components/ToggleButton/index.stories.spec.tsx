import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './ToggleButton.stories';

const { Default } = composeStories(stories);

describe('ToggleButton stories', () => {
  it('should renders default ToggleButton component', () => {
    render(<Default data-testid="ToggleButton" />);

    const element = screen.getByTestId('ToggleButton');
    expect(element).not.toBeNull();
  });
}); 
