<template>
<div>
  <p>{{ name | upperCase | removeTxt }}</p>
</div>
</template>

<script>
export default {
  data(){
    return{
      name: 'Md Nazmul Hasan'
    }
  },
  filters: {
    upperCase(value){
     return value.toUpperCase();
    },
   removeTxt(value){
      return value.slice(2);
    }
  }
}
</script>

<style scoped>

</style>