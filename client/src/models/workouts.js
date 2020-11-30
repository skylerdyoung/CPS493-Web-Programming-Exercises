import { myFetch } from "./my-fetch";
import session from "@/models/session";

export function getList() {
    return myFetch('workouts/owner/' + session.user.id );
}

export function getListByID(id) {
    return myFetch('workouts/owner/' + id );
}