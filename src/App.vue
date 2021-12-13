<template>
  <div class="container">

<!--    <p v-customDirective></p>-->
<!--    <p v-customDirective=" 'Hello global custom directive binding' "></p>-->
<!--    <p v-localCustomDirective></p>-->
<!--    <p v-localCustomDirective=" 'Hello local custom directive binding' "></p>-->

<!--    <comHeader>-->
<!--      <ul slot="navbarItem">-->
<!--        <li>Home</li>-->
<!--        <li>About</li>-->
<!--        <li>Contact</li>-->
<!--      </ul>-->
<!--      <p slot="txt">This is a paragraph </p>-->
<!--    </comHeader>-->
<!--    <comFooter newTitle="New Title of Footer" :cars="carNames" :surname="name" @updateName="name = $event "></comFooter>-->

<!--    dynamic component-->
    <button @click="activeComponent='home' ">Home</button>
    <button @click="activeComponent='about' ">About</button>
    <button @click="activeComponent='contact' ">Contact</button>
    <keep-alive>
      <component :is="activeComponent"></component>
    </keep-alive>

<!--    Transition -->
    <testTransition></testTransition>
<!--    Filters -->
    <demoFilter></demoFilter>

<!--    Mixin -->
    <admin></admin>

    <user></user>



  </div>
</template>

<script>

// import comHeader from './components/partial/header';

//Dynamic component
import home from './components/dynamicComponent/home';
import about from './components/dynamicComponent/about';
import contact from './components/dynamicComponent/contact';

//filters
import demoFilter from './components/filters/filters'

//Mixin
import admin from "./components/mixin/admin";
import user from "./components/mixin/user";


//transition
import testTransition from './components/transition/transition'

export default {
data(){
  return{
    // name: 'Nazmul',
    // carNames:['prado','lamborgini','bmw'],
    activeComponent: 'home'
  }
},
  // directives:{
  // 'localCustomDirective':{
  //     bind(el,binding){
  //       // el.innerText = 'Hello local custom directive'
  //       el.innerText = binding.value
  //     }
  //   }
  // },
  components:{
    // comHeader,
    home,
    about,
    contact,
    testTransition,
    demoFilter,
    admin,
    user

  }

}
</script>


<style>

</style>
