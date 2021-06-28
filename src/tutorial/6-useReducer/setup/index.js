import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import { useEffect } from "react/cjs/react.development";
// reducer function

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payLoad];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item added",
    };
  }
  return state;
};
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "Im Modal",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payLoad: newItem });
    } else {
      return state;
    }
  };
  return (
    <>
      {state.isModalOpen && <Modal modelContent={state.modalContent} />}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Add person</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h3>{person.name}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Index;
