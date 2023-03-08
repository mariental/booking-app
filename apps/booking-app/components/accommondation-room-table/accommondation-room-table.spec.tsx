import { render } from '@testing-library/react';

import AccommondationRoomTable from './accommondation-room-table';

describe('AccommondationRoomTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccommondationRoomTable />);
    expect(baseElement).toBeTruthy();
  });
});
