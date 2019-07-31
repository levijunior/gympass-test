import { REPOSITORIES } from "../repos";
import { COMMITS } from "../commits";


const middleware = action => next => {
  if (action.type === REPOSITORIES) {
    // console.log(action);
  }
  if (action.type === COMMITS) {
    // console.log(action);
  }

  next(action);
};

export default middleware;