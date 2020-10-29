<template>
  <div class="adduser" id="adduserbox">

      
    <article class="message is-link" id="sub-box" >
  
        <div class="message-header">
          Add User
        </div>

        <div class="message-body">

          <div class="field">
            <p class="control has-icons-left">
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
  methods:{
    signup(){

        var checkUsername= false;

        for (var i = 0; i < users.userList.length; i++) {
            if ( ( users.userList[i].user) == document.getElementById('username').value )
            {
              checkUsername = true;
            }
        }

        if((document.getElementById("username").value == "") ||
        (document.getElementById("fname").value == "") ||
        (document.getElementById("lname").value == "") ||
        (document.getElementById("email").value == "") ||
        (document.getElementById("password").value == "")) {
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