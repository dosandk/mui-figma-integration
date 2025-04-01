import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Radio.stories';

const { Default } = composeStories(stories);

describe('Radio stories', () => {
  it('should renders default Radio component', () => {
    render(<Default data-testid="Radio" />);

    const element = screen.getByTestId('Radio');
    expect(element).not.toBeNull();
  });
}); 
