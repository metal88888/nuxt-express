import Cookie from 'js-cookie';

export const nuxtServerInit = ({ commit }, { req }) => {

    const info = req.session.info;

    commit('setInfo', {
        siteName: info.siteName,
        siteDescription: info.siteDescription,
    });

    commit('account/setUser', info.user);
};

export function setLocale ({ commit }, locale) {
	this.app.i18n.locale = locale;
	Cookie.set('locale', locale);
	commit('setLocale', locale);
};
