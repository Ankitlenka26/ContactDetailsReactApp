import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function changeDetails(event) {
    const { name, value } = event.target;
    // console.log(inputName);

    setContact(prevValue => {
      console.log(prevValue);
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
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
          onChange={changeDetails}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={changeDetails}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={changeDetails}
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
