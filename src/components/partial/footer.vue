<template>
  <div>
    <h2>{{ footer }}</h2>
    <h3>{{ newTitle }}</h3>
    <ul>
      <li v-for="car in cars" :key="car">
        {{ car }}
      </li>
    </ul>
    <p>{{ surname }}</p>
    <button @click="updateName">Change Surname</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      footer: "Footer"
    }
  },
  props: {
    cars:{
      type: Array,
      require: true
    },
    surname: {
      type: String,
      require: true
    },
    newTitle : {
      type: String
    }
  },
  methods:{
    updateName(){
      this.$emit('updateName','Mizanur')
    }
  }
}
</script>

<style scoped>

</style>