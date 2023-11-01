import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { clerkClient } from "@clerk/nextjs/server";
import { filterUserForClient } from "~/server/helpers/filterUserForClient";
import { TRPCError } from "@trpc/server";

export const profileRouter = createTRPCRouter({
  getUserById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const [user] = await clerkClient.users.getUserList({
        userId: [input.id],
      });
      if (!user) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "User not found",
        });
      }
      return filterUserForClient(user);
    }),
});
