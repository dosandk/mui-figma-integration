import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Dialog.stories';

const { Default } = composeStories(stories);

describe('Dialog stories', () => {
  it('should renders default Dialog component', () => {
    render(<Default data-testid="Dialog" />);

    const element = screen.getByTestId('Dialog');
    expect(element).not.toBeNull();
  });
}); 
