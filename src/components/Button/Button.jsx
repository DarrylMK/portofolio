import "./Button.css";

const Button = ({ text, color, handleClick }) => {
    return <button className="button-1" onClick={handleClick} style={{ '--button-color': color }}>{text}</button>;
  };  

export default Button;
