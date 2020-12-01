<template>
  <div  v-if="user.UserName != null" class="card" id="adminuserpanel">
          <div class="card-content">

           <div class="media">
           <div class="media-left">
          <figure class="image is-48x48">
          <img src="https://img.favpng.com/3/4/13/computer-icons-businessperson-illustration-royalty-free-user-png-favpng-aPV2xdBz8URLdbXPua700bAhv.jpg" alt="Placeholder image">
          </figure>
          </div>
          <div class="media-content">
           <p class="title is-6">{{user.FirstName}} {{user.LastName}}</p>
           <p class="subtitle is-7">@{{user.UserName}}</p>
          </div>
         </div>

            
            <ExerciseDisplay v-for="(exercise,j) in this.list"
              :key="exercise"
              :exercise="exercise"
              :i="j" 
            />

            <footer class="card-footer">
              <a href="#" class="card-footer-item" @click="editThisUser()">Edit User</a>     
              <a href="#" class="card-footer-item" @click="deleteThisUser()">Delete User</a>
            </footer>
          
            </div>
    </div>   
</template>

<script>

import { getListByID } from "@/models/workouts";
import { deleteUser } from "@/models/users";
import session from "@/models/session";
import ExerciseDisplay from '@/components/ExerciseDisplay'

export default {
    data() {
      return{
        list: []
      }
    },
    async created(){
        this.list = await getListByID(this.user.id); 
    },
    props: {
        user: Object,
        i: Number
    },
    methods: {
      deleteThisUser(){
        if (this.user.UserName === 'admin'){         
            session.addNotification('Error: Cannot delete admin', 'danger')
        }
        else{
          deleteUser(this.user.id);
          session.addNotification('Successfully deleted user: ' + this.user.UserName + '.' , 'danger');
          this.user.UserName = null;
        }
      },
      editThisUser(){
          if (this.user.UserName === 'admin'){         
            session.addNotification('Error: Cannot edit admin', 'danger')
          }
          else{
            session.miscVar = this.user.id;
            this.$router.push('edituser')
          }
      }


    /*   deleteUser(i){

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

        }*/

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