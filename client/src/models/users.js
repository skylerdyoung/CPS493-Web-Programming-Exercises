import { myFetch } from "./my-fetch";

export function getList() {
    return myFetch('users');
}
export function registerUser(username, firstname, lastname, email, password){
    return myFetch('users/register', { UserName: username, FirstName: firstname, LastName: lastname, Email: email, Password: password, User_Type: 6 })
}
