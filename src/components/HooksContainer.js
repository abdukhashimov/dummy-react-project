import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksContainer() {
  const numberOfCakes = useSelector((state) => {
    return state.numOfCakes;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of cakes - {numberOfCakes} </h2>
      <button
        onClick={() => {
          dispatch(buyCake());
        }}
      >
        Buy Cake
      </button>
    </div>
  );
}

export default HooksContainer;
