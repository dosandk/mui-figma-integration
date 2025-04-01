import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Alert.stories';

const { Default } = composeStories(stories);

describe('Alert stories', () => {
  it('renders default Alert component', () => {
    render(<Default data-testid="alert" />);

    const element = screen.getByTestId('alert');
    expect(element).not.toBeNull();
  });
}); 
