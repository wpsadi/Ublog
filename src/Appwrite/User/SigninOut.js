import { Account } from "appwrite";

import client from "../mainAppwrite";

function LogoutUser(){
    const account = new Account(client);
    return  account.deleteSession("current");
}
export default LogoutUser;