import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

/**
 * Button component for common interactions
 */
@Component({
    tag: 'n0f-button',
    styleUrl: 'n0f-button.scss',
})
export class Button {
    /**
     * The button type
     */
    @Prop() type: 'button' | 'submit' | 'reset' = 'button';

    /**
     * The button variant
     */
    @Prop() variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive' = 'primary';

    /**
     * Disables the button
     */
    @Prop() disabled: boolean = false;

    /**
     * Button size
     */
    @Prop() size: 'icon' | 'xs' | 'sm' | 'md' | 'lg' = 'md';

    /**
     * Emitted when the button is clicked
     */
    @Event() n0fClick: EventEmitter<MouseEvent>;

    private readonly handleClick = (event: MouseEvent) => {
        if (!this.disabled) {
            this.n0fClick.emit(event);
        }
    };

    render() {
        return (
            <button
                type={this.type}
                class={{
                    'n0f-button': true,
                    [`n0f-button--${this.variant}`]: true,
                    [`n0f-button--${this.size}`]: true,
                    'n0f-button--disabled': this.disabled,
                }}
                disabled={this.disabled}
                onClick={this.handleClick}
            >
                <slot></slot>
            </button>
        );
    }
} 