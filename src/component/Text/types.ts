import COLORS from "@/constants/COLORS";
import { HTMLAttributes, ReactNode } from "react";

type TextVariant =
  | "H1"
  | "H2"
  | "H3"
  | "H4"
  | "H5"
  | "H6"
  | "H7"
  | "P1"
  | "P2"
  | "P3"
  | "P4"
  | "P5"
  | "P6"
  | "P7"
  | "P8"
  | "P9"
  | "P10"
  | "P11"
  | "P12"
  | "P13"
  | "P14"
  | "P15"
  | "B1"
  | "B2"
  | "B3"
  | "L1"
  | "L2"
  | "L3"
  | "L4";

type TextContent =
  | { text: string; children?: never }
  | { text?: never; children: ReactNode };

type BaseProps = {
  variant: TextVariant;
  color?: keyof typeof COLORS;
};

export type TextProps = BaseProps &
  TextContent &
  HTMLAttributes<HTMLParagraphElement>;
