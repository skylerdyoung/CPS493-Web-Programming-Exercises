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
    <input class="input" type="username" placeholder="Enter a Username">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>

<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="email" placeholder="Enter a Valid Email Address">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>

<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Enter Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>

<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password-confirm" placeholder="Confirm Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>

<div class="field">
  <p class="control has-text-centered">
    <button class="button is-info">
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
export default {

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