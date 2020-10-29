<template>
  <div class="card">
            <div class="card">
            <div class="card-content">

            <strong>{{exercise.title}}</strong>
            <h3>Type: <i>{{exercise.type}}</i></h3>
            <progress class="progress is-primary" :value="exercise.progress" max="100"></progress>

            </div>
            </div>
  </div>
</template>

<script>
    

export default {
    props: {
    exercise: Object,
    i: Number
  },
}
</script>

<style>

</style>