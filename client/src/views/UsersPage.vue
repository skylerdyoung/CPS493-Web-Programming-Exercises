<template>
    <div class="userspage" id="userspagebox" >

    <article class="message is-link" id="sub-box-admin" >
  
      <div class="message-header">
        <p>Admin Panel</p>
      </div>

      <div class="message-body">

        <div class="card">

        <div class="card-content">

            <AdminDisplay v-for="(user,i) in users.userList" 
              :key="user"
              :user="user"
              :i="i" 
              />
              
          
        <footer class="card-footer">           
             <router-link to='/adduser' class="card-footer-item">
                + Add User
              </router-link>
        </footer>

        </div>

        </div>   

      </div>

    </article>

  </div>
</template>

<script>

  import users from "@/models/users";
  import AdminDisplay from "@/components/AdminDisplay"


  export default {
    data() {
      return{
        users
      }
    },
    components: {
      AdminDisplay
    }

  }
</script>

<style>

  #userspagebox{
    margin:auto;
    width: 90%;
    padding-top: 2.5%;
    padding-bottom: 2.5%;
    background-color: white;
  }

  #sub-box-admin{
    width: 50%;
    margin:auto;
    background-color: white;
  }


</style>