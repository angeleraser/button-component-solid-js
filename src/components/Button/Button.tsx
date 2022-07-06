import type { Component } from "solid-js";
import "./styles.css";

type ButtonProps = {
  color?: "default" | "primary" | "secondary" | "danger";
  disabled?: boolean;
  disableShadow?: boolean;
  endIcon?: string;
  size?: "sm" | "md" | "lg";
  startIcon?: string;
  variant?: "outline" | "text";
};

const getButtonClass = (suffix: string | undefined) => {
  return suffix ? `button--${suffix}` : "";
};

const _default: ButtonProps = {
  color: "default",
  disabled: false,
  disableShadow: false,
  endIcon: undefined,
  size: "md",
  startIcon: undefined,
  variant: undefined,
};

export const Button: Component<ButtonProps> = (props) => {
  const {
    color = _default.color,
    size = _default.size,
    disableShadow = _default.disableShadow,
    variant = _default.variant,
  } = props;

  const classList = {
    [getButtonClass(color)]: !!color,
    [getButtonClass(size)]: !!size,
    [getButtonClass("disable-shadow")]: !!disableShadow,
    [getButtonClass(variant)]: !!variant,
  };

  return (
    <button classList={classList} class="button">
      Button
    </button>
  );
};
