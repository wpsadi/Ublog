import { Avatars } from "appwrite";

import client from "../mainAppwrite";

function getUserAvatar(name="X",width=300,height=300){
    const avatars = new Avatars(client);
    const returnData = avatars.getInitials(name,width,height);
    

    return returnData.href;
}
export default getUserAvatar;