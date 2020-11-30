<template>

  <div class="home" id="homebox" >

    <article class="message is-link" id="sub-box" >
  
      <div class="message-header">
        <p>You</p>
      </div>

      <HomeDisplay />

    </article>

    <article class="message is-link" id="sub-box" >
  
      <div class="message-header">
        <p>Users</p>
      </div>

      <div class="message-body">

        <div class="card">

          <div class="card-content">

              <UserDisplay v-for="(user,i) in this.list" 
                :key="user"
                :user="user"
                :i="i" 
              />

          </div>

        </div>   

      </div>

    </article>


  </div>

</template>

<script>


  import HomeDisplay from "@/components/HomeDisplay";
  import UserDisplay from "@/components/UserDisplay";
  import { getList } from "@/models/users";

  export default {
    data() {
      return{
        list: []
      }
    },
    async created(){
        this.list = await getList(); 
    },
    components: {
      HomeDisplay, UserDisplay
    }

  }

</script>

<style>

 #homebox{
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

