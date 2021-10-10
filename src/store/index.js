import { createStore } from 'vuex';

export default createStore({
   state: {
      user: null,
   },
   getters: {
      getUser(state) {
         return state.user;
      },
   },
   mutations: {
      user(state, user) {
         state.user = user;
      },
   },
   actions: {},
   modules: {},
});
