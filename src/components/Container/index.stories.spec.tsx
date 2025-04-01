import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Container.stories';

const { Default } = composeStories(stories);

describe('Container stories', () => {
  it('should renders default Container component', () => {
    render(<Default data-testid="container" />);

    const element = screen.getByTestId('container');
    expect(element).not.toBeNull();
  });
}); 
