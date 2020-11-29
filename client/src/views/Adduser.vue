<template>
  <div class="adduser" id="adduserbox">
      
    <article class="message is-link" id="sub-box" >
  
        <div class="message-header">
          Add User
        </div>

        <div class="message-body">

          <div class="field">
            <p class="control has-icons-left">
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

        <footer class="card-footer">
            <p class="card-footer-item">
              <button class="button is-info" @click.prevent="signup">
                Sign Up
              </button>
            </p>
            <router-link to='/userspage' class="card-footer-item">
                Cancel
            </router-link>
        </footer>  

 
    </div>

    </article>

  </div>
</template>

<script>
import users from "@/models/users";
import session from "@/models/session";

export default {
  data() {
    return{
      username:'',
      fname: '',
      lname: '',
      email: '',
      password: ''
    }
  },
  methods:{
    signup(){

        var checkUsername= false;

        for (var i = 0; i < users.userList.length; i++) {
            if ( ( users.userList[i].user) == this.username )
            {
              checkUsername = true;
            }
        }

        if((this.username == "") ||
        (this.fname == "") ||
        (this.lname == "") ||
        (this.email == "") ||
        (this.password == "")) {
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
          this.$router.push('userspage')

        }

      }
    }
  }

</script>

<style>

#adduserbox{
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