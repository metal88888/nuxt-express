<template>
    <div class="wrapper">

        <Navbar />

        <div class="content-wrapper d-flex flex-column">
            <b-container class="flex-grow">
               <nuxt />
            </b-container>

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
    import Navbar from '~/components/Navbar';

    export default {
        components: {
            MyFooter,
            Navbar
        }
    }
</script>
