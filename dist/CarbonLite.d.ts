import { CarbonLiteMessage } from './CarbonLiteMessage';
import { CarbonLiteElement } from './CarbonLiteElement';
import { CarbonLiteConfig } from './CarbonLiteConfig';
export default class CarbonLite {
    initialised: boolean;
    carbonLite: CarbonLiteElement;
    carbonLiteMessage: CarbonLiteMessage;
    carbonLiteTimer: ReturnType<typeof setTimeout> | undefined;
    carbonLiteMessageTimer: ReturnType<typeof setTimeout> | undefined;
    config: CarbonLiteConfig;
    configure(configuration: object): void;
    init(configuration?: CarbonLiteConfig | null): void;
    generateStyles(): string;
    addEventListeners(): void;
    restartTimer(): void;
    userInteracted(): void;
    hideBackground(): void;
    hideMessage(): void;
    fadeOutMessage(): void;
    open(): void;
}
