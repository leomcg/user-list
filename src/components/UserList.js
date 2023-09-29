import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <div>
      {props.users.map((user) => {
        return (
          <p key={Math.random()}>
            {user.username}, Age: {user.userAge}
          </p>
        );
      })}
    </div>
  );
};

export default UserList;
