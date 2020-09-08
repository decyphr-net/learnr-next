import { NextApiRequest } from "next";
import auth0 from "../auth/auth0";

/**
 * Get the current user's session from Auth0. If a session cannot be
 * retrieved then the user will be redirected to the login page
 */
const getSessionOrRedirect = async (req: any, res: any) => {
  if (typeof window === "undefined") {
    const session = (await auth0.getSession(req as NextApiRequest)) || {};
    if (!session) {
      res.writeHead(302, {
        Location: "/api/accounts/login",
      });
      res.end();
      return;
    }

    return session;
  }
};

export default getSessionOrRedirect;
