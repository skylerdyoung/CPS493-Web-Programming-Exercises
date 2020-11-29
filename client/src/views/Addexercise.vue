<template>
  <div class="addexercise" id="addexercisebox">

      
    <article class="message is-link" id="sub-box" >
  
      <div class="message-header">
        <p>Add Exercise</p>
      </div>

      <div class="message-body">

        <div class="card">

        <div class="card-content">

        <h4>Exercise Title:</h4>

        <input v-model="title" class="input" type="text" id="title" placeholder="Enter a Title">

        <br><br>

        <h4>Type of Exercise:</h4>

        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
              <div :value="type"> {{ this.type }} </div>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <div class="dropdown-item">
                <a href="#" @click.prevent="exerciseSelect('Weightlifting')" class="dropdown-item">
                  Weightlifting
                </a>
              </div>
              <div class="dropdown-item">
                <a href="#" @click.prevent="exerciseSelect('Cardio')" class="dropdown-item">
                  Cardio
                </a>
              </div>
              <div class="dropdown-item">
                <a href="#" @click.prevent="exerciseSelect('Hybrid Method')" class="dropdown-item">
                  Hybrid Method
                </a>
              </div>
              <div class="dropdown-item">
                <a href="#" @click.prevent="exerciseSelect('Other')" class="dropdown-item">
                  Other
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer class="card-footer">
        
          <p class="card-footer-item">
              <button class="button is-info" @click.prevent="addExercise">
                Submit
              </button>
          </p>

          <router-link to='/exercises' class="card-footer-item">
            Cancel
          </router-link>
          
        </footer>

        </div>   

        </div>

      </div>
      

    </article>

  </div>
</template>

<script>
import session from "@/models/session";
import users from "@/models/users";


export default {

  data(){
    return{
      title: '',
      type: 'Weightlifting'
    }
  },
  methods:{
    addExercise(){

      for (var i = 0; i < users.userList.length; i++) {

        if(users.userList[i].user === session.user.user){

          users.userList[i].exercises.push({title: this.title, type: this.type,
          progress: 0})

        }

        this.$router.push('exercises')

      }
    },
    exerciseSelect(exerciseType){
      this.type = exerciseType;

    },
  }
}
</script>

<style>

#addexercisebox{
    margin:auto;
    width: 50%;
    padding-top: 2.5%;
    padding-bottom: 2.5%;
    background-color: white;
  }

#sub-box{
    background-color: white;
}

</style>