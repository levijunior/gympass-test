export const commitStore = {
  commits: {},
  filter: {
    filterQuery: "",
    filterCommits: []
  }
};
  
export const COMMITS = "COMMITS";

const commitReducer = (state = commitStore, action) => {
  switch (action.type) {
    case COMMITS:
      return {
        ...state,
        commits: action.commits
      };
    default:
      return state;
  }
};

export const getCommits = () => {
  return {
    type: COMMITS
  };
};


export default commitReducer;