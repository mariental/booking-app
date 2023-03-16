import { render } from '@testing-library/react';

import SearchBarHorizontal from './search-bar-horizontal';

describe('SearchBarHorizontal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchBarHorizontal />);
    expect(baseElement).toBeTruthy();
  });
});
