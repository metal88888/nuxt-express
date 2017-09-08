import Vuex from 'vuex';
import Cookie from 'js-cookie';

import modules from './modules';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';
import state from './state';

const store = () => {
    return new Vuex.Store({
        modules,
        state,
        mutations,
        actions,
        getters,
    });
};

export default store;