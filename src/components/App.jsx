import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function changeDetails(event) {
    const inputName = event.target.name;
    const newValue = event.target.value;
    console.log(inputName);

    setContact(prevValue => {
      console.log(prevValue);
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue,
          email: prevValue.email
        };
      } else {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: newValue
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onchange={changeDetails}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onchange={changeDetails}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onchange={changeDetails}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
