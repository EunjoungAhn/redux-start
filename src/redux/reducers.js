import {ADD_TODO} from "./actions";
//state 모습을 구상
// ['a', 'b']; 배열로 되어 있을 것이다.

export function todoApp(previousState, action){
  //초기값을 설정해주는 부분
  // if(previousState === undefined){
  //   return [];
  // }

  if (action.type === ADD_TODO){
    return [...previousState, action.todo];
  }

  return previousState
}