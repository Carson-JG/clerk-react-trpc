import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../../../server/src/index';

const API_URL = 'http://localhost:3001/trpc';

let token: string | null = null;

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: API_URL,
      headers: () => {
        return {
          authorization: `Bearer ${token}`
        };
      }
    })
  ]
});

export function setToken(newToken: string | null) {
  token = newToken;
}
