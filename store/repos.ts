import {
  ActionTree,
  MutationTree,
  ActionContext,
} from "vuex"
import axios from "axios"

export interface ReposState {
  data: any[];
  isReady: boolean;
};

export const state = (): ReposState => ({
  data: [],
  isReady: false,
});

export const actions: ActionTree<ReposState, any> = {
  async fetchData(context: ActionContext<ReposState, any>) {
    if (!context.state.isReady) {
      const { data } = await axios.get("https://api.github.com/users/fmatzy/repos")
      context.commit('reposLoaded', data);
    }
  },
};

export const mutations: MutationTree<ReposState> = {
  reposLoaded(state: ReposState, payload: any) {
    state.data = payload;
    state.isReady = true;
  },
};
