import Icon from "../index";
import styles from "./styles.module.css";
import { IconProps } from "../types";

interface SocialAvatarProps {
  name: IconProps["name"];
  size?: number; // icon size
  avatarSize?: number; // outer circle size in px
  bg?: string; // optional background color (css color)
  className?: string;
  onClick?: () => void;
}

export default function SocialAvatar({
  name,
  size = 16,
  avatarSize = 40,
  bg,
  className,
  onClick,
}: SocialAvatarProps) {
  return (
    <div
      className={`${styles.avatar} ${className ?? ""}`}
      style={{ width: avatarSize, height: avatarSize, background: bg }}
      onClick={onClick}
    >
      <a href="#">
        <Icon name={name} size={size} />
      </a>
    </div>
  );
}
