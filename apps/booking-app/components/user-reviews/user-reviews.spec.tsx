import { render } from '@testing-library/react';

import UserReviews from './user-reviews';

describe('UserReviews', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserReviews />);
    expect(baseElement).toBeTruthy();
  });
});
