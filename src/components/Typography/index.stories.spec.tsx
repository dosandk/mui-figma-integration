import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Typography.stories';

const { Default } = composeStories(stories);

describe('Typography stories', () => {
  it('should renders default Typography component', () => {
    render(<Default data-testid="Typography" />);

    const element = screen.getByTestId('Typography');
    expect(element).not.toBeNull();
  });
}); 
