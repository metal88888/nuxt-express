import ls from 'local-storage';

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
	ls.set('locale', locale);
	commit('setLocale', locale);
};
