import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from "~/locales";
import ls from 'local-storage';

Vue.use(VueI18n);

export default (ctx) => {
    const { app, store } = ctx;

	let locale = ls.get('locale');

	if (!locale) {
		locale = 'en';
		ls.set('locale', 'en');
	}

	store.commit('setLocale', locale);


	app.i18n = new VueI18n({
		locale,
		fallbackLocale: 'en',
		messages,
	})
}