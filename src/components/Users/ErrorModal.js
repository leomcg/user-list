import styles from "./ErrorModal.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const ErrorModal = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.onCloseModal}>
      <div onClick={(event) => event.stopPropagation()}>
        <Card className={styles.modal}>
          <header className={styles.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={styles["modal-content"]}>
            <p className={styles.content}>{props.message}</p>
          </div>
          <footer className={styles.actions}>
            <Button onClick={props.onCloseModal}>Okay</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default ErrorModal;
