<template>
   <div class="message-body">

        <div class="card">

        <div class="card-content">

           <div class="media">
           <div class="media-left">
          <figure class="image is-48x48">
          <img :src="session.user.image">
          </figure>
          </div>
          <div class="media-content">
           <p class="title is-4">{{session.user.fname}} {{session.user.lname}} </p>
           <p class="subtitle is-6">@{{session.user.user}}</p>
          </div>
         </div>

         <div class="content">

          </div>

            <ExerciseDisplay v-for="(exercise,i) in this.list"
              :key="exercise"
              :exercise="exercise"
              :i="i" 
             />          

        </div>

        </div>   

      </div>
</template>

<script>

import session from "@/models/session";
import ExerciseDisplay from "@/components/ExerciseDisplay"
import { getList } from "@/models/workouts";

export default {
    data: ()=> ({
        session,
        list: []
    }),
    async created(){
      this.list = await getList(); 
    },
    components:{
        ExerciseDisplay
    }
}


</script>

<style>

</style>