import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Paper.stories';

const { Default } = composeStories(stories);

describe('Paper stories', () => {
  it('should renders default Paper component', () => {
    render(<Default data-testid="Paper" />);

    const element = screen.getByTestId('Paper');
    expect(element).not.toBeNull();
  });
}); 
