import { AuthOptions, Session } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { GithubProfile } from 'next-auth/providers/github';
import { JWT } from 'next-auth/jwt';

interface CustomUser {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    githubProfile?: GithubProfile;
}

interface CustomSession extends Session {
    user: CustomUser;
}

export const authOptions: AuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
            profile(profile: GithubProfile) {
                return {
                    id: profile.id.toString(),
                    name: profile.name,
                    email: profile.email,
                    image: profile.avatar_url,
                    githubProfile: profile
                };
            }
        })
    ],
    callbacks: {
        async jwt({ token, account, profile }) {
            if (account) {
                token.githubProfile = profile as GithubProfile;
            }
            return token;
        },
        async session({ session, token }: { session: Session, token: JWT }) {
            const customSession: CustomSession = {
                ...session,
                user: {
                    ...session.user,
                    githubProfile: token.githubProfile as GithubProfile
                }
            };
            return customSession;
        }
    }
};
