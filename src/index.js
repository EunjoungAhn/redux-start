import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import {addTodo} from './redux/actions';

//스토어의 변경사항을 구독한다.
store.subscribe(() => {
  console.log(store.getState());
});

//구독을 만들어 주었으니 주석처리 하자.
//console.log(store);
//console.log(store.getState());
store.dispatch(addTodo('coding'))
//console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();