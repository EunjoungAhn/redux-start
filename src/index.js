import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import {addTodo, completeTodo, showComplete} from './redux/actions';

//스토어의 변경사항을 구독한다.
store.subscribe(() => {
  console.log(store.getState());
});

//구독을 만들어 주었으니 주석처리 하자.
//console.log(store);
store.dispatch(addTodo("할일"));
store.dispatch(completeTodo(0));
store.dispatch(showComplete());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();