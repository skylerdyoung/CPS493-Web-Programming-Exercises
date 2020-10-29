<template>
  <div class="card">
            <div class="card">
            <div class="card-content">

            <strong>{{exercise.title}}</strong>
            <h3>Type: <i>{{exercise.type}}</i></h3>
            <progress class="progress is-primary" :value="exercise.progress" max="100"></progress>

            <footer class="card-footer">
              <span class="card-footer-item">
                  <a href="#" >Increase by  </a> 
                    
                    <div style="padding-left: 5px;" class="dropdown is-hoverable">
                    <div class="dropdown-trigger">
                        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                        <span id="type">%</span>
                        <span class="icon is-small">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                        <div class="dropdown-item">
                            <a href="#" @click.prevent="incrementExercise(i,5)" class="dropdown-item">
                            5%
                            </a>
                        </div>
                        <div class="dropdown-item">
                            <a href="#" @click.prevent="incrementExercise(i, 10)" class="dropdown-item">
                            10%
                            </a>
                        </div>
                        <div class="dropdown-item">
                            <a href="#" @click.prevent="incrementExercise(i, 20)" class="dropdown-item">
                            20%
                            </a>
                        </div>
                        <div class="dropdown-item">
                            <a href="#" @click.prevent="incrementExercise(i, 50)" class="dropdown-item">
                            50%
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>

               </span>


              <a href="#" @click.prevent="deleteExercise(i)" class="card-footer-item">Delete</a>
            </footer>

            </div>
            </div>
    </div>
</template>

<script>
import users from '@/models/users'
    

export default {
    props: {
        user: Object,
        exercise: Object,
        i: Number
    },
    methods: {
        deleteExercise(i){
            
            for (var j = 0; j < users.userList.length; j++) {

                if(users.userList[j].user == this.user.user){
                    users.userList[j].exercises.splice(i, 1);
                }
            }

        },
       incrementExercise(i, num){
            
            for (var j = 0; j < users.userList.length; j++) {

                if(users.userList[j].user == this.user.user){
                        users.userList[j].exercises[i].progress += num;
                }
            }

        },
        fiveSelect(){
            document.getElementById('type').innerHTML ="5%";
        },
        tenSelect(){
            document.getElementById('type').innerHTML ="10%";
        },
        twentySelect(){
            document.getElementById('type').innerHTML ="20%";
        },
        fiftySelect(){
            document.getElementById('type').innerHTML ="50%";
        }
    }
}
</script>

<style>

</style>