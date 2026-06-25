import NextAuth from 'next-auth';
import ThunderID from 'next-auth/providers/thunderid';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [ThunderID],
});
