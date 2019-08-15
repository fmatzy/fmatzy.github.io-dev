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
      let data: any[];
      try {
        ({ data } = await axios.get<any[]>("https://api.github.com/users/fmatzy/repos"));
      }
      catch (err) {
        data = [];
      }
      const exceptForked = data.filter(item => !item.fork);
      context.commit('reposLoaded', exceptForked);
    }
  },
};

export const mutations: MutationTree<ReposState> = {
  reposLoaded(state: ReposState, payload: any) {
    state.data = payload;
    state.isReady = true;
  },
};
