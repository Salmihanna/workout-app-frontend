import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = [
  "btn--primary",
  "btn--outline",
  "btn--outline--black",
  "btn--primary--black",
];
const SIZES = ["btn--medium", "btn--large"];

type ButtonProps = {
  children?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  buttenStyle?: string;
  buttenSize?: string;
  className?: string;
  disabled?: boolean;
};

export const Button = ({
  children,
  type,
  onClick,
  buttenSize,
  buttenStyle,
  disabled,
}: ButtonProps) => {
  const checkButtonStyle = STYLES.includes(buttenStyle || "")
    ? buttenStyle
    : STYLES[0];
  const checkButtenSize = SIZES.includes(buttenSize || "")
    ? buttenSize
    : SIZES[0];

  return (
    <>
      {/* <Link to={to || "/"}> */}
      <button
        className={`btn ${checkButtonStyle} ${checkButtenSize}`}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {children}
      </button>
      {/* </Link> */}
    </>
  );
};
