import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Tabs.stories';

const { Default } = composeStories(stories);

describe('Tabs stories', () => {
  it('should renders default Tabs component', () => {
    render(<Default data-testid="Tabs" />);

    const element = screen.getByTestId('Tabs');
    expect(element).not.toBeNull();
  });
}); 
