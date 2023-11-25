import { z } from 'zod';
import { publicProcedure, router } from './trpc';

export const appRouter = router({
  anyApiROute: publicProcedure.query(() => {
    return 'hello';
  }),
});

export type AppRouter = typeof appRouter;
