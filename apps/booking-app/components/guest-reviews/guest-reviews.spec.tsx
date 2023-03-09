import { render } from '@testing-library/react';

import GuestReviews from './guest-reviews';

describe('GuestReviews', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GuestReviews />);
    expect(baseElement).toBeTruthy();
  });
});
