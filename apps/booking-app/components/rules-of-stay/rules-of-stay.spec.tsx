import { render } from '@testing-library/react';

import RulesOfStay from './rules-of-stay';

describe('RulesOfStay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RulesOfStay />);
    expect(baseElement).toBeTruthy();
  });
});
