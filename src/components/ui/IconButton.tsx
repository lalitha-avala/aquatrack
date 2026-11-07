import type { ButtonHTMLAttributes, ReactNode } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  children: ReactNode;
}

export function IconButton({
  label,
  className,
  type = "button",
  children,
  ...buttonProps
}: IconButtonProps) {
  const buttonClassName = ["aq-icon-button", className].filter(Boolean).join(" ");

  return (
    <button type={type} className={buttonClassName} {...buttonProps} aria-label={label}>
      {children}
    </button>
  );
}
