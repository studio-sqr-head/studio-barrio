import { ButtonHTMLAttributes } from "react";

interface ButtonProps {
  variant: "contained" | "outlined" | "text";
  color: "primary" | "secondary" | "tertiary";
  size: "small" | "medium" | "large" | "xlarge";
  icon?: React.ReactNode;
  label: string;
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
  className?: string;
}

export const Button = ({
  variant = "contained",
  color = "primary",
  label,
  size = "medium",
  icon,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`rounded-md ${resolveVariantClassName(
        variant
      )} ${resolveSizeClassName(size)} ${resolveColorClassName(color)}
        ${resolveIconClassName(icon)}
       ${className}`}
      {...props}
    >
      {icon}
      {label}
    </button>
  );
};

const resolveIconClassName = (icon: ButtonProps["icon"]) => {
  return icon ? "flex items-center gap-2" : "";
};

const resolveColorClassName = (color: ButtonProps["color"]) => {
  switch (color) {
    case "primary":
      return "text-orange text-white";
    case "secondary":
      return "bg-secondary-500 text-white";
    case "tertiary":
      return "bg-tertiary-500 text-white";
  }
};

const resolveSizeClassName = (size: ButtonProps["size"]) => {
  switch (size) {
    case "small":
      return "text-sm px-2 py-1";
    case "medium":
      return "text-md px-4 py-2";
    case "large":
      return "text-lg px-6 py-3";
    case "xlarge":
      return "text-xl px-8 py-4";
  }
};
const resolveVariantClassName = (variant: ButtonProps["variant"]) => {
  switch (variant) {
    case "contained":
      return "bg-blue-500 text-white";
    case "outlined":
      return "border border-blue-500 text-blue-500";
    case "text":
      return "text-blue-500";
  }
};
