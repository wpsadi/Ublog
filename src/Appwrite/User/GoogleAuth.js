import { Account, OAuthProvider } from "appwrite";

import { env } from "@/helpers/env";

import client from "../mainAppwrite";
// Go to OAuth provider login page
const account = new Account(client);
const successURL = `${env.domain}${env.OauthSuccess}`;
const failURL = `${env.domain}${env.OauthFailed}`;
export function GoogleOauth() {
  return account.createOAuth2Session(
    OAuthProvider.Google, // provider
    successURL, // redirect here on success
    failURL // redirect here on failure
  );
}

