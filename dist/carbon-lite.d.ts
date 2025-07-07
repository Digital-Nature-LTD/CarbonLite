export default class CarbonLite {
    initialised: boolean;
    carbonLite: object | null;
    carbonLiteMessage: object | null;
    carbonLiteTimer: ReturnType<typeof setTimeout> | null;
    carbonLiteMessageTimer: ReturnType<typeof setTimeout> | null;
    config: object;
    configure(configuration: object): void;
    init(configuration?: object | null): void;
    generateStyles(): string;
    addEventListeners(): void;
    restartTimer(): void;
    userInteracted(): void;
    hideBackground(): void;
    hideMessage(): void;
    fadeOutMessage(): void;
    open(): void;
    createBackground(): void;
    createMessage(): void;
}
