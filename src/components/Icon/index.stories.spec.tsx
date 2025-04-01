import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Icon.stories';

const { Default } = composeStories(stories);

describe('Icon stories', () => {
  it('should renders default Icon component', () => {
    render(<Default data-testid="Icon" />);

    const element = screen.getByTestId('Icon');
    expect(element).not.toBeNull();
  });
}); 
