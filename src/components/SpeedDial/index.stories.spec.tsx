import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './SpeedDial.stories';

const { Default } = composeStories(stories);

describe('SpeedDial stories', () => {
  it('should renders default SpeedDial component', () => {
    render(<Default data-testid="SpeedDial" />);

    const element = screen.getByTestId('SpeedDial');
    expect(element).not.toBeNull();
  });
}); 
