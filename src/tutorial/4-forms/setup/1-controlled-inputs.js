import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handle = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { firstName, email };
      setPeople((people) => {
        return [...people, person];
      });
      console.log(people.firstName);
    } else {
      alert("empty values");
    }
  };

  return (
    <>
      <form className="form" onSubmit={handle}>
        <div className="form-control">
          <label htmlFor="firstName">Name :</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email :</label>
          <input
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">add person</button>
      </form>
    </>
  );
};

export default ControlledInputs;
