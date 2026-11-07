import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({
  variant = "primary",
  className,
  type = "button",
  ...buttonProps
}: ButtonProps) {
  const buttonClassName = ["aq-button", `aq-button--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return <button type={type} className={buttonClassName} {...buttonProps} />;
}
