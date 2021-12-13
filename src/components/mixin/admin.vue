<template>
  <div>
    <p>{{ name }}</p>
    <ul>
      <li v-for="car in cars" :key="car">
        {{ car }}
      </li>
    </ul>
  </div>
</template>

<script>


// import {demoMixin} from "@/components/mixin/mixin";

export default {
  data(){
    return{
      // name: 'This is admin name',
      // cars: ['prado','bmw','lamvorgini','pazero']
    }
  },
  mixins: ['demoMixin'],
}
</script>

<style scoped>

</style>