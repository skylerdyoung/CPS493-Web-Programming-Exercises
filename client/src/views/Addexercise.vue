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

        <input class="input" type="text" id="title" placeholder="Enter a Title">

        <br><br>

        <h4>Type of Exercise:</h4>

        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu4">
              <span id="type">Weightlifting</span>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <div class="dropdown-item">
                <a href="#" @click.prevent="weightSelect()" class="dropdown-item">
                  Weightlifting
                </a>
              </div>
              <div class="dropdown-item">
                <a href="#" @click.prevent="cardioSelect()" class="dropdown-item">
                  Cardio
                </a>
              </div>
              <div class="dropdown-item">
                <a href="#" @click.prevent="hybridSelect()" class="dropdown-item">
                  Hybrid Method
                </a>
              </div>
              <div class="dropdown-item">
                <a href="#" @click.prevent="otherSelect()" class="dropdown-item">
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


  
  methods:{
    addExercise(){

      for (var i = 0; i < users.userList.length; i++) {

        if(users.userList[i].user === session.user.user){

          users.userList[i].exercises.push({title: document.getElementById('title').value,type: document.getElementById('type').innerHTML,
          progress: 0})

        }

        this.$router.push('exercises')

      }
    },
    weightSelect(){
      document.getElementById('type').innerHTML ="Weightlifting";

    },
    cardioSelect(){
      document.getElementById('type').innerHTML ="Cardio";

    },
    hybridSelect(){
      document.getElementById('type').innerHTML ="Hybrid Method";

    },
    otherSelect(){
      document.getElementById('type').innerHTML ="Other";
    }
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