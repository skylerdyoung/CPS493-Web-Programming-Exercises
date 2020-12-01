<template>
  <div v-if="this.check == false" class="card">
            <div class="card">
            <div class="card-content">

            <strong>{{exercise.Exercise_Title}}</strong>
            <h3>Type: <i>{{exercise.Exercise_Type}}</i></h3>
            <progress class="progress is-primary" :value="exercise.Exercise_Progress" max="100"></progress>

            <footer class="card-footer">
              <span class="card-footer-item">
                  <a @click.prevent="incrementThisExercise()" href="#" >Increase by  </a> 
                    
                    <div style="padding-left: 5px;" class="dropdown is-hoverable">
                    <div class="dropdown-trigger">
                        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                        <span>{{ this.value }}%</span>
                        <span class="icon is-small">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                        <div class="dropdown-item">
                            <a href="#" name="amount" @click.prevent="changeValue(5)"  class="dropdown-item">
                            5%
                            </a>
                        </div>
                        <div class="dropdown-item">
                            <a href="#" name="amount" @click.prevent="changeValue(10)" class="dropdown-item">
                            10%
                            </a>
                        </div>
                        <div class="dropdown-item">
                            <a href="#" name="amount" @click.prevent="changeValue(20)"  class="dropdown-item">
                            20%
                            </a>
                        </div>
                        <div class="dropdown-item">
                            <a href="#" name="amount" @click.prevent="changeValue(50)" class="dropdown-item">
                            50%
                            </a>
                        </div>
                        <div class="dropdown-item">
                            <a href="#" name="amount" @click.prevent="changeValue(100)" class="dropdown-item">
                            100%
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>

               </span>


              <a href="#" @click.prevent="deleteThisExercise()" class="card-footer-item">Delete</a>
            </footer>

            </div>
            </div>
    </div>
</template>

<script>
//import users from '@/models/users'
import { deleteWorkout } from '@/models/workouts'
import { updateWorkout } from '@/models/workouts'

export default {
    data (){
        return{
            value: 5,
            check: false
        }
    },
    props: {
        user: Object,
        exercise: Object,
        i: Number
    },
    methods: {
        deleteThisExercise(){
            deleteWorkout(this.exercise.id)
            this.check = true;
        },
        incrementThisExercise(){
            var tempVal = this.exercise.Exercise_Progress + this.value;

            updateWorkout(this.exercise.id, tempVal);

            this.$router.push('/')
        },

        /*deleteExercise(i){
            
            for (var j = 0; j < users.userList.length; j++) {

                if(users.userList[j].user == this.user.user){
                    users.userList[j].exercises.splice(i, 1);
                }
            }

        },
       incrementExercise(i){
            
            for (var j = 0; j < users.userList.length; j++) {

                if(users.userList[j].user == this.user.user){
                        users.userList[j].exercises[i].progress += this.value;
                }
            }

        },*/
        changeValue(newValue){
            this.value = newValue;
        }
    
    }
}
</script>

<style>

</style>