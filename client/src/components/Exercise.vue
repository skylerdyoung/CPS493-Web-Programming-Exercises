<template>
  <div class="card">
            <div class="card">
            <div class="card-content">

            <strong>{{exercise.title}}</strong>
            <h3>Type: <i>{{exercise.type}}</i></h3>
            <progress class="progress is-primary" :value="exercise.progress" max="100"></progress>

            <footer class="card-footer">
              <span class="card-footer-item">
                  <a href="#"  @click.prevent="incrementExercise(i)" >Increase by  </a> 
                    
                    <div style="padding-left: 5px;" class="dropdown is-hoverable">
                    <div class="dropdown-trigger">
                        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                        <span id="type">5%</span>
                        <span class="icon is-small">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                        <div class="dropdown-item">
                            <a href="#" @click.prevent="fiveSelect()" class="dropdown-item">
                            5%
                            </a>
                        </div>
                        <div class="dropdown-item">
                            <a href="#" @click.prevent="tenSelect()" class="dropdown-item">
                            10%
                            </a>
                        </div>
                        <div class="dropdown-item">
                            <a href="#" @click.prevent="twentySelect()" class="dropdown-item">
                            20%
                            </a>
                        </div>
                        <div class="dropdown-item">
                            <a href="#" @click.prevent="fiftySelect()" class="dropdown-item">
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
       incrementExercise(i){
            
            for (var j = 0; j < users.userList.length; j++) {

                if(users.userList[j].user == this.user.user){
                    if (document.getElementById('type').innerHTML =="5%"){
                        users.userList[j].exercises[i].progress += 5;
                    }
                    else if (document.getElementById('type').innerHTML =="10%"){
                        users.userList[j].exercises[i].progress += 10;
                    }
                    else if (document.getElementById('type').innerHTML =="20%"){
                        users.userList[j].exercises[i].progress += 20;
                    }
                    else if (document.getElementById('type').innerHTML =="50%"){
                        users.userList[j].exercises[i].progress += 50;
                    }
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