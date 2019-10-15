import * as types from './actionTypes'

export const removeFeature = item => {
    // dispatch an action here to remove an item
    return { type: types.REMOVE_ITEM, payload: item }
  };

export function buyItem(item){
    // dipsatch an action here to add an item
    return { type: types.ADD_ITEM, payload: item};
  }; 