import {
  FILTER_DATA_ACTION_STARTED,
  FILTER_DATA_ACTION_COMPLETED,
  FILTER_DATA_ACTION_FAILED,
} from './actionTypes';
import axios from 'axios';
const apiUrl = 'https://homework.mountbirch.com/api/products';

export const fetchProductsRequest = () => ({
  type: FILTER_DATA_ACTION_STARTED,
});

export const fetchProductsSuccess = (data) => ({
  type: FILTER_DATA_ACTION_COMPLETED,
  payload: data,
});

export const fetchProductsFailure = (error) => ({
  type: FILTER_DATA_ACTION_FAILED,
  payload: error,
});
export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(fetchProductsRequest());

    try {
      const response = await axios.get(apiUrl);
      dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
};