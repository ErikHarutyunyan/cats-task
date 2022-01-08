import { createStore } from 'redux';

const store = createStore(
  function (state, action) {
    if (action.type === 'SET_CATEGORY') {
      return {
        ...state,
        currentCatsState: {
          ...state.currentCatsState,
          categoryData: [
            ...state.currentCatsState.categoryData,
            ...action.payload,
          ],
        },
      };
    }
    if (action.type === 'TAKE_ID') {
      if (action.payload === state.currentCatsState.id) {
        return state;
      }
      return {
        ...state,
        currentCatsState: {
          ...state.currentCatsState,
          id: parseInt(action.payload),
          page: 1,
          cats: [],
        },
      };
    }
    if (action.type === 'DATA_CHANGE') {
      return {
        ...state,
        currentCatsState: {
          ...state.currentCatsState,
          cats: [...state.currentCatsState.cats, ...action.payload],
        },
      };
    }
    if (action.type === 'DATA_RESET') {
      return {
        ...state,
        currentCatsState: {
          ...state.currentCatsState,
          id: null,
          limit: 10,
          page: 1,
          cats: [],
        },
      };
    }
    if (action.type === 'PAGE_CHANGE') {
      return {
        ...state,
        currentCatsState: {
          ...state.currentCatsState,
          page: state.currentCatsState.page + 1,
        },
      };
    }
    return state;
  },
  {
    currentCatsState: {
      categoryData: [],
      id: null,
      limit: 10,
      page: 1,
      cats: [],
    },
  }
);

export default store;
