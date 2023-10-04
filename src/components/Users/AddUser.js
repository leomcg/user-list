import { useState } from "react";

import Card from "../UI/Card";

import styles from "./AddUser.module.css";

const addUserHandler = (event) => {
  event.preventDefault();
};

const AddUser = (props) => {
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
