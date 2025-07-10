import { CarbonLiteMessage } from './elements/CarbonLiteMessage';
import { CarbonLiteElement } from './elements/CarbonLiteElement';
import { CarbonLiteConfig } from './config/CarbonLiteConfig';
export default class CarbonLite {
    initialised: boolean;
    carbonLite: CarbonLiteElement;
    carbonLiteMessage: CarbonLiteMessage;
    carbonLiteTimer: ReturnType<typeof setTimeout> | undefined;
    carbonLiteMessageTimer: ReturnType<typeof setTimeout> | undefined;
    config: CarbonLiteConfig;
    configure(configuration: object): void;
    debug(message: string): void;
    init(configuration?: CarbonLiteConfig | null): void;
    generateStyles(): string;
    getIframes(): HTMLIFrameElement[];
    addGlobalEventListener(eventType: string): void;
    addEventListeners(): void;
    addVideoEventListeners(): void;
    restartTimer(): void;
    userInteracted(): void;
    suspend(): void;
    resume(): void;
    hideBackground(): void;
    hideMessage(): void;
    fadeOutMessage(): void;
    open(): void;
}
