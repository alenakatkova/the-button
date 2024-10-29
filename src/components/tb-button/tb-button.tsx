import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'tb-button',
  styleUrl: 'tb-button.css',
  shadow: true,
})
export class TbButton {
  /**
   * Button label
   */
  @Prop() label: string

  render() {
    return (
      <Host><button>{this.label}</button></Host>
    );
  }
}
