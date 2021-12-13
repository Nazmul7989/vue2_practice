<template>
  <div>
    <slot name="txt"></slot>
    <h2>{{ header }}</h2>
    <slot name="navbarItem"></slot>
  </div>
</template>

<script>
export default {
  data(){
    return{
      header: 'Header'
    }
  }
}
</script>

<style scoped>

</style>