<template>
  <div class="card" id="adminuserpanel">
          <div class="card-content">

           <div class="media">
           <div class="media-left">
          <figure class="image is-48x48">
          <img :src="user.image" alt="Placeholder image">
          </figure>
          </div>
          <div class="media-content">
           <p class="title is-6">{{user.name}}</p>
           <p class="subtitle is-7">@{{user.user}}</p>
          </div>
         </div>

            
            <ExerciseDisplay v-for="(exercise,j) in users.userList[i].exercises"
              :key="exercise"
              :exercise="exercise"
              :i="j" 
            />

            <footer class="card-footer">
              <a href="#" class="card-footer-item" @click="editUser(i)">Edit User</a>     
              <a href="#" class="card-footer-item" @click="deleteUser(i)">Delete User</a>
            </footer>
          
            </div>
    </div>   
</template>

<script>

import users from "@/models/users";
import session from "@/models/session";
import ExerciseDisplay from '@/components/ExerciseDisplay'

export default {
    data() {
      return{
        users
      }
    },
    props: {
        user: Object,
        i: Number
    },
    methods: {
       deleteUser(i){

          if (i === 0){         
            session.addNotification('Error: Cannot delete admin', 'danger')
          }
          else{
            users.deleteUser(i);
          }
        },
        editUser(i){
          if (i === 0){         
            session.addNotification('Error: Cannot edit admin', 'danger')
          }
          else{
            session.miscVar = i;
            this.$router.push('edituser')
      
          }

        }

    },
    components: {
      ExerciseDisplay
    },
}
</script>

<style>

  #adminuserpanel{
    width: 50%;
    font-size: 50%;
    display:inline-block;
  }

</style>