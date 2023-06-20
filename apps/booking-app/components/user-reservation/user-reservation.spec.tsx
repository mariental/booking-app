import { render } from '@testing-library/react';

import UserReservation from './user-reservation';

describe('UserReservation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserReservation />);
    expect(baseElement).toBeTruthy();
  });
});
