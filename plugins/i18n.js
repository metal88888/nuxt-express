import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from "~/locales";
import Cookie from 'js-cookie';

Vue.use(VueI18n);

export default (ctx) => {
    const { app } = ctx;

	app.i18n = new VueI18n({
		locale: Cookie.get('locale') || 'en',
		fallbackLocale: 'en',
		messages,
	})
}