import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Slider.stories';

const { Default } = composeStories(stories);

describe('Slider stories', () => {
  it('should renders default Slider component', () => {
    render(<Default data-testid="Slider" />);

    const element = screen.getByTestId('Slider');
    expect(element).not.toBeNull();
  });
}); 
