import { createContext } from "react";
import { repoStore } from "../repos";
import { commitStore } from "../commits";

export const initialState = {
  store: {
    ...repoStore,
    ...commitStore
  },
  dispatch: () => {}
};

const Context = createContext(initialState);

export default Context;