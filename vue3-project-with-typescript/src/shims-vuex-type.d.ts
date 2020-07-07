import 'vuex'

declare module 'vuex' {
  type Getters<S, G> = {
    [K in keyof G]: (
      state: S,
      getters: G,
      rootState: RootState,
      rootGetters: RootGetters
    ) => G[K]
  }

  type Mutations<S, M> = {
    [K in keyof M]: (state: S, payload: M[K]) => void
  }

  type ExCommit<M> = <T extends keyof M>(type: T, payload?: M[T]) => void
  type ExDispatch<A> = <T extends keyof A>(
    type: T,
    payload?: A[T]
  ) => Promise<any>
  type ExActionContext<S, A, G, M> = {
    dispatch: ExDispatch<A>
    commit: ExCommit<M>
    state: S
    getters: G
    rootState: RootState
    rootGetters: RootGetters
  }
  type Actions<S, A, G = {}, M = {}> = {
    [K in keyof A]: (
      ctx: ExActionContext<S, A, G, M>,
      payload: A[K]
    ) => Promise<any>
  }
}
