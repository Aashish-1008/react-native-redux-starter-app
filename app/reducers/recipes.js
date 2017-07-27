import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

let defaultCount = {
  count:5
};
export const searchedRecipes = createReducer(defaultCount, {
  [types.SET_SEARCHED_RECIPES](state, action) {
    let newState = {}
    // action.recipes.forEach( (recipe) => {
    //   let id = recipe.href
    //   newState[id] = Object.assign({}, recipe, { id });
    // });
    return newState;
  },[types.SET_TEST](state, action) {
    let newState = {};
    console.log("Old state..---",state);
    newState.count = action.count;
    console.log("new state...----",newState,state)
    return newState;
  }
});
