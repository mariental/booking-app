import { render } from '@testing-library/react';

import AccommondationRoomTableRow from './accommondation-room-table-row';

describe('AccommondationRoomTableRow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccommondationRoomTableRow />);
    expect(baseElement).toBeTruthy();
  });
});
