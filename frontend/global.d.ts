import * as Bootstrap from "bootstrap";

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare global {
  interface Window {
    bootstrap: typeof Bootstrap;
  }
}
