import type { JSXElement } from "solid-js";
import "./styles.css";

interface ButtonPreviewProps {
  title: string;
  children: JSXElement;
}

const ButtonPreview = (props: ButtonPreviewProps) => {
  return (
    <div class="button-preview">
      <h2 class="button-preview__title">{props.title}</h2>
      {props.children}
    </div>
  );
};

export { ButtonPreview };
