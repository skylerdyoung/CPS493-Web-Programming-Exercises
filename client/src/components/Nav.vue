<template>
  <nav class="navbar is-link" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">Home</router-link> 
      <router-link to="/about" class="navbar-item">About</router-link> 
      <router-link to="/exercises" class="navbar-item">Exercises</router-link> 
      <router-link to="/userspage" class="navbar-item">Admin</router-link> 
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/signup" v-if="session.user == null"  class="button is-info">
            <strong>Sign up</strong>
          </router-link>
          <router-link to='/login' v-if="session.user != null"  class='button is-light'>
            Log Out
          </router-link>
          <router-link to='/login' v-else class='button is-info'>
            <strong>Log In</strong>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>

  import session from '@/models/session'

  export default {


    data() {
      return{
        session
      }
    },
    methods: {

    },

  }


</script>

  

<style>

</style>