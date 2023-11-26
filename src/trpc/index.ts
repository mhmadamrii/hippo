import { z } from 'zod';
import { publicProcedure, router } from './trpc';
import { authRouter } from './auth-router';

export const appRouter = router({
  auth: authRouter,
  // anyApiROute: publicProcedure.query(() => {
  //   return 'hello';
  // }),
});

export type AppRouter = typeof appRouter;
