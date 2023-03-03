import { render } from '@testing-library/react';

import DetailsInfo from './details-info';

describe('DetailsInfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DetailsInfo />);
    expect(baseElement).toBeTruthy();
  });
});
