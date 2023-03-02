import { render } from '@testing-library/react';

import AccomondationSearchListItem from './accomondation-search-list-item';

describe('AccomondationSearchListItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccomondationSearchListItem />);
    expect(baseElement).toBeTruthy();
  });
});
