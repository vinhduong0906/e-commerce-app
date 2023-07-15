/*-----------Validate input data of Sign up Form and Sign In Form-----------------*/
import React, { useReducer } from 'react';
const initialState = { value: '', isTouch: false };

const useInput = (validateValue) => {
  const inputReducer = (state, action) => {
    if (action.type === 'CHANGE') {
      return { value: action.value, isTouch: state.isTouch };
    }
    if (action.type === 'BLUR') {
      return { isTouch: true, value: state.value };
    }
    if (action.type === 'RESET') {
      return { value: '', isTouch: false };
    }
  };

  const [state, dispatch] = useReducer(inputReducer, initialState);
  const inputValid = validateValue(state.value);
  const hasError = !inputValid && state.isTouch;
  const inputChangeHandler = (event) => {
    console.log('change');
    dispatch({ type: 'CHANGE', value: event.target.value });
  };
  const inputBlurHandler = () => {
    console.log('blur');
    dispatch({ type: 'BLUR' });
  };
  const reset = () => {
    dispatch({ type: 'RESET' });
  };
  return {
    inputValue: state.value,
    hasError,
    inputValid: inputValid,
    inputBlurHandler,
    inputChangeHandler,
    reset,
  };
};
export default useInput;
