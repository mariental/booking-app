import { render } from '@testing-library/react';

import AccommondationRoom from './accommondation-room';

describe('AccommondationRoom', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccommondationRoom />);
    expect(baseElement).toBeTruthy();
  });
});
