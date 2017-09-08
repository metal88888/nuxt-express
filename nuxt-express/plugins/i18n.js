import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from "lang/index";
import Cookie from 'js-cookie';

Vue.use(VueI18n);

export default (ctx) => {
    const { app } = ctx;

    // Set i18n instance on app
    // This way we can use it in middleware and pages asyncData & fetch
    app.i18n = new VueI18n({
        locale: Cookie.get('lang') || 'en',
        messages,
    });
}