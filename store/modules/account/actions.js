export const login = async function ({ commit }, { usernameOrEmail, password, remember }) {
    const router = this.app.router;
    console.log(this);
    try {
        const res = await this.$axios.$post('/login', { usernameOrEmail, password, remember });
        commit('setUser', res);
        router.replace({ name: 'index' });
    }
    catch (err) {
        throw err;
    }
};


export const logout = async function ({ commit }) {
    const router = this.app.router;

    await this.$axios.$post('/logout');

    commit('setUser', null);
    router.replace({ name: 'index' });
};
