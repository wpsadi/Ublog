import { Client } from "appwrite";

import { env } from "@/helpers/env";
// console.log(env)
const client = new Client()
    .setEndpoint(env.APIEndpoint) // Your API Endpoint
    .setProject(env.projectID);                 // Your project ID


    export default client