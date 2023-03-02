import { render } from '@testing-library/react';

import GeneralReviews from './general-reviews';

describe('GeneralReviews', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GeneralReviews />);
    expect(baseElement).toBeTruthy();
  });
});
