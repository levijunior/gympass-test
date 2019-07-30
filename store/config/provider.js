import React, { useReducer } from "react"
import Context from "./config"
import middleware from "./middleware"
import repoReducer, { repoStore } from "../repos"
import commitReducer, { commitStore } from "../commits"

const Store = props => {
  const [repoState, repoDispatch] = useReducer( repoReducer, repoStore );
  const [commitState, commitDispatch] = useReducer( commitReducer, commitStore );

  const trigglerDispatchs = action => {
    const dispatchs = [repoDispatch, commitDispatch];
    for (let i = 0; i < dispatchs.length; i++) {
      dispatchs[i](action);
    }
  };

  const middlewareContrutor = action => {
    middleware(action)(trigglerDispatchs);
  };

  const combinedReducers = {
    store: {
      ...repoState,
      ...commitState
    },
    dispatch: middlewareContrutor
  };

  console.log(combinedReducers)
  return (
    <Context.Provider value={combinedReducers}>
      {props.children}
    </Context.Provider>
  );
};

export default Store;