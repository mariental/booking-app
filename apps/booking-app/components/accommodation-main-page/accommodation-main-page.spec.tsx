import { render } from '@testing-library/react';

import AccommodationMainPage from './accommodation-main-page';

describe('AccommodationMainPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccommodationMainPage />);
    expect(baseElement).toBeTruthy();
  });
});
