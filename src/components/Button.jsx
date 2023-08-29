import styles from "./Button.module.css";
function Button({ type, children, onclick }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onclick}>
      {children}
    </button>
  );
}

export default Button;
