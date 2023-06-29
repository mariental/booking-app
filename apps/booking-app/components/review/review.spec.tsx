import { render } from '@testing-library/react';

import Review from './review';

describe('Review', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Review />);
    expect(baseElement).toBeTruthy();
  });
});
