import { inferAsyncReturnType } from '@trpc/server';
import clerk from '@clerk/clerk-sdk-node';
import { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { JwtPayload } from 'jsonwebtoken';

export const createContext = async (opts: CreateNextContextOptions) => {
  const session = await getSession(opts.req);
  const user = await getUser(session);

  return { session, user };
};
export type Context = inferAsyncReturnType<typeof createContext>;

async function getSession(req: { headers: { authorization: string } }) {
  const { authorization } = req.headers;
  if (!authorization) return null;

  const token = authorization?.split(' ')[1];
  const session = await clerk.verifyToken(token);

  return session;
}

async function getUser(session: JwtPayload | null) {
  const userId = session?.sub || '';
  if (!userId) return null;

  const user = await clerk.users.getUser(userId);

  return user;
}
