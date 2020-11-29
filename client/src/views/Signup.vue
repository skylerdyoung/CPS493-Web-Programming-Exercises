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
    <input class="input" type="username" v-model="username" placeholder="Username">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
  </p>
</div>

<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="fname" v-model="fname" placeholder="First Name">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
  </p>
</div>

<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="lname" v-model="lname" placeholder="Last Name">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
  </p>
</div>

<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="email" v-model="email" placeholder="Email Address">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
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
  <p class="control has-icons-left">
    <input class="input" type="password" v-model="passwordconfirm" placeholder="Confirm Password">
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

  data() {
    return{
      username: "",
      fname: "",
      lname: "",
      email: "",
      password: "",
      passwordconfirm: "",
    }
  },
  methods: {

    signup(){

        var checkUsername= false;

        for (var i = 0; i < users.userList.length; i++) {
            if ( ( users.userList[i].user) == this.username )
            {
              checkUsername = true;
            }
        }

        if(this.password != this.passwordconfirm ){
          session.addNotification("Error: passwords do not match", 'danger');
        }
        else if((this.username == "") ||
        (this.fname == "") ||
        (this.lname == "") ||
        (this.email == "") ||
        (this.password == "") ||
        (this.passwordconfirm == "") 
        ){
          session.addNotification("Error: check inputs", 'danger');
        }
        else if(checkUsername == true){
          session.addNotification("Error: username is taken", 'danger');
        }
        else{
        
          users.addUser(this.username, this.fname + " " + this.lname,
          this.email, this.password, 
          "https://img.favpng.com/3/4/13/computer-icons-businessperson-illustration-royalty-free-user-png-favpng-aPV2xdBz8URLdbXPua700bAhv.jpg", [])

          session.addNotification('Successfuly created user: ' + this.username + '.', 'success')
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