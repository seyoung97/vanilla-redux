import React, { useState } from "react";
import { connect } from "react-redux";

const Home = ({ toDos }) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>Add</button>
      </form>
      <ul>
        <li>{toDos}</li>
      </ul>
    </>
  );
};

function getCurrentState(state, ownProps) {
  return { toDos: state };
}

export default connect(getCurrentState)(Home);
