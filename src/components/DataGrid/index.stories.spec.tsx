import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './DataGrid.stories';

const { Default } = composeStories(stories);

describe('DataGrid stories', () => {
  it('should renders default DataGrid component', () => {
    render(<Default data-testid="DataGrid" />);

    const element = screen.getByTestId('DataGrid');
    expect(element).not.toBeNull();
  });
}); 
