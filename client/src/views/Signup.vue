<template>
    <article class="message is-white" id="signupbox">

  <div class="message-body">

    <div class="card">

    <div class="card-content">

    <h4>Sign Up:</h4>

    <br>

    <div class="login" >
    <div class="field">

  <p class="control has-icons-left has-icons-right">
    <input class="input" type="username" id="username" placeholder="Username">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
  </p>
</div>

<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="fname" id="fname" placeholder="First Name">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
  </p>
</div>

<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="lname" id="lname" placeholder="Last Name">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
  </p>
</div>

<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="email" id="email" placeholder="Email Address">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
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
  <p class="control has-icons-left">
    <input class="input" type="password" id="password-confirm" placeholder="Confirm Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>

<div class="field">
  <p class="control has-text-centered">
    <button class="button is-info"  @click.prevent="signup">
      Sign Up
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
import users from "@/models/users";
import session from "@/models/session";

export default {

  methods: {

    signup(){

        var checkUsername= false;

        for (var i = 0; i < users.userList.length; i++) {
            if ( ( users.userList[i].user) == document.getElementById('username').value )
            {
              checkUsername = true;
            }
        }

        if(document.getElementById("password").value != document.getElementById("password-confirm").value ){
          session.addNotification("Error: passwords do not match", 'danger');
        }
        else if((document.getElementById("username").value == "") ||
        (document.getElementById("fname").value == "") ||
        (document.getElementById("lname").value == "") ||
        (document.getElementById("email").value == "") ||
        (document.getElementById("password").value == "") ||
        (document.getElementById("password-confirm").value == "") 
        ){
          session.addNotification("Error: check inputs", 'danger');
        }
        else if(checkUsername == true){
          session.addNotification("Error: username is taken", 'danger');
        }
        else{
        
          users.addUser(document.getElementById("username").value, document.getElementById("fname").value + " " + document.getElementById("lname").value,
          document.getElementById("email").value, document.getElementById("password").value, 
          "https://img.favpng.com/3/4/13/computer-icons-businessperson-illustration-royalty-free-user-png-favpng-aPV2xdBz8URLdbXPua700bAhv.jpg", [])

          session.addNotification('Successfuly created user: ' + document.getElementById("username").value + '.', 'success')
          this.$router.push('login')

        }

      }
  }
  
}
</script>

<style>

 #signupbox{
    margin:auto;
    width: 33.3%;
    padding-top: 2.5%;
    padding-bottom: 2.5%;
    background-color: white;
  }

</style>