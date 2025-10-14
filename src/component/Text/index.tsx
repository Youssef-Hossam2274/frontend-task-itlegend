import { TextProps } from "./types";
import styles from "./Text.module.css";

export default function Text({
  children,
  text,
  className,
  color,
  variant,
  ...props
}: TextProps) {
  return (
    <p
      {...props}
      className={`${styles[variant]} ${className} ${styles.text} ${color}Color`}
    >
      {text ?? children}
    </p>
  );
}
