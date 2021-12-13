<template>
<div>
  <transition name="demo" enter-active-class="animate__animated animate__zoomIn" leave-active-class="animate__animated animate__zoomOut">
    <p v-if="seen" class="text-white bg-primary p-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, non.</p>
  </transition>
  <button @click="seen = !seen">Toogle</button>

</div>
</template>

<script>
export default {
  data(){
    return{
      seen: true
    }
  }
}
</script>

<style scoped>
.demo-enter{
  opacity: 0;
}
.demo-enter-active{
  transition: opacity 3s;
}
.demo-leave{

}
.demo-leave-active{
  opacity: 0;
  transition: all 3s;
}
</style>