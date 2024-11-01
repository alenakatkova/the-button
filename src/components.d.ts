/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface TbButton {
        /**
          * Button label
         */
        "label": string;
    }
}
declare global {
    interface HTMLTbButtonElement extends Components.TbButton, HTMLStencilElement {
    }
    var HTMLTbButtonElement: {
        prototype: HTMLTbButtonElement;
        new (): HTMLTbButtonElement;
    };
    interface HTMLElementTagNameMap {
        "tb-button": HTMLTbButtonElement;
    }
}
declare namespace LocalJSX {
    interface TbButton {
        /**
          * Button label
         */
        "label"?: string;
    }
    interface IntrinsicElements {
        "tb-button": TbButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "tb-button": LocalJSX.TbButton & JSXBase.HTMLAttributes<HTMLTbButtonElement>;
        }
    }
}
