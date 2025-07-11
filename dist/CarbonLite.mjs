import { CarbonLiteMessage } from './elements/CarbonLiteMessage.mjs';
import { CarbonLiteElement } from './elements/CarbonLiteElement.mjs';

class CarbonLite {
    constructor() {
        this.initialised = false;
        this.ignoreInteractions = false;
        // objects
        this.carbonLite = new CarbonLiteElement();
        this.carbonLiteMessage = new CarbonLiteMessage();
        this.carbonLiteTimer = undefined;
        this.carbonLiteMessageTimer = undefined;
        // configurable
        this.config = {
            message: 'CarbonLite is reducing the carbon usage of this site, one (dark) pixel at a time',
            timeout: 60000,
            backgroundColour: '#000',
            messageTimeout: 3000,
            messageColour: '#254137',
            messageColourHover: '#7DF799',
            messageBorderColour: '#7DF799',
            messageDropShadowColour: '#254137',
            debug: false
        };
    }
    configure(configuration) {
        this.config = { ...this.config, ...configuration };
    }
    debug(message) {
        if (this.config.debug) {
            console.log(`CarbonLite: ${message}`);
        }
    }
    init(configuration = null) {
        this.debug('initialising');
        if (this.initialised) {
            return;
        }
        if (configuration) {
            this.configure(configuration);
        }
        if (this.config.message) {
            this.carbonLite.configure(this.config.message);
        }
        // add styles
        const style = document.createElement('style');
        style.innerHTML = this.generateStyles();
        document.head.appendChild(style);
        this.addEventListeners();
        this.restartTimer();
        this.initialised = true;
    }
    generateStyles() {
        return `
        carbon-lite {
            position: fixed;
            bottom: 0;
            right: 0;
            top: 0;
            left: 0;
            color: ${this.config.messageColour};
            z-index: 2147483646;
            background: ${this.config.backgroundColour};
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        carbon-lite-message {
            position: fixed;
            bottom: 100px;
            right: 100px;
            color: ${this.config.messageColour};
            text-align: center;
            z-index: 2147483647;
            opacity: 0.8;
            transition: opacity ${this.config.messageTimeout}ms ease-in;
            
            a {
                color: ${this.config.messageColour};
                background: ${this.config.backgroundColour};
                padding: 20px;
                display: block;
                text-decoration: none;
                border-radius: 20px;
                border: 3px solid ${this.config.backgroundColour};
                
                &:hover {
                    color: ${this.config.messageColourHover};
                    text-decoration: underline;
                    border-color: ${this.config.messageBorderColour};
                    filter: drop-shadow(0 0 0.75rem ${this.config.messageDropShadowColour});
                }
                
                svg {
                    height: 100px;
                    display: block;
                    margin: 0 auto 20px auto;
                }               
            }
            
            &.fading {
                opacity: 0;
                
                a {
                    border-color: ${this.config.messageBorderColour};
                    filter: drop-shadow(0 0 0.75rem ${this.config.messageDropShadowColour});
                }
            }
            
            &:hover {
                transition: opacity 0ms linear;
            }
        }
    `;
    }
    getIframes() {
        let iframes = document.getElementsByTagName(`iframe`);
        let iframesArray = [];
        for (let i = 0; i < iframes.length; i++) {
            iframesArray.push(iframes[i]);
        }
        return iframesArray;
    }
    addGlobalEventListener(eventType) {
        this.debug(`Adding listeners for event type ${eventType}`);
        let CarbonLite = this;
        let iframes = this.getIframes();
        iframes.forEach(iframe => {
            iframe.addEventListener(eventType, () => {
                CarbonLite.userInteracted();
            });
        });
        document.addEventListener(eventType, () => {
            CarbonLite.userInteracted();
        });
    }
    addEventListeners() {
        this.debug('adding event listeners');
        this.addGlobalEventListener('mousemove');
        this.addGlobalEventListener('click');
        this.addGlobalEventListener('scroll');
        this.addGlobalEventListener('keypress');
        this.addGlobalEventListener('resize');
        this.addVideoEventListeners();
        let CarbonLite = this;
        this.debug('adding message event listeners');
        CarbonLite.carbonLiteMessage.addEventListener(`mouseenter`, (event) => {
            CarbonLite.carbonLiteMessage.classList.remove('fading');
            if (CarbonLite.carbonLiteMessageTimer) {
                this.debug('clearing message fade out timer due to mouseenter');
                clearTimeout(CarbonLite.carbonLiteMessageTimer);
            }
        });
        CarbonLite.carbonLiteMessage.addEventListener(`mouseleave`, (event) => {
            CarbonLite.fadeOutMessage();
        });
        document.addEventListener('carbon-lite-suspend', function (event) {
            CarbonLite.suspend();
        });
        document.addEventListener('carbon-lite-resume', function (event) {
            CarbonLite.resume();
        });
        document.addEventListener('carbon-lite-open', (event) => {
            if (event.detail?.interactionDelay) {
                this.debug(`ignoring interactions for ${event.detail.interactionDelay} ms`);
                CarbonLite.ignoreInteractions = true;
                let originalMessage = this.config.message;
                if (event.detail.tempMessage) {
                    this.debug(`Adding a temporary message ${event.detail.tempMessage}`);
                    this.carbonLite.configure(event.detail.tempMessage);
                }
                setTimeout(() => {
                    this.debug('allowing interactions');
                    CarbonLite.ignoreInteractions = false;
                    if (originalMessage) {
                        this.carbonLite.configure(originalMessage);
                    }
                }, event.detail.interactionDelay);
            }
            CarbonLite.open();
        });
    }
    addVideoEventListeners() {
        this.debug('adding video event listeners');
        let CarbonLite = this;
        let videos = document.getElementsByTagName(`video`);
        for (let i = 0; i < videos.length; i++) {
            let videoEl = videos[i];
            videoEl.addEventListener(`playing`, () => {
                CarbonLite.debug('video playing');
                CarbonLite.suspend();
            });
            videoEl.addEventListener(`ended`, () => {
                CarbonLite.debug('video ended');
                CarbonLite.resume();
            });
            videoEl.addEventListener(`pause`, () => {
                CarbonLite.debug('video paused');
                CarbonLite.resume();
            });
        }
    }
    restartTimer() {
        clearTimeout(this.carbonLiteTimer);
        this.carbonLiteTimer = setTimeout(() => { this.open(); }, this.config.timeout);
    }
    userInteracted() {
        if (this.ignoreInteractions) {
            this.debug('ignoring interactions');
            return;
        }
        if (this.backgroundIsVisible()) {
            this.debug('user interacted - hiding');
            this.hideBackground();
        }
        else {
            this.debug('user interacted - restarting timer');
            this.restartTimer();
        }
    }
    suspend() {
        this.debug('suspending timer');
        if (this.backgroundIsVisible()) {
            document.body.removeChild(this.carbonLite);
        }
        if (this.messageIsVisible()) {
            document.body.removeChild(this.carbonLiteMessage);
        }
        clearTimeout(this.carbonLiteTimer);
        clearTimeout(this.carbonLiteMessageTimer);
    }
    backgroundIsVisible() {
        return this.carbonLite.parentNode === document.body;
    }
    messageIsVisible() {
        return this.carbonLiteMessage.parentNode === document.body;
    }
    resume() {
        this.debug('resuming timer');
        this.restartTimer();
    }
    hideBackground() {
        if (!this.carbonLite || !this.carbonLite.parentNode) {
            return;
        }
        document.body.removeChild(this.carbonLite);
        this.fadeOutMessage();
    }
    hideMessage() {
        let CarbonLite = this;
        if (!CarbonLite.carbonLiteMessage || !CarbonLite.carbonLiteMessage.parentNode) {
            return;
        }
        this.debug('hiding message');
        document.body.removeChild(CarbonLite.carbonLiteMessage);
        this.debug('clearing message fade out timer due to message being hidden');
        clearTimeout(CarbonLite.carbonLiteMessageTimer);
        CarbonLite.carbonLiteMessage.classList.remove('fading');
        this.debug('restarting timer after message has been hidden');
        CarbonLite.restartTimer();
    }
    fadeOutMessage() {
        this.debug('setting timer to fade out message');
        this.carbonLiteMessage.classList.add('fading');
        this.carbonLiteMessageTimer = setTimeout(() => { this.hideMessage(); }, this.config.messageTimeout);
    }
    open() {
        this.debug('opening');
        let CarbonLite = this;
        if (CarbonLite.carbonLiteMessageTimer) {
            this.debug('clearing message fade out timer');
            clearTimeout(CarbonLite.carbonLiteMessageTimer);
        }
        document.body.appendChild(CarbonLite.carbonLite);
        document.body.appendChild(CarbonLite.carbonLiteMessage);
    }
}

export { CarbonLite as default };
//# sourceMappingURL=CarbonLite.mjs.map
