import { initAuth0 } from "@auth0/nextjs-auth0";

export default initAuth0({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  audience: process.env.AUTH0_AUDIENCE,
  scope: process.env.AUTH0_SCOPE,
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  postLogoutRedirectUri: process.env.AUTH0_POST_LOGOUT_REDIRECT,
  session: {
    cookieSecret: process.env.COOKIE_SECRET,
    cookieLifetime: 86400 * 30,
    storeIdToken: false,
    storeRefreshToken: true,
    storeAccessToken: true,
  },
});
