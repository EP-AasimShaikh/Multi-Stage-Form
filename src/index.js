import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import FinalPage from "./components/FinalPage";


window.arr=[];
window.percentage=0;



const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;



ReactDOM.render(
    <Provider store={store}>
      <App onSubmit={FinalPage} />
    </Provider>
  , document.querySelector('#root'));