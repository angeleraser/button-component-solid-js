import type { Component, JSXElement } from "solid-js";
import "./styles.css";

type ButtonProps = {
  color?: "default" | "primary" | "secondary" | "danger";
  disabled?: boolean;
  disableShadow?: boolean;
  endIcon?: string;
  size?: "sm" | "md" | "lg";
  startIcon?: string;
  variant?: "outline" | "text";
  label?: string;
  children?: JSXElement;
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
    disabled = props.disabled,
  } = props;

  const classList = {
    [getButtonClass(color)]: !!color,
    [getButtonClass(size)]: !!size,
    [getButtonClass("disable-shadow")]: !!disableShadow,
    [getButtonClass("disabled")]: !!disabled,
    [getButtonClass(variant)]: !!variant,
  };

  return (
    <button classList={classList} class="button">
      {props.startIcon ? (
        <span class="button__icon--start button__icon">
          <span class="material-icons">{props.startIcon}</span>
        </span>
      ) : null}
      <span class="button__text">{props.label || props.children}</span>
      {props.endIcon ? (
        <span class="button__icon--end button__icon">
          <span class="material-icons">{props.endIcon}</span>
        </span>
      ) : null}
    </button>
  );
};
