<template>
  <div class="card">
            <div class="card">
            <div class="card-content">

            <strong>{{exercise.Exercise_Title}}</strong>
            <h3>Type: <i>{{exercise.Exercise_Type}}</i></h3>
            <progress class="progress is-primary" :value="exercise.Exercise_Progress" max="100"></progress>

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