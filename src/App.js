import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const onAddUser = (userAdded) => {
    setUsers((prevState) => {
      return [...prevState, userAdded];
    });
  };

  return (
    <div>
      <AddUser onAddUser={onAddUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
