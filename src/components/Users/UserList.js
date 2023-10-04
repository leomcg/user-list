import styles from "./UserList.module.css";
import Card from "../UI/Card";
const UserList = (props) => {
  return (
    <Card className={styles.users}>
      {props.users.length === 0 && <p>No users found!</p>}
      {props.users.length > 0 && (
        <div>
          <p>Users:</p>
          <ul>
            {props.users.map((user) => (
              <li key={user.id}>
                {user.username}: {user.userAge} years old
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
};

export default UserList;
