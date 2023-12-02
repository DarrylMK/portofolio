import "./Button.css";

const Button = ({ text, color, handleClick }) => {
    return <button onClick={handleClick} style={{ '--button-color': color }}>{text}</button>;
  };  

export default Button;
