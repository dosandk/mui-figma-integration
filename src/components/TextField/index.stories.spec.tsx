import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './TextField.stories';

const { Default } = composeStories(stories);

describe('TextField stories', () => {
  it('should renders default TextField component', () => {
    render(<Default data-testid="TextField" />);

    const element = screen.getByTestId('TextField');
    expect(element).not.toBeNull();
  });
}); 
