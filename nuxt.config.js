const { resolve } = require('path');

module.exports = {
  loading: {
      color: 'purple'
  },
  head: {
    title: 'starter',
  	titleTemplate: process.env.SITE_NAME ? `%s - ${process.env.SITE_NAME}` : process.env.SITE_NAME ,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
    css: [
        { src: '~/assets/styles/main.styl', lang: "stylus" }
    ],
    modules: [
        "@nuxtjs/bootstrap-vue",
		"@nuxtjs/axios",
        "@nuxtjs/font-awesome"
    ],
    plugins: [
        { src: '~/plugins/i18n.js' }
    ],
    build: {
        //vendor: ['axios'],
        extend(config) {

            if (!config.resolve)
                config.resolve = {};

            config.resolve.alias = Object.assign({}, config.resolve.alias, {
                'lang': resolve(__dirname, 'lang'),
                'plugins': resolve(__dirname, 'plugins'),
            });
        }
  }
};
