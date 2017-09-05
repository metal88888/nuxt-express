<template>
  <section class="container">
   
    <h1 class="title">
      USERS
    </h1>

    <h2>{{$store.state.user}}</h2>

    <b-btn variant="primary">Click</b-btn>

    <ul class="users">
      <li v-for="(user, index) in users" :key="index" class="user">
        <nuxt-link :to="{ name: 'id', params: { id: user.id }}">
          {{ user.username }}
        </nuxt-link>
      </li>
    </ul>

  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let res = await axios.get('/api/users');
    return { users: res.data }
  },
  head () {
    return {
      title: 'Users'
    }
  }
}
</script>
