import axios from "axios";
import { ActionContext, ActionTree, MutationTree } from "vuex";

export interface PostsState {
  data: any[];
  isReady: boolean;
};

export const state = (): PostsState => ({
  data: [],
  isReady: false,
});

export const actions: ActionTree<PostsState, any> = {
  async fetchData(context: ActionContext<PostsState, any>) {
    if (!context.state.isReady) {
      let data: any[];
      try {
        ({ data } = await axios.get<any[]>("https://qiita.com/api/v2/users/fmatzy/items?page=1&per_page=10"));
      }
      catch (err) {
        data = [];
      }
      context.commit('postsLoaded', data);
    }
  },
};

export const mutations: MutationTree<PostsState> = {
  postsLoaded(state: PostsState, payload: any) {
    state.data = payload;
    state.isReady = true;
  },
};
