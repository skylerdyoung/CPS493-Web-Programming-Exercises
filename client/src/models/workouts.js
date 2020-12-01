import { myFetch } from "./my-fetch";
import session from "@/models/session";

export function getList() {
    return myFetch('workouts/owner/' + session.user.id );
}

export function getListByID(id) {
    return myFetch('workouts/owner/' + id );
}

export function addWorkout(ownerid, exercisetitle, exercisetype, exerciseprogress) {
    return myFetch('workouts/add' , {Owner_id: ownerid, Privacy_Setting: 4, Exercise_Title: exercisetitle, Exercise_Type: exercisetype, Exercise_Progress: exerciseprogress} );
}

export function updateWorkout(id, progress){
    return myFetch('workouts/update/' + id, {Exercise_Progress: progress} )
}

export function deleteWorkout(id){
    return myFetch('workouts/delete/' + id )
}