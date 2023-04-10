import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import ExternalLink from './ExternalLink';

describe('ExternalLink', () => {
  it('shoud show the arrow icon on hover', async () => {
    render(<ExternalLink href="/" text="Click Me" />);
    fireEvent.mouseOver(await screen.findByLabelText('Click Me'));

    expect(screen.findByLabelText('Arrow Icon')).toBeDefined();
  });

  it('should show the arrow icon disappearing on mouse leave', async () => {
    render(<ExternalLink href="/" text="Click Me" />);
    fireEvent.mouseOver(await screen.findByLabelText('Click Me'));
    fireEvent.mouseLeave(await screen.findByLabelText('Click Me'));

    expect(screen.queryByLabelText('Arrow Icon')).toBeNull();
  });
});
