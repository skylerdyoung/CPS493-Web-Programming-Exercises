<template>
  <div class="adduser" id="adduserbox">

      
    <article class="message is-link" id="sub-box" >
  
        <div class="message-header">
          Add User
        </div>

        <div class="message-body">

      <div class="field">
  <p class="control has-icons-left">
    <input class="input" type="username" placeholder="@Username">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>


        <div class="field">
  <p class="control has-icons-left">
    <input class="input" type="fname" placeholder="First Name">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>

<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="lname" placeholder="Last Name">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>

<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="email" placeholder="Email Address">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>

<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Password">
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


        <footer class="card-footer">
              <a href="userspage" class="card-footer-item">Submit</a>
            <a href="userspage" class="card-footer-item">Cancel</a>
        </footer>  



 
    </div>

    </article>

  </div>
</template>

<script>
export default {

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