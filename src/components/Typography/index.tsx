import React, { ReactNode } from "react";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p1"
  | "p2"
  | "p3"
  | "p4"
  | "p5"
  | "p6"
  | "p7"
  | "p8"
  | "p9"
  | "p10"
  | "p11"
  | "p12"
  | "p13"
  | "p14"
  | "p15"
  | "caption1"
  | "caption2"
  | "button1"
  | "button2"
  | "buttonhome";

type Color =
  | "black-blue"
  | "black-new-blue"
  | "black-background-menu"
  | "base-grey-100"
  | "base-grey-95"
  | "base-grey-50"
  | "base-grey-70"
  | "grey-01"
  | "graphite"
  | "grey-stroke-line"
  | "light-grey"
  | "background-grey"
  | "white"
  | "dark-green"
  | "gradient-artel-official-01"
  | "gradient-artel-official-02"
  | "artel-mentol-new"
  | "main-gradient"
  | "inherit";

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  variant: Variant;
  color?: Color;
  className?: string;
  inlineElement?: boolean;
  customElement?: string;
}

const classNames = (...classes: string[]) => classes.filter(Boolean).join(" ");

const Typography = ({
  children,
  variant,
  color,
  inlineElement,
  className,
  customElement,
  ...props
}: Props) => {
  const typographyClasses = classNames(
    variant,
    className || "",
    (color && color) || ""
  );

  const tagMap: { [key in Variant]: string } = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    p1: "p",
    p2: "p",
    p3: "p",
    p4: "p",
    p5: "p",
    p6: "p",
    p7: "p",
    p8: "p",
    p9: "p",
    p10: "p",
    p11: "p",
    p12: "p",
    p13: "p",
    p14: "p",
    p15: "p",
    caption1: "span",
    caption2: "span",
    button1: "span",
    button2: "span",
    buttonhome: "span",
  };

  const Tag =
    customElement || (inlineElement ? "span" : tagMap[variant] || "p");

  return React.createElement(
    Tag,
    { className: typographyClasses, ...props },
    children
  );
};

export default Typography;
