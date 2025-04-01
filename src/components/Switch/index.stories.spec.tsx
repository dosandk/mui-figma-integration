import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Switch.stories';

const { Default } = composeStories(stories);

describe('Switch stories', () => {
  it('should renders default Switch component', () => {
    render(<Default data-testid="Switch" />);

    const element = screen.getByTestId('Switch');
    expect(element).not.toBeNull();
  });
}); 
