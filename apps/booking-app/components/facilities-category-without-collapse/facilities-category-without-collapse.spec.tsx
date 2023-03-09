import { render } from '@testing-library/react';

import FacilitiesCategoryWithoutCollapse from './facilities-category-without-collapse';

describe('FacilitiesCategoryWithoutCollapse', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FacilitiesCategoryWithoutCollapse />);
    expect(baseElement).toBeTruthy();
  });
});
