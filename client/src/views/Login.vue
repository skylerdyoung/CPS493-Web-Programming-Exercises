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
    <input class="input" type="username" id="username" placeholder="Username">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password" id="password" placeholder="Password">
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
import users from "@/models/users";

export default {

  methods: {
        login(){

          var checkLogin = false;

          for (var i = 0; i < users.userList.length; i++) {
            if ( ( ( users.userList[i].user) == document.getElementById('username').value ) &&
             ( ( users.userList[i].password) == document.getElementById('password').value ) )
            {
              session.user = {
                user: users.userList[i].user,  
                name: users.userList[i].name,
                email: users.userList[i].email,
                password: users.userList[i].password,
                image: users.userList[i].image
              }
              session.addNotification('You are now logged in as: ' + session.user.user + '.', 'success')
              this.$router.push('/')
              checkLogin = true;
            }
          }

          if (checkLogin == false){
            alert('error: invalid credentials\n\n' + "(see models/users.js for admin; \notherwise, click Sign up to make a new account)");
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