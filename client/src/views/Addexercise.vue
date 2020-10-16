<template>
  <div class="addexercise" id="addexercisebox">

      
    <article class="message is-link" id="sub-box" >
  
      <div class="message-header">
        <p>Add Exercise</p>
      </div>

      <div class="message-body">

        <div class="card">

        <div class="card-content">

        <h4>Exercise Title:</h4>

        <input class="input" type="text" placeholder="Enter a Title">

        <br><br>

        <h4>Type of Exercise:</h4>

<div class="dropdown is-active">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>Select Exercise Type</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu" role="menu">
    <div class="dropdown-content">
      <a href="#" class="dropdown-item">
        Cardiovascular
      </a>
      <a class="dropdown-item">
        Weightlifting
      </a>
      <a href="#" class="dropdown-item is-active">
        Hybrid Method
      </a>
      <a href="#" class="dropdown-item">
        Other
      </a>
    </div>
  </div>
</div>


        <footer class="card-footer">
              <a href="exercises" class="card-footer-item">Submit</a>
            <a href="exercises" class="card-footer-item">Cancel</a>
        </footer>  

        </div>   

        </div>

      </div>
      

    </article>

  </div>
</template>

<script>
export default {

}
</script>

<style>

#addexercisebox{
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