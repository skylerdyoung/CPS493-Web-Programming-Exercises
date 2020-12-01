<template>
   <div class="edituser" id="edituserbox">
      
    <article class="message is-link" id="sub-box" >
  
        <div class="message-header">
            Edit User
        </div>

        <div class="message-body">

          <div class="media-left" style="padding-bottom: 20px;">
          <figure class="image is-48x48">
          <img src="https://img.favpng.com/3/4/13/computer-icons-businessperson-illustration-royalty-free-user-png-favpng-aPV2xdBz8URLdbXPua700bAhv.jpg">
          </figure>
          </div>

          <p class="paragraph is-6" style="text-align: left;">User: {{this.list.UserName}}</p>

          <div class="field">
            <p class="control has-icons-left">
            <input class="input" type="username" v-model="username" placeholder="Edit Username">
              <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
              </span>
            </p>
          </div>
           
           <p class="paragraph is-6" style="text-align: left;">First Name: {{this.list.FirstName}} </p>

           <div class="field">
            <p class="control has-icons-left">
            <input class="input" type="fname" v-model="fname" placeholder="Edit First Name">
              <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
              </span>
            </p>
          </div>

          <p class="paragraph is-6" style="text-align: left;">Last Name: {{this.list.LastName}} </p>

           <div class="field">
            <p class="control has-icons-left">
            <input class="input" type="fname" v-model="lname" placeholder="Edit Last Name">
              <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
              </span>
            </p>
          </div>

          <p class="paragraph is-6" style="text-align: left;">Email: {{this.list.Email}} </p>

           <div class="field">
            <p class="control has-icons-left">
            <input class="input" type="email" v-model="email" placeholder="Edit Email Address">
              <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
              </span>
            </p>
          </div>

          <p class="paragraph is-6" style="text-align: left;">Password: {{this.list.Password}} </p>

          <div class="field">
            <p class="control has-icons-left">
            <input class="input" type="password" v-model="password" placeholder="Edit Password">
              <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>

          
        <div class="card">

        <div class="card-content">

              <button @click.prevent="adminRemoteLogin()" class="button is-danger">
                Log in to this user's account
              </button>

        </div>

        </div>   

        <footer class="card-footer">
            <p class="card-footer-item">
              <button @click.prevent="editInfo()" class="button is-info" >
                Submit
              </button>
            </p>
            <router-link to='/userspage' class="card-footer-item">
                Go Back
            </router-link>
        </footer>  

 
    </div>

    </article>

  </div>
</template>

<script>
    import session from '@/models/session'
    import { getUser } from '@/models/users'
    import { editUser } from '@/models/users'

    export default {
    data() {
      return{
        session,
        username: '',
        fname: '',
        lname: '',
        email: '',
        password: '',
        list: []
      }
    },
    async created(){
      this.list = await getUser(session.miscVar); 
    },
    methods:{
        editInfo(){
          var tempusername = this.list.UserName;
          var tempfirstname = this.list.FirstName;
          var templastname = this.list.LastName;
          var tempemail = this.list.Email;
          var temppassword = this.list.Password;

          if (this.username != ''){
            tempusername = this.username;
          }

          if (this.fname != ''){
            tempfirstname = this.fname;
          }

          if (this.lname != ''){
            templastname = this.lname;
          }

          if (this.email != ''){
            tempemail = this.email;
          }

           if (this.password != ''){
            temppassword = this.password;
          }

          editUser(this.list.id, tempusername, tempfirstname, templastname, tempemail, temppassword );
          session.addNotification('Successfully edited user: ' + this.username + '.', 'success');
          this.$router.push('userspage');


            
        },
        adminRemoteLogin(){
            session.user = null;

            session.user = {
                id: this.list.id,
                user: this.list.UserName,  
                fname: this.list.FirstName,
                lname: this.list.LastName,
                email: this.list.Email,
                password: this.list.Password,
                image: 'https://img.favpng.com/3/4/13/computer-icons-businessperson-illustration-royalty-free-user-png-favpng-aPV2xdBz8URLdbXPua700bAhv.jpg',
                exercises: []
            }
              session.addNotification('You are now logged in as: ' + session.user.user + '.', 'success')
              this.$router.push('/')
        }
    }
    }
</script>

<style>

#edituserbox{
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