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
import { registerUser } from "@/models/users";
import { getList } from "@/models/users";
import session from "@/models/session";

export default {
  data() {
    return{
      username:'',
      fname: '',
      lname: '',
      email: '',
      password: '',
      list: []
    }
  },
  async created(){
      this.list = await getList(); 
  },
  methods:{
    
      signup(){

        if((this.username == "") ||
        (this.fname == "") ||
        (this.lname == "") ||
        (this.email == "") ||
        (this.password == "") 
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
            this.$router.push('userspage')

          }

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