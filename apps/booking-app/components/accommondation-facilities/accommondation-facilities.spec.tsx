import { render } from '@testing-library/react';

import AccommondationFacilities from './accommondation-facilities';

describe('AccommondationFacilities', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccommondationFacilities />);
    expect(baseElement).toBeTruthy();
  });
});
