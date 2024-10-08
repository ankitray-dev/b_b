import React from "react";

const shapes = {
  round: "rounded-[5px]",
  circle: "rounded-[50%]",
} as const;
const variants = {
  fill: {
    indigo_900_01: "bg-indigo-900_01 text-indigo-900_01",
    gray_300: "bg-gray-300",
    pink_300: "bg-pink-300 shadow-xs",
    white_A700: "bg-white-A700 text-pink-300",
    white_A700_3f: "bg-white-A700_3f text-white-A700",
    gray_300_01: "bg-gray-300_01",
    light_blue_50: "bg-light_blue-50",
    lime_50: "bg-lime-50",
    red_50: "bg-red-50",
    gray_600_01: "bg-gray-600_01",
    gray_200: "bg-gray-200 text-blue_gray-600",
    indigo_900_4f: "bg-indigo-900_4f",
  },
  outline: {
    indigo_200: "border-indigo-200 border-2 border-solid text-indigo-900_01",
  },
} as const;
const sizes = {
  "2xl": "h-[57px] px-[25px] text-lg",
  "3xl": "h-[62px] px-[29px] text-lg",
  sm: "h-[31px] px-3.5 text-lg",
  xs: "h-[28px] px-[13px] text-base",
  lg: "h-[45px] px-5 text-sm",
  "4xl": "h-[71px] px-[35px] text-2xl",
  "7xl": "h-[76px] px-[13px]",
  "5xl": "h-[72px] px-7 text-lg",
  md: "h-[39px] px-[17px] text-lg",
  xl: "h-[55px] px-3",
  "6xl": "h-[72px] px-[18px]",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "circle",
  variant = "fill",
  size = "6xl",
  color = "indigo_900_4f",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
