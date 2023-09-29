import styles from "./ErrorModal.module.css";

const ErrorModal = () => {
  return (
    <div id="errorModal" className={styles.modal}>
      <div className={styles["modal-content"]}>
        <span className={styles.close} id="closeModal">
          &times;
        </span>
        <h2>Error Message</h2>
        <p>There was an error processing your request.</p>
      </div>
    </div>
  );
};

export default ErrorModal;
