export const setSiteName = (state, sitename) => state.siteName = sitename;

export const setInfo = (state, info) => {
    state.info = Object.assign({}, state.info, info);
};