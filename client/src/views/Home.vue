<template>

  <div class="home" id="homebox" >

    <article class="message is-link" id="sub-box" >
  
      <div class="message-header">
        <p>User</p>
      </div>

      <div class="message-body">

        <div class="card">

        <div class="card-content">

           <div class="media">
           <div class="media-left">
          <figure class="image is-48x48">
          <img :src="session.user.image">
          </figure>
          </div>
          <div class="media-content">
           <p class="title is-4">{{session.user.name}}</p>
           <p class="subtitle is-6">@{{session.user.user}}</p>
          </div>
         </div>

         <div class="content">

          </div>

            <strong>Exercise #1</strong>
            <h3>Type: <i>Cardiovascular</i></h3>
            <progress class="progress is-primary" value="15" max="100">15%</progress>

            <strong>Exercise #2</strong>
            <h3>Type: <i>Weightlifting</i></h3>
            <progress class="progress is-link" value="30" max="100">30%</progress>

            <strong>Exercise #3</strong>
            <h3>Type: <i>Hybrid Method</i></h3>
            <progress class="progress is-info" value="45" max="100">45%</progress>

            <strong>Exercise #4</strong>
            <h3>Type: <i>Other</i></h3>
            <progress class="progress is-success" value="60" max="100">60%</progress>

            <strong>Exercise #5</strong>
            <h3>Type: <i>Weightlifting</i></h3>
            <progress class="progress is-warning" value="75" max="100">75%</progress>

            <strong>Exercise #6</strong>
            <h3>Type: <i>Cardiovascular</i></h3>
            <progress class="progress is-danger" value="90" max="100">90%</progress>          

        </div>

        </div>   

      </div>

    </article>

  </div>

</template>

<script>

  import session from "@/models/session";


export default {
    data: ()=> ({
        session
  })

}
</script>

<style>

 #homebox{
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

