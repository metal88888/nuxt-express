export const nuxtServerInit = ({ commit }, { req }) => {

    const info = req.session.info;

    commit('setInfo', {
        siteName: info.siteName,
        siteDescription: info.siteDescription,
    });

    commit('account/setUser', info.user);

};
