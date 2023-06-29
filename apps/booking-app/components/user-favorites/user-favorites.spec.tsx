import { render } from '@testing-library/react';

import UserFavorites from './user-favorites';

describe('UserFavorites', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserFavorites />);
    expect(baseElement).toBeTruthy();
  });
});
