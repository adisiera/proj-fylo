<template>
  <div class="home">
    <hero />
    <description />
    <about-fylo />
    <testimonials />
    <get-started />
  </div>
</template>

<script>
// @ is an alias to /src

import Hero from '@/components/Hero.vue'

import AboutFylo from '@/components/AboutFylo.vue'
import Description from '../components/Description.vue'
import Testimonials from '../components/Testimonials.vue'
import GetStarted from '../components/GetStarted.vue'


export default {
  name: 'Home',
  components: {
    
    Hero,
    Description,
    AboutFylo,
    Testimonials,
    GetStarted,
   
   
  }
}
</script>
