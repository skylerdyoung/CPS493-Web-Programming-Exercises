import { myFetch } from "./my-fetch";

export function getList() {
    return myFetch('users');
}
export function getUser(id) {
    return myFetch('users/' + id);
}
export function registerUser(username, firstname, lastname, email, password){
    return myFetch('users/register', { UserName: username, FirstName: firstname, LastName: lastname, Email: email, Password: password, User_Type: 6 })
}
export function editUser(id, username, firstname, lastname, email, password){
    return myFetch('users/update/' + id, {UserName: username, FirstName: firstname, LastName: lastname, Email: email, Password: password, User_Type: 6 })
}
export function deleteUser(id){
    return myFetch('users/delete/' + id )
}