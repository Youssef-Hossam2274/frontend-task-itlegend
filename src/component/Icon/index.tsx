import iconList from "./iconList";
import styles from "./styles.module.scss";
import { IconProps } from "./types";

export default function Icon({
  name,
  size = 20,
  width,
  height,
  color,
  className,
  onClick,
}: IconProps) {
  return (
    <img
      className={`${className} ${onClick ? styles.icon : ""}`}
      alt={name}
      src={iconList[name]}
      style={{
        height: height ?? size,
        width: width ?? size,
        color: color,
      }}
      onClick={onClick}
    />
  );
}
