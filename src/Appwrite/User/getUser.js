import { Account } from "appwrite";

import client from "../mainAppwrite";

function getUser(){
    const account = new Account(client);
    return account.get();
}
export default getUser;