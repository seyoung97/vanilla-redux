import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;
//action의 타입을 스트링 말고 변수에 담아서 사용하면 오타 같은 실수를 방지할 수 있음
const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  console.log(count, action);
  //if문 보다 switch 문 쓰는게 훨씬 깔끔 간결
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};
countStore.subscribe(onChange);

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", () => countStore.dispatch({ type: ADD }));
minus.addEventListener("click", handleMinus);
