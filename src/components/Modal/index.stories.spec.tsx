import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Modal.stories';

const { Default } = composeStories(stories);

describe('Modal stories', () => {
  it('should renders default Modal component', () => {
    render(<Default data-testid="Modal" open={true} />);

    const element = screen.getByTestId('Modal');
    expect(element).not.toBeNull();
  });
}); 
