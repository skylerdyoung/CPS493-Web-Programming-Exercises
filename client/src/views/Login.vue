<template>

<article class="message is-white" id="loginbox">

  <div class="message-body">

    <div class="card">

    <div class="card-content">

    <h4>Log In:</h4>

    <br> 

    <div class="login" >
    <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="email" v-model="user" placeholder="Username / Email Address">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password" v-model="password" placeholder="Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-text-centered">
    <button class="button is-info" @click.prevent="login">
      Login
    </button>
  </p>
</div>
  </div>
  
    </div>
    </div>

</div>
</article>
  
</template>

<script>
import session from "@/models/session";
import { getList } from "@/models/users";

export default {

  data() {
    return{
      user: '',
      password: '',
      list : []
    }
  },
  async created(){
      this.list = await getList(); 
  },
  methods: {
    login(){

      var checkLogin = false;

      for (var i = 0; i < this.list.length; i++) {
          if ( (this.list[i].Password == this.password) && 
          (this.list[i].Email == this.user || this.list[i].UserName == this.user) ){
            session.user = null;

            session.user = {
              id: this.list[i].id,
              user: this.list[i].UserName,
              fname: this.list[i].FirstName,
              lname: this.list[i].LastName,
              email: this.list[i].Email,
              password: this.list[i].Password,
              image: 'https://img.favpng.com/3/4/13/computer-icons-businessperson-illustration-royalty-free-user-png-favpng-aPV2xdBz8URLdbXPua700bAhv.jpg',
              exercises: []
            }
            session.addNotification('You are now logged in as: ' + session.user.user + '.', 'success')
            this.$router.push('/')
            checkLogin = true;
          }
      }

      if (checkLogin == false){
        session.addNotification('Error: Invalid Credentials', 'danger')
      }

    }
  }

}

</script>

<style>

  #loginbox{
    margin:auto;
    width: 33.3%;
    padding-top: 2.5%;
    padding-bottom: 2.5%;
    background-color: white;
  }

</style>
