import * as React from 'react';
import { render } from 'react-dom';

import Dale from './components/Dale';

render(
  <Dale compiler="TypeScript" framework="React" />,
  document.getElementById('root')
);
