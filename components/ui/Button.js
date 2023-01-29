import ButtonStyle from "./Button.module.css";

const Button = ({ type, onClick, children, style }) => {
  return (
    <button
      type={type || "button"}
      className={`${ButtonStyle.button} ${style}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
