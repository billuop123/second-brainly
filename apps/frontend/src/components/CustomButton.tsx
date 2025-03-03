import { ReactElement } from "react";
import { Button } from "./ui/button";
interface ButtonProps {
  variant?: "default" | "secondary" | "destructive";
  children: string;
  startIcon?: ReactElement;
  onClick?: () => void;
}
export function CustomButton({
  variant = "default",
  children,
  startIcon,
  onClick,
}: ButtonProps) {
  return (
    <Button variant={variant} onClick={onClick}>
      {startIcon}
      {children}
    </Button>
  );
}
