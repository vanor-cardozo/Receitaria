import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

function renderWithRouter(componentToRender) {
  const customHistory = createMemoryHistory();
  const returnFromRender = render(
    <Router history={ customHistory }>
      { componentToRender }
    </Router>,
  );

  return { history: customHistory, ...returnFromRender };
}

export default renderWithRouter;
