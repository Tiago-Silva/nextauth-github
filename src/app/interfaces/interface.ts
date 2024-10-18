import {GithubProfile} from "next-auth/providers/github";

export interface Session {
    user?: {
        name: string | null;
        email: string;
        image: string;
        githubProfile: GithubProfile;
    };
}
