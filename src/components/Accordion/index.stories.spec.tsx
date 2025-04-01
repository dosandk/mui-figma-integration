import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './index.stories';

const { DefaultAccordion } = composeStories(stories);

describe('Accordion stories', () => {
  it('should renders default Accordion component', () => {
    render(<DefaultAccordion data-testid="accordion" />);

    const element = screen.getByTestId('accordion');
    expect(element).not.toBeNull();
  });
}); 
