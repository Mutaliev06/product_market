import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { productsReducer } from "./products";
import { categoriesReducer } from './categories';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger({
  collapsed: true,
  diff: true,
});

export const store = createStore(
  combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
  }), composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
);
