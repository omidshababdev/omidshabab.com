import { redirect } from "next/navigation";
import { getPageSession } from "@/lib/auth/lucia";
import { v4 as uuidv4 } from "uuid";

export type AuthSession = {
  session: {
    user: {
      id: string;
      name?: string;
      email?: string;
      username?: string;
    };
  } | null;
};
export const getUserAuth = async (): Promise<AuthSession> => {
  const session = await getPageSession();
  if (!session) return { session: null };
  return {
    session: {
      user: {
        id: session.user?.userId,
        name: session.user?.name,
        email: session.user?.email,
        username: session.user?.username,
      },
    },
  };
};

export const checkAuth = async () => {
  const session = await getPageSession();
  if (!session) redirect("/register");
};

export function generateUsername(email: string): string {
  const parts = email.split("@");
  const usernamePart = parts[0].toLowerCase().replace(/[^a-z0-9\-_]/gi, ""); // Remove non-alphanumeric characters and hyphens

  const username = `${usernamePart.slice(
    0,
    usernamePart.length
  )}-${uuidv4().slice(0, 5)}`; // Combine initials and UUID

  return username;
}
