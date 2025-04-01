import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Skeleton.stories';

const { Default } = composeStories(stories);

describe('Skeleton stories', () => {
  it('should renders default Skeleton component', () => {
    render(<Default data-testid="Skeleton" />);

    const element = screen.getByTestId('Skeleton');
    expect(element).not.toBeNull();
  });
}); 
