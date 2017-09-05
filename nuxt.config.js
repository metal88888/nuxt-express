module.exports = {
    loading: {
        color: 'purple',
    },
    head: {
        title: 'Nuxt Express Starter',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    css: ['~/assets/css/main.css'],
    modules: [
        '@nuxtjs/bootstrap-vue',
        '@nuxtjs/axios',
        '@nuxtjs/font-awesome',
    ]
};