<template>
  <div class="wrapper">

    <Navbar />

    <div class="wrapper d-flex flex-column">
      <section class="container-fluid flex-grow">
        <div class="row">

          <!-- Main content -->
          <div class="col-sm-8 col-md-9 col-lg-10 order-md-2 pt-2">
            <h2>Content.</h2> If you feel content, you're satisfied and happy. The content of a book, movie, or song is what it's about: the topic. This word has two main meanings. The first has to do with being pleased and satisfied (feeling content) or making someone
            else feel happy and at peace with things (contenting them). The other meaning has to do with subject matter: the content of a history class might be American history. The content of a math class might be geometry. As long as there's a topic
            or subject, there's content. Sssshhhh, no one cares.
          </div>

          <!-- Sidebar -->
          <div class="col-sm-4 col-md-3 col-lg-2 order-md-1 pt-3">

            <Sidebar_Posts />
            <Sidebar_Users />
            <Sidebar_System />

          </div>

        </div>
      </section>

      <footer class="bg-dark text-white mt-4">
        <div class="container-fluid py-3">
          <div class="row">
            <div class="col-md-3">
              <h5>Footer</h5></div>
            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
            <div class="col-md-3"></div>
          </div>
          <div class="row">
            <div class="col-md-6">I stay at the bottom of the viewport! <span class="small"><br>Unless the page content pushes me further.</span></div>
            <div class="col-md-3"></div>
            <div class="col-md-3 text-right small align-self-end">©2017 Brand, Inc.</div>
          </div>
        </div>
      </footer>

    </div>

  </div>
</template>

<script>
import MyFooter from '~/components/Footer.vue'
import Sidebar_Users from '~/components/admin/Sidebar_Users';
import Sidebar_Posts from '~/components/admin/Sidebar_Posts';
import Sidebar_System from '~/components/admin/Sidebar_System';
import Navbar from '~/components/Navbar';

export default {
    middleware: 'needLogin',
    components: {
        MyFooter,
        Sidebar_Users,
        Sidebar_Posts,
        Sidebar_System,
        Navbar
    }
}
</script>

<style scoped>
  .wrapper {
    padding: 0;
    height: calc(100vh - 57px);
  }
</style>
