import { use } from 'react';

import PanelsContext from '.';

function usePanelsContext() {
  return use(PanelsContext);
}

export default usePanelsContext;
