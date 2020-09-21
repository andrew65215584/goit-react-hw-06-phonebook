import {
  GET_FORM_VALUE,
  DELETE_CONTACT,
  GET_FILTER_VALUE,
  SET_FILTERED_ARR,
  SET_LOCAL_DATA,
  SET_NOTIFY,
  REMOVE_FILTERED_ARR,
} from './types';

import { createAction } from '@reduxjs/toolkit';

export const getFormValue = createAction(GET_FORM_VALUE);
export const deleteContact = createAction(DELETE_CONTACT);
export const getFilterValue = createAction(GET_FILTER_VALUE);
export const setFilteredArr = createAction(SET_FILTERED_ARR);
export const setLocalData = createAction(SET_LOCAL_DATA);
export const setNotify = createAction(SET_NOTIFY);
export const removeFilteredArr = createAction(REMOVE_FILTERED_ARR);
