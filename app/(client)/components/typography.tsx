interface TypographyProps {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "overline"
    | "custom";
  children: React.ReactNode;
  color?: "primary" | "secondary" | "tertiary" | "orange" | "gray";
  className?: string;
  props?: React.HTMLAttributes<HTMLHeadingElement>;
}

export const Typography = ({
  variant,
  children,
  color = "primary",
  ...props
}: TypographyProps) => {
  return resolveTypographyComponent(variant, children, props, color);
};

const resolveTypographyComponent = (
  variant: TypographyProps["variant"],
  children: React.ReactNode,
  props: TypographyProps["props"],
  color: TypographyProps["color"]
) => {
  switch (variant) {
    case "h1":
      return (
        <h1
          {...props}
          className={`${
            props?.className ?? ""
          } text-2xl md:text-4xl font-bold text-${color}`}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          {...props}
          className={`${
            props?.className ?? ""
          } text-3xl md:text-4xl font-bold text-${color}`}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          {...props}
          className={`${
            props?.className ?? ""
          } text-2xl md:text-3xl font-bold text-${color}`}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          {...props}
          className={`${
            props?.className ?? ""
          } text-xl md:text-2xl font-bold text-${color}`}
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5
          {...props}
          className={`${
            props?.className ?? ""
          } text-lg md:text-xl font-bold text-${color}`}
        >
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6
          {...props}
          className={`${
            props?.className ?? ""
          } text-md md:text-lg font-bold text-${color}`}
        >
          {children}
        </h6>
      );
    case "subtitle1":
      return (
        <p
          {...props}
          className={`${
            props?.className ?? ""
          } text-md md:text-lg font-light text-${color}`}
        >
          {children}
        </p>
      );
    case "subtitle2":
      return (
        <p
          {...props}
          className={`${
            props?.className ?? ""
          } text-sm md:text-md font-light text-${color}`}
        >
          {children}
        </p>
      );
    case "body1":
      return (
        <p
          {...props}
          className={`${
            props?.className ?? ""
          } text-base md:text-lg font-normal text-${color}`}
        >
          {children}
        </p>
      );
    case "body2":
      return (
        <p
          {...props}
          className={`${
            props?.className ?? ""
          } text-sm md:text-base font-normal text-${color}`}
        >
          {children}
        </p>
      );
    case "caption":
      return (
        <p
          {...props}
          className={`${
            props?.className ?? ""
          } text-xs md:text-sm font-light text-${color}`}
        >
          {children}
        </p>
      );
    case "overline":
      return (
        <p
          {...props}
          className={`${
            props?.className ?? ""
          } text-xs md:text-sm font-bold text-${color}`}
        >
          {children}
        </p>
      );

    case "custom":
      return (
        <p {...props} className={`${props?.className ?? ""} text-${color}`}>
          {children}
        </p>
      );

    default:
      return (
        <p
          {...props}
          className={`${
            props?.className ?? ""
          } text-base md:text-lg font-normal text-${color}`}
        >
          {children}
        </p>
      );
  }
};
