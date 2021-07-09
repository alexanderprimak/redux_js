import {counterValue} from '../data';
import {
  ADD_VALUE_ONE_COUNTER,
  REMOVE_VALUE_0NE_COUNTER,
  INPUT_COUNTER_ADD,
  INPUT_COUNTER_REMOVE
} from './actionTypes';

let initialState = counterValue ;

export const counterReducer = (state = initialState, action) => {
  if(action.type === ADD_VALUE_ONE_COUNTER) {
    state++
    return state;

  } else if (action.type === REMOVE_VALUE_0NE_COUNTER) {
    state--
    return state;  

  } else if (action.type === INPUT_COUNTER_ADD) {
    return state = action.payload;
    
  } else if (action.type === INPUT_COUNTER_REMOVE) {
    return state = action.payload;
  }
  return state;
};
 