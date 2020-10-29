<template>

  <div class="home" id="homebox" >

    <article class="message is-link" id="sub-box" >
  
      <div class="message-header">
        <p>User</p>
      </div>

      <HomeDisplay />

    </article>

  </div>

</template>

<script>


  import HomeDisplay from "@/components/HomeDisplay";


export default {

  components: {
    HomeDisplay
  }

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

