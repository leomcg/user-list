import { useState } from "react";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [userAge, setUserAge] = useState("");

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const onUserAgeChange = (event) => {
    setUserAge(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(username, userAge);
    props.onAddUser({ username, userAge });
    setUsername("");
    setUserAge("");
  };

  return (
    <div className={styles["add-user-container"]}>
      <form onSubmit={onSubmit}>
        <label htmlFor="usename">Username</label>
        <input
          type="text"
          id="username"
          onChange={onUsernameChange}
          value={username}
        />
        <label className={styles["user-age"]} htmlFor="user-age">
          User age (years)
        </label>
        <input
          type="text"
          id="user-age"
          onChange={onUserAgeChange}
          value={userAge}
        />
        <button className={styles.button} type="submit">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
