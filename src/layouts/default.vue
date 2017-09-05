<template>
  <div>
    <Navbar />
    <main>
      <nuxt/>
    </main>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~/components/Footer.vue'
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    MyFooter,
    Navbar
  }
}
</script>

<style scoped>
main {
  margin-top: 1rem;
}
</style>
