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
import { registerUser } from "@/models/users";
import { getList } from "@/models/users";
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
      list : []
    }
  },
  async created(){
      this.list = await getList(); 
  },
  methods: {

    signup(){

        if(this.password != this.passwordconfirm ){
          session.addNotification("Error: Passwords do not match.", 'danger');
        }
        else if((this.username == "") ||
        (this.fname == "") ||
        (this.lname == "") ||
        (this.email == "") ||
        (this.password == "") ||
        (this.passwordconfirm == "") 
        ){
          session.addNotification("Error: Check inputs.", 'danger');
        }
        else{

          var checkEmail = false;
          var checkUser = false;

          for (var i = 0; i < this.list.length; i++) {
            if ( this.list[i].Email == this.email){
                
                checkEmail = true;

            }
            else if ( this.list[i].UserName == this.username){
              
              checkUser = true;

            }
          }

          if (checkEmail == true){

            session.addNotification('Error: An account associated with that email address already exists.', 'danger')

          }
          else if (checkUser == true){

            session.addNotification('Error: An account associated with that username already exists.', 'danger')

          }
          else{

            registerUser(this.username, this.fname, this.lname,
            this.email, this.password)

            session.addNotification('Successfully created user: ' + this.username + '.', 'success')
            this.$router.push('login')

          }

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