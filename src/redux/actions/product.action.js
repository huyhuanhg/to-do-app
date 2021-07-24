import { PRODUCT_ACTION } from '../constants';

export const createProductAction = (params) => {
  return {
    type: PRODUCT_ACTION.CREATE_PRODUCT,
    payload: params,
  };
}

export const editProductAction = (params) => {
  return {
    type: PRODUCT_ACTION.EDIT_PRODUCT,
    payload: params,
  };
}

export const deleteProductAction = (params) => {
  return {
    type: PRODUCT_ACTION.DELETE_PRODUCT,
    payload: params,
  };
}
