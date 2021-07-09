import {
  ADD_VALUE_ONE_COUNTER,
  REMOVE_VALUE_0NE_COUNTER,
  INPUT_COUNTER_ADD,
  INPUT_COUNTER_REMOVE
 } from './actionTypes';

export const addValueCountOne = () => {
  return {
    type:ADD_VALUE_ONE_COUNTER,
  }
};

export const removeValueCountOne = () => {
  return {
    type:REMOVE_VALUE_0NE_COUNTER,
  }
};

export const getTypeActiveAddInputCount = (value) => {
  return {
    type:INPUT_COUNTER_ADD,
    payload:value,
  }
};

export const getTypeActiveRemoveInputCount = (value) => {
  return {
    type:INPUT_COUNTER_REMOVE,
    payload:value,
  }
};