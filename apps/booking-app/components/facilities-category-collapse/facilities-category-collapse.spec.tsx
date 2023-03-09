import { render } from '@testing-library/react';

import FacilitiesCategoryCollapse from './facilities-category-collapse';

describe('FacilitiesCategoryCollapse', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FacilitiesCategoryCollapse />);
    expect(baseElement).toBeTruthy();
  });
});
