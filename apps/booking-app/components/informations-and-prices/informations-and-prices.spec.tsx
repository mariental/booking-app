import { render } from '@testing-library/react';

import InformationsAndPrices from './informations-and-prices';

describe('InformationsAndPrices', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InformationsAndPrices />);
    expect(baseElement).toBeTruthy();
  });
});
