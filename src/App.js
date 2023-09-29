import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const [userList, setUserList] = useState([]);
  //const userList = [];

  const onAddUser = (newUser) => {
    console.log("newUser: ", newUser);
    setUserList((prevState) => {
      return [...prevState, newUser];
    });
    //userList.push(newUser);
    console.log(userList);
  };

  return (
    <div>
      <AddUser onAddUser={onAddUser} />
      {userList.length ? (
        <UserList users={userList} />
      ) : (
        <p>No users added yet.</p>
      )}
    </div>
  );
}

export default App;
