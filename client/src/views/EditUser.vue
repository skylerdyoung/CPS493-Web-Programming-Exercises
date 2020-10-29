<template>
   <div class="edituser" id="edituserbox">
      
    <article class="message is-link" id="sub-box" >
  
        <div class="message-header">
            Edit User
        </div>

        <div class="message-body">

          <div class="media-left" style="padding-bottom: 20px;">
          <figure class="image is-48x48">
          <img :src="users.userList[session.miscVar].image">
          </figure>
          </div>

          <p class="paragraph is-6" style="text-align: left;">User: {{users.userList[session.miscVar].user}}</p>

          <div class="field">
            <p class="control has-icons-left">
            <input class="input" type="username" id="username" placeholder="Edit Username">
              <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
              </span>
            </p>
          </div>
           
           <p class="paragraph is-6" style="text-align: left;">Name: {{users.userList[session.miscVar].name}}</p>

           <div class="field">
            <p class="control has-icons-left">
            <input class="input" type="fname" id="name" placeholder="Edit Name">
              <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
              </span>
            </p>
          </div>

          <p class="paragraph is-6" style="text-align: left;">Email: {{users.userList[session.miscVar].email}}</p>

           <div class="field">
            <p class="control has-icons-left">
            <input class="input" type="email" id="email" placeholder="Edit Email Address">
              <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
              </span>
            </p>
          </div>

          <p class="paragraph is-6" style="text-align: left;">Password: {{users.userList[session.miscVar].password}}</p>

          <div class="field">
            <p class="control has-icons-left">
            <input class="input" type="password" id="password" placeholder="Edit Password">
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
    import users from '@/models/users'

    export default {
    data() {
      return{
        users,session
      }
    },
    methods:{
        editInfo(){
            if(document.getElementById('username').value != ""){
                users.userList[session.miscVar].user = document.getElementById('username').value;
            }

            if(document.getElementById('name').value != ""){
                users.userList[session.miscVar].name = document.getElementById('name').value;
            }

            if(document.getElementById('email').value != ""){
                users.userList[session.miscVar].email = document.getElementById('email').value;
            }

            if(document.getElementById('password').value != ""){
                users.userList[session.miscVar].password = document.getElementById('password').value;
            }
        },
        adminRemoteLogin(){
            session.user = null;

            session.user = {
                user: users.userList[session.miscVar].user,  
                name: users.userList[session.miscVar].name,
                email: users.userList[session.miscVar].email,
                password: users.userList[session.miscVar].password,
                image: users.userList[session.miscVar].image,
                exercises: users.userList[session.miscVar].exercises
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