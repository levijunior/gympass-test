export const repoStore = {
  repositories: {},
  filter: {
    filterQuery: '',
    filterRepos: {}
  }
};
  

export const REPOSITORIES = "REPOSITORIES",
             FILTER = "FILTER"

const repoReducer = (state = repoStore, action) => {
  switch (action.type) {
    case REPOSITORIES:
      return {
        ...state,
        repositories: action.repos
      };
    case FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          filterQuery: action.filterQuery
        }
      };
    default:
      return state;
  }
};


export const getRepositories = () => {
  return {
    type: REPOSITORIES
  };
};

export const filterRepositories = filterQuery => {
  return {
    type: FILTER,
    filterQuery
  };
};


export default repoReducer;