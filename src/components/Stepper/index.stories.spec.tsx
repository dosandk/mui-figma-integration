import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Stepper.stories';

const { Default } = composeStories(stories);

describe('Stepper stories', () => {
  it('should renders default Stepper component', () => {
    render(<Default data-testid="Stepper" />);

    const element = screen.getByTestId('Stepper');
    expect(element).not.toBeNull();
  });
}); 
