<template>
     <div class="exercise" id="exercisebox" >

    <article class="message is-link" id="sub-box" >
  
      <div class="message-header">
        <p>Exercise Dashboard</p>
      </div>

      <div class="message-body">

        <div class="card">

        <div class="card-content">

            <Exercise v-for="(exercise,i) in session.user.exercises"
              :key="exercise"
              :user="session.user"
              :exercise="exercise"
              :i="i" 
             />

            <footer class="card-footer">
              <router-link to='/addexercise' class="card-footer-item">
                + Add Exercise
              </router-link>
            </footer>

        </div>

        </div>   

      </div>
      

    </article>

  </div>
</template>

<script>
  import Exercise from '@/components/Exercise'
  import session from "@/models/session";
  import users from "@/models/users"

export default {
  data() {
      return{
        session, users
      }
  },
  components: {
    Exercise
  },

}
</script>

<style>

  #exercisebox{
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