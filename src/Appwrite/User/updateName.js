import { Account } from "appwrite";

import client from "../mainAppwrite";

function UpdateUsername(name){
    const account = new Account(client);
    return  account.updateName(name);
}
export default UpdateUsername;