export interface CarbonLiteConfig {
    message?: string;
    timeout?: number;
    backgroundColour?: string;
    messageTimeout?: number;
    messageColour?: string;
    messageColourHover?: string;
    messageBorderColour?: string;
    messageDropShadowColour?: string;
    debug: boolean;
}
declare global {
    interface DocumentEventMap {
        'carbon-lite-open': CustomEvent;
        'carbon-lite-suspend': CustomEvent;
        'carbon-lite-resume': CustomEvent;
    }
}
