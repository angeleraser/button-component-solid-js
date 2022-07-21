import { Component, JSXElement } from "solid-js";
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
  onClick?: CallableFunction;
  ripple?: boolean;
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
  ripple: true,
};

const createRippleCircle = (
  xPos: number,
  yPos: number,
  size: number
): HTMLElement => {
  const spanEl: HTMLSpanElement = document.createElement("span");
  spanEl.classList.add("ripple");
  spanEl.style.top = `${yPos}px`;
  spanEl.style.left = `${xPos}px`;
  spanEl.style.width = `${size}px`;
  spanEl.style.height = `${size}px`;
  return spanEl;
};

const rippleEffect = (containerEl: HTMLSpanElement, event: MouseEvent) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;

  const {
    width,
    height,
  }: {
    width: number;
    height: number;
  } = containerEl.getBoundingClientRect();

  const ripple = createRippleCircle(xPos, yPos, Math.max(width, height));

  containerEl.appendChild(ripple);
  setTimeout(() => {
    containerEl.removeChild(ripple);
  }, 1000);
};

export const Button: Component<ButtonProps> = (props) => {
  const {
    color = _default.color,
    size = _default.size,
    disableShadow = _default.disableShadow,
    variant = _default.variant,
    disabled = _default.disabled,
    ripple = _default.ripple,
  } = props;

  const classList = {
    [getButtonClass(color)]: !!color,
    [getButtonClass(size)]: !!size,
    [getButtonClass("disable-shadow")]: !!disableShadow,
    [getButtonClass("disabled")]: !!disabled,
    [getButtonClass(variant)]: !!variant,
  };

  let btnRippleAreaRef: undefined | HTMLSpanElement;

  const handleClick = (
    event: MouseEvent & {
      currentTarget: HTMLButtonElement;
      target: Element;
    }
  ) => {
    if (btnRippleAreaRef && !disabled && ripple) {
      rippleEffect(btnRippleAreaRef, event);
    }

    if (props.onClick) props.onClick();
  };

  return (
    <button onClick={handleClick} classList={classList} class="button">
      {props.startIcon ? (
        <span
          aria-label="button left icon"
          class="button__icon--start button__icon"
        >
          <span class="material-icons">{props.startIcon}</span>
        </span>
      ) : null}

      <span aria-label="button text" class="button__text">
        {props.label || props.children}
      </span>

      {props.endIcon ? (
        <span
          aria-label="button right icon"
          class="button__icon--end button__icon"
        >
          <span class="material-icons">{props.endIcon}</span>
        </span>
      ) : null}

      <span ref={btnRippleAreaRef} class="button-ripple-area"></span>
    </button>
  );
};
