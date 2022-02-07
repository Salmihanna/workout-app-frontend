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
  onClick?: () => {};
  buttenStyle?: string;
  buttenSize?: string;
  className?: string;
  to?: string;
  disabled?: boolean;
};

export const Button = ({
  children,
  type,
  onClick,
  buttenSize,
  buttenStyle,
  to,
  disabled,
}: ButtonProps) => {
  const checkButtonStyle = STYLES.includes(buttenStyle || "")
    ? buttenStyle
    : STYLES[0];
  const checkButtenSize = SIZES.includes(buttenSize || "")
    ? buttenSize
    : SIZES[0];

  return (
    <Link to={to || "/"} className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtenSize}`}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {children}
      </button>
    </Link>
  );
};
