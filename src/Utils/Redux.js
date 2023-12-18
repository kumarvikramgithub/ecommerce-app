import { createStore, combineReducers } from "redux";

import {CONSTANT} from './Constant';

const initailData = {
  products: {},
  cart: {},
  isDisplayCart: false,
  backupData: {},
  orders: {},
  user: {}
}
const appReducer = (state = initailData, action) => {
  switch (action.type) {
    case CONSTANT.reduxAction.storeProducts:
      return { ...state, products: action.data };

    case CONSTANT.reduxAction.toogleCart:
      const backup = state.products;
      state = {
        ...state,
        products: state.backupData,
        isDisplayCart: action.data,
        backupData: backup,
      };
      console.log("Backuped", state);
      return state;

    case CONSTANT.reduxAction.addProductToCart:
      state = {
        ...state,
        products: { ...state.products, [action.data.id]: action.data },
        cart: { ...state.cart, [action.data.id]: action.data },
      };
      console.log("state", state);
      return state;
    case CONSTANT.reduxAction.removeProductFromCart:
      console.log("clicked", action.data.id);
      delete state.cart[action.data.id];
      console.log(state.cart);
      return {
        ...state,
        cart: { ...state.cart },
      };
    case CONSTANT.reduxAction.updateProductQuantityInCart:
      return {
        ...state,
        products: { ...state.products, [action.data.id]: action.data },
        cart: { ...state.cart, [action.data.id]: action.data },
      };
    case CONSTANT.reduxAction.newOrder:
      return {
        ...state,
        cart: { },
        orders: action.data
      };
    default:
      return state;
  }
};
export const addProductInStore = (data)=> {
  return {
    type: CONSTANT.reduxAction.storeProducts,
    data,
  };
}

export const addProductToCart = (data) => {
  return {
    type: CONSTANT.reduxAction.addProductToCart,
    data,
  };
};

export const removeProductFromCart = (data) => {
  return {
    type: CONSTANT.reduxAction.removeProductFromCart,
    data,
  };
};

export const updateProductQuantityInCart = (data) => {
  return {
    type: CONSTANT.reduxAction.updateProductQuantityInCart,
    data,
  };
};

export const toggleCart = (payload) => {
  return {
    type: CONSTANT.reduxAction.toogleCart,
    data: payload
  };
}


const rootReducer = combineReducers({
  data: appReducer,
});
export const appStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(appStore.getState());