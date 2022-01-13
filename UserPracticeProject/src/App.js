import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addNewUserHandler = (user) => {
    setUsersList((previousState) => {
      return [...previousState, user];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addNewUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
