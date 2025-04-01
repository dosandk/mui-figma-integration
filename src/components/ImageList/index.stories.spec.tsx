import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './ImageList.stories';

const { Default } = composeStories(stories);

describe('ImageList stories', () => {
  it('should renders default ImageList component', () => {
    render(<Default data-testid="ImageList" />);

    const element = screen.getByTestId('ImageList');
    expect(element).not.toBeNull();
  });
}); 
