const ADD_TODO = "ADD_TODO";
//순수 자바스크립트로 action을 만들기만 하였다.
function addTodo(todo){
  return {
    type: ADD_TODO,
    todo, 
  };
}