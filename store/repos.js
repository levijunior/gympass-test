import { filterData } from '../helpers'

export let repoStore = {
  repositories: [],
  filter: {
    filterQuery: "",
    filterRepos: []
  }
};

//actions
export const getRepositories = repositories => {
  return {
    type: REPOSITORIES,
    repositories
  };
};

export const filterRepositories = filterQuery => {
  return {
    type: FILTER,
    filterQuery
  };
};
  
//reducers
export const REPOSITORIES = "REPOSITORIES",
             FILTER = "FILTER"

const repoReducer = (repoStore, action) => {
  switch (action.type) {

    case REPOSITORIES:
      repoStore = {
        repositories: action.repositories,
        filter: {
          filterQuery: "",
          filterRepos: action.repositories
        }
      }

      case FILTER:
      repoStore = {
        ...repoStore,
        filter: {
          filterQuery: action.filterQuery || '',
          filterRepos: action.filterQuery ? filterData(action.filterQuery, repoStore.repositories) : repoStore.repositories
        }
      }
    default:
      return repoStore;
  }
};

export default repoReducer;