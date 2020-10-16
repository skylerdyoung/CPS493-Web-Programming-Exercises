<template>
     <div class="exercise" id="exercisebox" >

    <article class="message is-link" id="sub-box" >
  
      <div class="message-header">
        <p>Exercise Dashboard</p>
      </div>

      <div class="message-body">

        <div class="card">

        <div class="card-content">

            <div class="card">
            <div class="card-content">

            <strong>Exercise #1</strong>
            <h3>Type: <i>Cardiovascular</i></h3>
            <progress class="progress is-primary" value="15" max="100">15%</progress>

            <footer class="card-footer">
              <a href="#" class="card-footer-item">Modify</a>
              <a href="#" class="card-footer-item">Delete</a>
            </footer>

            </div>
            </div>

            <div class="card">
            <div class="card-content">

            <strong>Exercise #2</strong>
            <h3>Type: <i>Weightlifting</i></h3>
            <progress class="progress is-link" value="30" max="100">30%</progress>

            <footer class="card-footer">
              <a href="#" class="card-footer-item">Modify</a>
              <a href="#" class="card-footer-item">Delete</a>
            </footer>

            </div>
            </div>

            <div class="card">
            <div class="card-content">

            <strong>Exercise #3</strong>
            <h3>Type: <i>Hybrid Method</i></h3>
            <progress class="progress is-info" value="45" max="100">45%</progress>

            <footer class="card-footer">
              <a href="#" class="card-footer-item">Modify</a>
              <a href="#" class="card-footer-item">Delete</a>
            </footer>

            </div>
            </div>

            <div class="card">
            <div class="card-content">

            <strong>Exercise #4</strong>
            <h3>Type: <i>Other</i></h3>
            <progress class="progress is-success" value="60" max="100">60%</progress>

            <footer class="card-footer">
              <a href="#" class="card-footer-item">Modify</a>
              <a href="#" class="card-footer-item">Delete</a>
            </footer>

            </div>
            </div>

            <div class="card">
            <div class="card-content">

            <strong>Exercise #5</strong>
            <h3>Type: <i>Weightlifting</i></h3>
            <progress class="progress is-warning" value="75" max="100">75%</progress>

            <footer class="card-footer">
              <a href="#" class="card-footer-item">Modify</a>
              <a href="#" class="card-footer-item">Delete</a>
            </footer>

            </div>
            </div>

            <div class="card">
            <div class="card-content">

            <strong>Exercise #6</strong>
            <h3>Type: <i>Cardiovascular</i></h3>
            <progress class="progress is-danger" value="90" max="100">90%</progress>          

            <footer class="card-footer">
              <a href="#" class="card-footer-item">Modify</a>
              <a href="#" class="card-footer-item">Delete</a>
            </footer>

            </div>
            </div>

            <footer class="card-footer">
              <a href="addexercise" class="card-footer-item">+ Add Exercise</a>
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

  #exercisebox{
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