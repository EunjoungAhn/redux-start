export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
//순수 자바스크립트로 action을 만들기만 하였다.

//{type: ADD_TODO, text: '할일'}
export function addTodo(text){
  return {
    type: ADD_TODO,
    text, 
  };
}

// {type: COMPLETE_TODO, index: 3}
export function completeTodo(index){
  return {
    type: COMPLETE_TODO,
    index,
  }
}

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETE = 'SHOW_COMPLETE';

export function showALl(){
  return {type: SHOW_ALL};
}

export function showComplete(){
  return {type: SHOW_COMPLETE};
}