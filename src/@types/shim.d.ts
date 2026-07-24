import type { ProtocolWithReturn } from 'webext-bridge';

import type { getMTGJSONData } from '../entrypoints/background/utils/mtgjson';

declare module 'webext-bridge' {
  export interface ProtocolMap {
    'cardmarket-bulk-import.getMTGJSONData': ProtocolWithReturn<
      undefined,
      ReturnType<typeof getMTGJSONData>
    >,
  }
}
