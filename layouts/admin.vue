<template>
    <div class="wrapper">

        <Navbar/>

        <div class="content-wrapper d-flex flex-column">

            <b-container class="flex-grow">
                <b-row>
                    <div class="col-md-9 order-md-2 pt-2">
                        <nuxt />
                    </div>
                    <div class="col-md-3 order-md-1 pt-3">
                        <div class="bg-faded mb-3">
                            <h5 class="card-header">List of things</h5>
                            <div class="card-body">
                                <h6>Ain't nobody got time for:</h6> 1. That
                            </div>
                        </div>
                    </div>
                </b-row>
            </b-container>

           <my-footer />

        </div>

    </div>
</template>

<script>
    import Navbar from '~/components/Navbar';
    import Footer from '~/components/Footer';
    import Sidebar_Users from '~/components/admin/Sidebar_Users';
    import Sidebar_Posts from '~/components/admin/Sidebar_Posts';
    import Sidebar_System from '~/components/admin/Sidebar_System';

    export default {
        middleware: 'needLogin',
        components: {
            Navbar,
            Sidebar_Users,
            Sidebar_Posts,
            Sidebar_System,
            MyFooter: Footer,
        }
    }
</script>