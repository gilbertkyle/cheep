import type { User } from "@clerk/nextjs/api";

export const filterUserForClient = (user: User) => {
  return {
    id: user.id,
    username: user.username,
    imageUrl: user.imageUrl,
    externalUsername:
      user.externalAccounts.find(
        (externalAccount) => externalAccount.provider === "oauth_github",
      )?.username ?? null,
  };
};
