import 'dotenv/config';
import * as trpcExpress from '@trpc/server/adapters/express';
import express, { Application } from 'express';
import cors from 'cors';

import { createContext } from './context';
import { router, publicProcedure } from './trpc';

const appRouter = router({
  email: publicProcedure.query(async opts => {
    const user = opts.ctx.user;
    const email = user?.emailAddresses[0].emailAddress ?? '';
    console.log('email', email);
    return { email };
  })
});

export type AppRouter = typeof appRouter;

const { PORT = 3001 } = process.env;

const app: Application = express();

// use cors
app.use(cors());

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext
  })
);

app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}/trpc`);
});
