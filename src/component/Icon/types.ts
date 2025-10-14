import COLORS from "@/constants/COLORS";
import iconList from "./iconList";

export interface IconProps {
  name: keyof typeof iconList;
  color?: keyof typeof COLORS;
  size?: number;
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
}
